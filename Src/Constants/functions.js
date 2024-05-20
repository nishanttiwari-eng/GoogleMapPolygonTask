import {Dimensions, Platform} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import {resetUser} from '../Redux/userSlice';
// import DeviceInfo from 'react-native-device-info';

export const IS_ANDROID = Platform.OS == 'android';
export const IS_IOS = Platform.OS == 'ios';
export const SCREEN_HEIGHT = Dimensions.get('screen').height;
export const SCREEN_WIDTH = Dimensions.get('screen').width;
export const internetErrorMessage = 'Please check internet connection';

export const Google_WebClient_Id =
  '789220174113-rllt2v02t0npaa292klvv7v6nbfir876.apps.googleusercontent.com';

export const timeOut = promise => {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      reject(new Error('Server Connection Timeout Error!'));
    }, 20000);
    promise.then(resolve, reject);
  });
};

export const checkInternetConnected = async () => {
  const internetState = await NetInfo.fetch();
  return internetState.isConnected;
};

export const capitalizeOnlyFirstLetter = letter => {
  try {
    return letter.charAt(0).toUpperCase() + letter.slice(1);
  } catch (error) {
    console.log('capitalizeOnlyFirstLetter Error : ', error.message);
  }
};
