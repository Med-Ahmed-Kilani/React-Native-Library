import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
//Types
import {ConfigNavigatorParamList} from './Types';
import Config from '../../../Screens/Config';
import Colors from '../../../Constants/Colors';

const Stack = createStackNavigator<ConfigNavigatorParamList>();

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
        name="Config"
        component={Config}
      />
    </Stack.Navigator>
  );
}
