import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export type ContactNavigatorParamList = {
  Contact: undefined;
};

export type ContactNavProps = {
  navigation: StackNavigationProp<ContactNavigatorParamList>;
  route: RouteProp<ContactNavigatorParamList, 'Contact'>;
};
