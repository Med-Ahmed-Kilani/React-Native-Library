import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export type HomeNavigatorParamList = {
  Home: undefined;
  DropDownHint: undefined;
  SEStack: undefined;
};

export type HomeServicesNavProps = {
  navigation: StackNavigationProp<HomeNavigatorParamList>;
  route: RouteProp<HomeNavigatorParamList, 'Home'>;
};
