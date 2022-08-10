import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {BottomTabParamList} from '../../Navigation/BottomTab/Types';

export type ContactProps = {
  navigation: StackNavigationProp<BottomTabParamList>;
  route: RouteProp<BottomTabParamList, 'ContactStack'>;
};
