import {NavigatorScreenParams} from '@react-navigation/native';
import {ConfigNavigatorParamList} from './ConfigStack/Types';
import {ContactNavigatorParamList} from './ContactStack/Types';
import {HomeNavigatorParamList} from './HomeStack/Types';

export type BottomTabParamList = {
  HomeStack: NavigatorScreenParams<HomeNavigatorParamList>;
  ConfigStack: NavigatorScreenParams<ConfigNavigatorParamList>;
  ContactStack: NavigatorScreenParams<ContactNavigatorParamList>;
};
