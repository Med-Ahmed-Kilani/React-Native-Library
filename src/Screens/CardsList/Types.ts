import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {BottomTabParamList} from '../../Navigation/BottomTab/Types';
import {MainNavigatorParamList} from '../../Navigation/MainNavigator/Types';

export type CardsListProps = {
  navigation: StackNavigationProp<MainNavigatorParamList>;
  route: RouteProp<BottomTabParamList, 'HomeStack'>;
};
