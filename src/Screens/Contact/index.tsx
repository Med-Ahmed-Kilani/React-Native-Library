import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  Image,
  useWindowDimensions,
} from 'react-native';
import {Images} from '../../Assets';
import Colors from '../../Constants/Colors';
import {ContactProps} from './Types';

const Contact: React.FC<ContactProps> = props => {
  const dimensions = useWindowDimensions();
  const {navigation} = props;
  //useEffect
  React.useEffect(() => {
    navigation.addListener('focus', () => {
      StatusBar.setBarStyle('light-content', true);
    });
    navigation.addListener('blur', () => {
      StatusBar.setBarStyle('dark-content', true);
    });
  }, [navigation]);
  return (
    <View style={styles.container}>
      <Image
        source={Images.ProfilePic}
        style={[
          styles.picture,
          {
            height: dimensions.height * 0.35,
            width: dimensions.width,
          },
        ]}
      />
      <View style={styles.content}>
        <Text style={styles.title}>MED AHMED KILANI</Text>
      </View>
    </View>
  );
};

export default Contact;

const styles = StyleSheet.create({
  container: {flex: 1},
  picture: {resizeMode: 'cover'},
  content: {
    backgroundColor: Colors['Rich Black FOGRA 29'],
    top: -30,
    flex: 1,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    padding: 30,
  },
  title: {color: Colors.White, fontSize: 32},
});
