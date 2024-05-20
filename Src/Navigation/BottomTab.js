import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, StyleSheet, View} from 'react-native';
import AppColors from '../Constants/AppColors';

import Bookmark from '../Screens/Bookmarks';

import Home from '../Screens/Home';
import Activity from '../Screens/Activity';
import Account from '../Screens/Account';
const Tab = createBottomTabNavigator();

export default BottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,

        tabBarStyle: {
          height: 65,

          backgroundColor: AppColors.white,
          ...styles.shadow,
        },
        tabBarIconStyle: {
          top: 2,
        },
      }}>
      <Tab.Screen
        name="Home"
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <View style={{}}>
              <Image
                resizeMode="contain"
                style={[
                  styles.iconStyle,
                  {
                    tintColor: focused ? AppColors.blue : color,
                  },
                ]}
                source={require('../Assets/Images/homeTabIcon.png')}
              />
            </View>
          ),
        }}
        component={Bookmark}
      />
      <Tab.Screen
        name="Services"
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <View style={{}}>
              <Image
                resizeMode="contain"
                style={[
                  styles.iconStyle,
                  {
                    tintColor: focused ? AppColors.blue : color,
                  },
                ]}
                source={{
                  uri: 'https://cdn-icons-png.flaticon.com/512/80/80975.png',
                }}
              />
            </View>
          ),
        }}
        component={Home}
      />
      <Tab.Screen
        name="Activity"
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <View style={{}}>
              <Image
                resizeMode="contain"
                style={[
                  styles.iconStyle,
                  {
                    tintColor: focused ? AppColors.blue : color,
                  },
                ]}
                source={{
                  uri: 'https://static.thenounproject.com/png/118540-200.png',
                }}
              />
            </View>
          ),
        }}
        component={Activity}
      />
      <Tab.Screen
        name="Account"
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <View style={{}}>
              <Image
                resizeMode="contain"
                style={[
                  styles.iconStyle,
                  {
                    tintColor: focused ? AppColors.blue : color,
                  },
                ]}
                source={require('../Assets/Images/user.png')}
              />
            </View>
          ),
        }}
        component={Account}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,

    elevation: 13,
  },
  iconStyle: {
    height: 25,
    width: 25,
  },
});
