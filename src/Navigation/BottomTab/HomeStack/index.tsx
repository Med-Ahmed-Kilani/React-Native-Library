import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
//Screens
import Home from '../../../Screens/Home';
import SharedElementStack from './SharedElementStack';
//Types
import {HomeNavigatorParamList} from './Types';
//Constants
import Colors from '../../../Constants/Colors';
import DropDownHint from '../../../Screens/DropDownHint';

const Stack = createStackNavigator<HomeNavigatorParamList>();

export default function () {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: Colors['Prussian Blue'],
        },
      }}>
      <Stack.Screen
        options={({navigation}) => ({
          headerTitleStyle: {fontWeight: '700', fontSize: 20},
        })}
        name="Home"
        component={Home}
      />
      <Stack.Screen
        options={({navigation}) => ({
          headerTitleStyle: {fontWeight: '700', fontSize: 20},
          headerShown: false,
        })}
        name="SEStack"
        component={SharedElementStack}
      />
      <Stack.Screen
        options={({navigation}) => ({
          headerTitleStyle: {fontWeight: '700', fontSize: 20},
        })}
        name="DropDownHint"
        component={DropDownHint}
      />
    </Stack.Navigator>
  );
}
