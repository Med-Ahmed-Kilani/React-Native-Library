import React from 'react';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import Colors from '../../../../Constants/Colors';
import CardsList from '../../../../Screens/CardsList';
import UserProfile from '../../../../Screens/userProfile';
//Types
import {SENavigatorParamList} from './Types';

const Stack = createSharedElementStackNavigator<SENavigatorParamList>();

export default function () {
  return (
    <Stack.Navigator
      initialRouteName="CardsList"
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
        name="CardsList"
        component={CardsList}
      />
      <Stack.Screen
        options={({route, navigation}) => ({
          headerTitleStyle: {fontWeight: '700', fontSize: 20},
          headerTransparent: true,
          headerTitle: route.params.item.firstName,
        })}
        sharedElements={(route, otherRoute, showing) => {
          return [`user.${route.params.item.id}.photo`];
        }}
        name="UserProfile"
        component={UserProfile}
      />
    </Stack.Navigator>
  );
}
