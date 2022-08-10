import React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import BottomTab from '../BottomTab';
import {createStackNavigator} from '@react-navigation/stack';
import {MainNavigatorParamList} from './Types';
import Colors from '../../Constants/Colors';
import UserProfile from '../../Screens/userProfile';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';

// const Stack = createStackNavigator<MainNavigatorParamList>();
const Stack = createSharedElementStackNavigator<MainNavigatorParamList>();

const renderNavigator = () => {
  // if (loadingApp) {
  // return (
  //   <Stack.Screen
  //     options={{headerShown: false}}
  //     name="Splash"
  //     component={Splash}
  //   />
  // );
  // } else {
  return (
    <Stack.Screen
      options={{headerShown: false}}
      name="BottomTabNavigator"
      component={BottomTab}
    />
  );
  // }
};

export default function () {
  return (
    <NavigationContainer
      theme={{
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          text: Colors.White,
          primary: Colors['Prussian Blue'],
          background: Colors['Rich Black FOGRA 29'],
        },
      }}>
      <Stack.Navigator>{renderNavigator()}</Stack.Navigator>
      {/* <BottomTab /> */}
    </NavigationContainer>
  );
}
