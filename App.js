import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import SplashScreen from './screen/SplashScreen';
import LoginScreen from './screen/auth/LoginScreen';
import ForgotScreen from './screen/auth/ForgotScreen';
import PinScreen from './screen/auth/PinScreen'
import DrawerNavigationRoutes from './screen/DrawerNavigationRoutes';
import Icon from 'react-native-vector-icons/FontAwesome';
Icon.loadFont();
const Auth = createStackNavigator({
  //Stack Navigator for Login and Sign up Screen
  PinScreen: {
    screen: PinScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  ForgotScreen: {
    screen: ForgotScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
});

const App = createSwitchNavigator({
  SplashScreen: {
    /* SplashScreen which will come once for 5 Seconds */
    screen: SplashScreen,
    navigationOptions: {
      /* Hiding header for Splash Screen */
      headerShown: false,
    },
  },
  Auth: {
    /* Auth Navigator which includer Login Signup will come once */
    screen: Auth,
  },
  DrawerNavigationRoutes: {
    /* Navigation Drawer as a landing page */
    screen: DrawerNavigationRoutes,
    navigationOptions: {
      /* Hiding header for Navigation Drawer as we will use our custom header */
      headerShown: false,
    },
  },
});

export default createAppContainer(App);