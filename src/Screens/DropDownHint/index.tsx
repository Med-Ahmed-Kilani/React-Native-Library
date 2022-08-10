import * as React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import {DropDownHolder} from '../../Utils';
import {DropDownHintProps} from './Types';

const DropDownHint: React.FC<DropDownHintProps> = props => {
  const onPressDropDown = (kind: 'success' | 'warn' | 'error') => {
    DropDownHolder.alert(kind, 'tesssssssssst', 'tesssssssssssst');
  };
  return (
    <View style={styles.container}>
      <Button
        title="success"
        onPress={() => {
          onPressDropDown('success');
        }}
      />
      <Button
        title="warn"
        onPress={() => {
          onPressDropDown('warn');
        }}
      />
      <Button
        title="error"
        onPress={() => {
          onPressDropDown('error');
        }}
      />
    </View>
  );
};

export default DropDownHint;

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'space-around', marginBottom: 80},
});
