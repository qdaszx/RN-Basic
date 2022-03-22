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
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 2,
  },
  span: {
    fontWeight: 'bold',
    color: '#ffffff',
  },
});

export default ColorBox;
