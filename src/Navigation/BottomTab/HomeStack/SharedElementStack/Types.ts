import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {UserProps} from '../../../../Components/Cards/userCard/Types';

export type SENavigatorParamList = {
  CardsList: undefined;
  UserProfile: {item: UserProps};
};

export type SEServicesNavProps = {
  navigation: StackNavigationProp<SENavigatorParamList>;
  route: RouteProp<SENavigatorParamList, 'CardsList'>;
};
