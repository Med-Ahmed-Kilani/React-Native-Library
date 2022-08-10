import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {BottomTabParamList} from '../../Navigation/BottomTab/Types';

export type ConfigProps = {
  navigation: StackNavigationProp<BottomTabParamList>;
  route: RouteProp<BottomTabParamList, 'ConfigStack'>;
};
