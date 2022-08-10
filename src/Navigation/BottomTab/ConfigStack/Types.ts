import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export type ConfigNavigatorParamList = {
  Config: undefined;
};

export type ConfigNavProps = {
  navigation: StackNavigationProp<ConfigNavigatorParamList>;
  route: RouteProp<ConfigNavigatorParamList, 'Config'>;
};
