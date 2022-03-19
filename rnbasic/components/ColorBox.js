import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ColorBox = ({ hexCode, colorName }) => {
  const colorStyle = {
    backgroundColor: hexCode,
  };
  return (
    <View style={[styles.div, colorStyle]}>
      <Text style={styles.span}>
        {colorName} {hexCode}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  div: {
    paddingVertical: 10,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  span: {
    fontWeight: 'bold',
    color: '#ffffff',
  },
});

export default ColorBox;
