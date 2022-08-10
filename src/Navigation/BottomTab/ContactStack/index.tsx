import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
//Types
import {ContactNavigatorParamList} from './Types';
import Contact from '../../../Screens/Contact';
import Colors from '../../../Constants/Colors';

const Stack = createStackNavigator<ContactNavigatorParamList>();

export default function () {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        options={({navigation}) => ({
          headerTitleStyle: {fontWeight: '700', fontSize: 20},
        })}
        name="Contact"
        component={Contact}
      />
    </Stack.Navigator>
  );
}
