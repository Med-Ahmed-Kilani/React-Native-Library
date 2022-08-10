import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {ConfigProps} from './Types';

const Config: React.FC<ConfigProps> = props => {
  return (
    <View style={styles.container}>
      <Text>Contact</Text>
    </View>
  );
};

export default Config;

const styles = StyleSheet.create({
  container: {},
});
