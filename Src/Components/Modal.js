import {FlatList, Modal, StyleSheet, TextInput, View} from 'react-native';
import {IconBtn, PrimaryButton} from './Buttons';
import {EmptyMessage, ListItem} from './Cards';
import {Input} from './Input';
import {verticalScale} from 'react-native-size-matters';
import FastImage from 'react-native-fast-image';

export const AreaListModal = ({
  areas,
  setNameInput,
  startDrawing,
  drawing,
  visible,
  onPressSave,
  onClose,
  onDelete,
}) => {
  return (
    <Modal visible={visible} animationType="slide">
      <IconBtn
        style={{
          top: verticalScale(5),
          position: 'absolute',
          alignSelf: 'flex-start',
          borderRadius: 100,
          height: 60,
          width: 60,
          bottom: verticalScale(10),
        }}
        icon={{
          uri: 'https://png.pngtree.com/png-vector/20190412/ourmid/pngtree-vector-back-icon-png-image_931209.jpg',
        }}
        title="Close"
        onPress={onClose}
      />
      <View style={styles.modalContent}>
        <FlatList
          data={areas}
          scrollEnabled={areas.length > 0 ? true : false}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id}
          ListEmptyComponent={() => <EmptyMessage msg={'No data found!'} />}
          renderItem={({item, index}) => (
            <ListItem
              onDelete={() => onDelete(item.id)}
              index={index}
              item={item}
            />
          )}
        />
        {drawing ? (
          <>
            <Input placeholder="Enter Area Name" onChangeText={setNameInput} />

            <PrimaryButton
              textStyle={{color: 'white'}}
              title="Save Area"
              onPress={onPressSave}
            />
          </>
        ) : (
          <PrimaryButton
            textStyle={{color: 'white'}}
            title="Select Area"
            onPress={startDrawing}
          />
        )}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContent: {
    flex: 1,
    padding: 20,
    marginTop: verticalScale(50),
  },
});
