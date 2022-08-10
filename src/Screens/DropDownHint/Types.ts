import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {HomeNavigatorParamList} from '../../Navigation/BottomTab/HomeStack/Types';

export type DropDownHintProps = {
  navigation: StackNavigationProp<HomeNavigatorParamList>;
  route: RouteProp<HomeNavigatorParamList, 'DropDownHint'>;
};
