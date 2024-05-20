import {ActivityIndicator, Image, Text, TouchableOpacity} from 'react-native';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import AppColors from '../Constants/AppColors';
import FastImage from 'react-native-fast-image';

export const PrimaryButton = props => {
  const {title, textStyle, isLoading, style} = props;
  return (
    <TouchableOpacity
      {...props}
      disabled={isLoading}
      activeOpacity={0.8}
      style={[
        {
          height: verticalScale(48),
          marginVertical: verticalScale(5),
          alignSelf: 'center',
          borderRadius: 10,
          width: '70%',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: AppColors.blue,
        },
        style,
      ]}>
      {isLoading ? (
        <ActivityIndicator color={AppColors.white} size={'large'} />
      ) : (
        <Text
          style={[
            {
              fontSize: moderateScale(16),
              color: AppColors.black,
              fontWeight: '700',
            },
            textStyle,
          ]}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};
export const IconBtn = ({onPress, iconStyle, style, icon}) => {
  return (
    <TouchableOpacity
      style={[
        {
          justifyContent: 'center',
          alignItems: 'center',
          height: verticalScale(40),
          width: verticalScale(40),
        },
        style,
      ]}
      activeOpacity={0.8}
      onPress={onPress}>
      <FastImage
        source={icon}
        style={[
          {height: verticalScale(30), width: verticalScale(30)},
          iconStyle,
        ]}
        resizeMode={'contain'}
      />
    </TouchableOpacity>
  );
};
