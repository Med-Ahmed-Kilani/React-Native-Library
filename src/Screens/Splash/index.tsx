import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Colors from '../../Constants/Colors';

const Splash = () => {
  return (
    <View style={styles.container}>
      <Text style={{color: 'red'}}>Splash</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: Colors['Rich Black FOGRA 29']},
});
