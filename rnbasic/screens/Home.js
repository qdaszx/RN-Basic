import React, { useState, useCallback, useEffect } from 'react';
import { FlatList } from 'react-native';
import PalettePreview from '../components/PalettePreview';

const Home = ({ navigation }) => {
  const [colorPalette, setColorPalette] = useState([]);

  const handleColorPalette = useCallback(async () => {
    const result = await fetch(
      'https://color-palette-api.kadikraman.vercel.app/palettes',
    );
    const palette = await result.json();

    if (result.ok) {
      setColorPalette(palette);
    }
  }, []);

  useEffect(() => {
    handleColorPalette();
  }, []);

  return (
    <FlatList
      data={colorPalette}
      keyExtractor={(item) => item.paletteName}
      renderItem={({ item }) => (
        <PalettePreview
          handlePress={() => {
            navigation.navigate('ColorPalette', item);
          }}
          palette={item}
        />
      )}
    />
  );
};

export default Home;
