import {
  Image,
  Text,
  StatusBar,
  TouchableOpacity,
  View,
  StyleSheet,
  ActivityIndicator,
  Modal,
} from 'react-native';
import AppColors from '../Constants/AppColors';
import {verticalScale, moderateScale, scale} from 'react-native-size-matters';
import FastImage from 'react-native-fast-image';

export const Header = ({title}) => {
  return (
    <View
      style={{
        flexDirection: 'row',

        alignItems: 'center',
        height: verticalScale(50),
        width: '100%',
      }}>
      <FastImage
        resizeMode="contain"
        style={{
          height: verticalScale(40),
          width: verticalScale(60),
        }}
        source={{
          uri: 'data:image/jpeg;base64,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',
        }}
      />
      <Text
        style={{
          fontSize: moderateScale(18),
          fontWeight: '700',
          color: AppColors.black,
        }}>
        {title}
      </Text>
    </View>
  );
};

export const TitleText = ({title, style}) => {
  return (
    <Text
      style={[
        {
          textAlign: 'center',
          fontSize: moderateScale(20),
          fontWeight: '500',
          color: AppColors.black,
          marginHorizontal: scale(20),
          marginVertical: verticalScale(20),
        },
        style,
      ]}>
      {title}
    </Text>
  );
};
