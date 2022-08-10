import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {SENavigatorParamList} from '../../Navigation/BottomTab/HomeStack/SharedElementStack/Types';
import {HomeNavigatorParamList} from '../../Navigation/BottomTab/HomeStack/Types';
import {MainNavigatorParamList} from '../../Navigation/MainNavigator/Types';

export type UserProfileProps = {
  navigation: StackNavigationProp<SENavigatorParamList>;
  route: RouteProp<SENavigatorParamList, 'UserProfile'>;
};
