import * as React from 'react';
import {Text, View, StyleSheet, useWindowDimensions} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';
import {Image} from '../../Components/Common';
import {UserProfileProps} from './Types';

const UserProfile: React.FC<UserProfileProps> = props => {
  const {route} = props;
  const dimensions = useWindowDimensions();
  const {image, firstName, lastName, age, company, id} = route.params.item;

  return (
    <View style={styles.container}>
      <SharedElement id={`user.${id}.photo`}>
        <Image
          source={{uri: image}}
          style={[styles.picture, {height: dimensions.width}]}
          resizeMode={'cover'}
        />
      </SharedElement>
      <View style={styles.content}>
        <Text>{`First Name: ${firstName}`}</Text>
        <Text>{`Last Name: ${lastName}`}</Text>
        <Text>{`Age: ${age}`}</Text>
        {company && (
          <>
            <Text style={styles.label}>Company Details: </Text>
            <Text>{`${company?.address.address}, ${company?.address.postalCode}, ${company?.address.state}`}</Text>
          </>
        )}
      </View>
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 14,
  },
  picture: {
    width: '100%',
  },
  label: {fontWeight: '700', fontSize: 18},
  text: {},
});
