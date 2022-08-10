import React from 'react';
import {StyleSheet, View} from 'react-native';

const ItemSeperator: React.FC = () => {
  return <View style={styles.spacer} />;
};

export {ItemSeperator};

const styles = StyleSheet.create({
  spacer: {
    height: 10,
    width: 10,
  },
});
