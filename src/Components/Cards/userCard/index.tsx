import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  useWindowDimensions,
  TouchableOpacity,
} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';
import AntDesign from 'react-native-vector-icons/AntDesign';
//Components
import {Image} from '../../Common';
//Constants
import Colors from '../../../Constants/Colors';
//Types
import {UserCardProps} from './Types';

const UserCard: React.FC<UserCardProps> = props => {
  const dimensions = useWindowDimensions();

  return (
    <TouchableOpacity onPress={props.onPress} style={styles.container}>
      <SharedElement id={`user.${props.item.id}.photo`}>
        <Image
          source={{uri: props.item.image}}
          resizeMode="cover"
          style={[
            styles.picture,
            {
              height: dimensions.width / 2,
              width: dimensions.width * 0.45,
            },
          ]}
        />
      </SharedElement>

      <TouchableOpacity style={styles.iconContainer} onPress={props.onDelete}>
        <AntDesign
          name="closecircleo"
          size={24}
          color={Colors['Silver Metallic']}
        />
      </TouchableOpacity>
      <View style={styles.content}>
        <Text
          style={
            styles.text
          }>{`${props.item.firstName}, ${props.item.age}`}</Text>
      </View>
    </TouchableOpacity>
  );
};

export {UserCard};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    margin: 6,
    borderRadius: 8,
    borderColor: Colors.White,
    overflow: 'hidden',
  },
  content: {},
  icon: {height: 26, width: 18},
  iconContainer: {position: 'absolute', top: 0, right: 0, padding: 16},
  picture: {justifyContent: 'flex-end', padding: 4},
  text: {color: Colors.White},
});
