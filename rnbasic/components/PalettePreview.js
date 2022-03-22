import React from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  View,
} from 'react-native';

const PalettePreview = ({ handlePress, palette }) => {
  return (
    <TouchableOpacity onPress={() => handlePress()} style={styles.container}>
      <Text style={styles.h2}>{palette.paletteName}</Text>
      <FlatList
        style={styles.direction}
        data={palette.colors.slice(0, 5)}
        keyExtractor={(item) => item.colorName}
        renderItem={({ item }) => (
          <View style={[styles.box, { backgroundColor: item.hexCode }]} />
        )}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    marginHorizontal: 15,
  },
  h2: {
    paddingBottom: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  box: {
    marginRight: 5,
    height: 30,
    width: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 2,
  },
  direction: {
    flexDirection: 'row',
  },
});

export default PalettePreview;
