import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  FlatList,
  Modal,
  TextInput,
  StyleSheet,
  PermissionsAndroid,
  Alert,
  NativeModules,
} from 'react-native';
// import {isLocationEnabled} from 'react-native-android-location-enabler';
import RNAndroidLocationEnabler from 'react-native-android-location-enabler';
import Geolocation from 'react-native-geolocation-service';
import MapView, {Polygon, Marker} from 'react-native-maps';
import uuid from 'react-native-uuid';
import {getAreaOfPolygon} from 'geolib';
import {moderateScale, verticalScale} from 'react-native-size-matters';
import {PrimaryButton} from './Components/Buttons';
import {AreaListModal} from './Components/Modal';
import {capitalizeOnlyFirstLetter} from './Constants/functions';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [areas, setAreas] = useState([]);
  const [currentPolygon, setCurrentPolygon] = useState([]);
  const [drawing, setDrawing] = useState(false);
  const [nameInput, setNameInput] = useState('');

  // console.log('areas------', areas);

  const handleMapPress = e => {
    if (drawing) {
      setCurrentPolygon([...currentPolygon, e.nativeEvent.coordinate]);
    }
  };

  useEffect(() => {
    // enableLocaton();
  });

  const enableLocaton = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Access Required',
          message: 'This App needs to Access your location',
        },
      );
      console.log('granted-----', granted);
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      } else {
        Alert.alert('Alert', 'Please Enable Loaction..');
      }
    } catch (error) {
      console.log('enableLocaton error===>', error);
      Alert.alert('Alert', error.message);
    }
  };

  const finishPolygon = () => {
    if (currentPolygon) {
      // Ensure there are enough points to form a polygon
      const areaInMeters = getAreaOfPolygon(currentPolygon);
      console.log('areaInMeters---------', areaInMeters);
      const areaInSquareFeet = areaInMeters * 10.7639; // Convert square meters to square feet
      setAreas([
        ...areas,
        {
          id: uuid.v4(),
          name: nameInput,
          coordinates: currentPolygon,
          area: areaInSquareFeet,
        },
      ]);
      setCurrentPolygon([]);
      setDrawing(false);
      setModalVisible(false);
    } else {
      Alert.alert('Alert', 'A polygon requires at least 3 points.');
    }
  };

  const startDrawing = () => {
    setDrawing(true);
    setModalVisible(false);
  };

  const deleteArea = id => {
    setAreas(areas.filter(area => area.id !== id));
  };

  return (
    <View style={{flex: 1}}>
      <MapView style={{flex: 1}} onPress={handleMapPress}>
        {areas.map(area => (
          <Polygon
            key={area.id}
            coordinates={area.coordinates}
            fillColor="rgba(0, 200, 0, 0.3)"
            strokeColor="rgba(0,0,0,0.5)"
            strokeWidth={2}
          />
        ))}
        {currentPolygon.length > 0 && (
          <Polygon
            coordinates={currentPolygon}
            fillColor="rgba(0, 200, 0, 0.3)"
            strokeColor="rgba(0,0,0,0.5)"
            strokeWidth={2}
          />
        )}
        {areas.map(area => (
          <Marker
            key={area.id}
            coordinate={
              area.coordinates[Math.floor(area.coordinates.length / 2)]
            }
            onPress={data => console.log('seleted data----', data)}
            title={capitalizeOnlyFirstLetter(area.name) || 'No name'}
            description={`${area.area ? area.area.toFixed(2) : 0} sq ft`}
          />
        ))}
      </MapView>

      <PrimaryButton
        textStyle={{color: 'white'}}
        style={{
          position: 'absolute',
          alignSelf: 'center',
          bottom: verticalScale(10),
        }}
        title="List"
        onPress={() => setModalVisible(true)}
      />
      {drawing && (
        <PrimaryButton
          textStyle={{color: 'white'}}
          style={{
            position: 'absolute',
            alignSelf: 'center',
            bottom: verticalScale(10),
          }}
          title="Finish"
          onPress={() => setModalVisible(true)}
        />
      )}
      <AreaListModal
        startDrawing={() => startDrawing()}
        drawing={drawing}
        areas={areas}
        setNameInput={text => setNameInput(text)}
        visible={modalVisible}
        onPressSave={() => finishPolygon()}
        onClose={() => setModalVisible(false)}
        onDelete={id => deleteArea(id)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listButton: {
    position: 'absolute',
    top: 50,
    right: 20,
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  finishButton: {
    position: 'absolute',
    top: 50,
    right: 20,
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  modalContent: {
    flex: 1,
    padding: 20,
  },
});

export default App;
