import * as React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import {ItemSeperator} from '../../Components/Common';
// Types
import {HomeProps} from './Types';

const Home: React.FC<HomeProps> = props => {
  const onPressSharedElements = () => {};
  return (
    <View style={styles.container}>
      <ItemSeperator />
      <Button
        title="Shared Elements"
        onPress={() => {
          props.navigation.navigate('SEStack');
        }}
      />
      <ItemSeperator />

      <Button
        title="Drop down hint"
        onPress={() => {
          props.navigation.navigate('DropDownHint');
        }}
      />
      <ItemSeperator />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'space-around', marginBottom: 80},
});
