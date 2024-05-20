import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import AppColors from '../Constants/AppColors';

export const Input = props => {
  const {isSearch} = props;
  return (
    <TextInput
      {...props}
      cursorColor={AppColors.blue}
      placeholderTextColor={AppColors.skyBlue}
      clearButtonMode={'always'}
      style={{
        alignSelf: 'center',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: AppColors.dimGray,
        marginVertical: 5,
        height: verticalScale(60),
        width: '100%',
        paddingLeft: scale(10),
        fontSize: moderateScale(13),
        color: AppColors.skyBlue,
      }}
    />
  );
};
