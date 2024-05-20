import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {verticalScale} from 'react-native-size-matters';
import AppColors from '../Constants/AppColors';
import LinearGradient from 'react-native-linear-gradient';
import {PrimaryButton} from './Buttons';
import {SCREEN_HEIGHT, capitalizeOnlyFirstLetter} from '../Constants/functions';

export const ListItem = ({item, onDelete, index}) => {
  return (
    <View
      style={{
        borderBottomWidth: 2,
        borderColor: AppColors.lineGray,
        flexDirection: 'row',
        justifyContent: 'space-around',
      }}>
      <View style={styles.listItem}>
        <Text
          style={{fontSize: 20, fontWeight: 'bold', color: AppColors.black}}>
          {'Area Name :  '}
          {capitalizeOnlyFirstLetter(item.name)}
        </Text>
        <Text>
          {'Total Area :  '}
          {item.area ? item.area.toFixed(2) : 0} sq ft
        </Text>
      </View>
      <PrimaryButton
        textStyle={{color: 'white'}}
        style={{width: verticalScale(80)}}
        title="Delete"
        onPress={onDelete}
      />
    </View>
  );
};

export const EmptyMessage = props => {
  const {msg, styles} = props;
  return (
    <View
      style={[
        {
          height: SCREEN_HEIGHT / verticalScale(1.35),
          justifyContent: 'center',
          alignItems: 'center',
        },
        styles,
      ]}>
      <Text
        style={{
          fontSize: 23,
          fontWeight: 'bold',
          alignSelf: 'center',
          color: AppColors.blue,
        }}>
        {msg}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  listItem: {
    color: AppColors.lightBlue,
  },
});
