import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {BottomFabBar} from 'rn-wave-bottom-bar';
import MaterielIcons from 'react-native-vector-icons/MaterialIcons';
//Constants
import Colors from '../../Constants/Colors';

//Types
import {BottomTabParamList} from './Types';
import ConfigStack from './ConfigStack';
import HomeStack from './HomeStack';
import ContactStack from './ContactStack';

const Tab = createBottomTabNavigator<BottomTabParamList>();

export default function () {
  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        tabBarActiveTintColor: Colors['Carolina Blue'],
        tabBarActiveBackgroundColor: Colors['Carolina Blue'],
        headerShown: false,
        unmountOnBlur: true,
      }}
      tabBar={props => (
        <BottomFabBar
          mode="default"
          focusedButtonStyle={{
            shadowColor: Colors['Silver Metallic'],
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.2,
            shadowRadius: 1.41,

            elevation: 2,
          }}
          bottomBarContainerStyle={{
            backgroundColor: Colors['Rich Black FOGRA 29'],
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          }}
          {...props}
        />
      )}>
      <Tab.Screen
        options={{
          lazy: false,
          tabBarIcon: () => (
            <MaterielIcons name="contact-page" size={24} color="#FFF" />
          ),
        }}
        name="ContactStack"
        component={ContactStack}
      />
      <Tab.Screen
        options={{
          lazy: false,
          tabBarIcon: () => (
            <MaterielIcons name="home" size={24} color="#FFF" />
          ),
        }}
        name="HomeStack"
        component={HomeStack}
      />
      <Tab.Screen
        options={{
          lazy: false,
          tabBarIcon: () => (
            <MaterielIcons name="settings" size={24} color="#FFF" />
          ),
        }}
        name="ConfigStack"
        component={ConfigStack}
      />
    </Tab.Navigator>
  );
}
