import React from 'react';
import { Text, StyleSheet, FlatList, View } from 'react-native';
import ColorBox from '../components/ColorBox';

const ColorPalette = ({ route }) => {
  return (
    <FlatList
      style={styles.container}
      data={route.params.colors}
      keyExtractor={(item) => item.hexCode}
      renderItem={({ item }) => (
        <ColorBox colorName={item.colorName} hexCode={item.hexCode} />
      )}
      ListHeaderComponent={
        <View>
          <Text style={styles.h1}>{route.params.paletteName}</Text>
        </View>
      }
    />
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 30,
    marginHorizontal: 15,
  },
  h1: {
    paddingBottom: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ColorPalette;
