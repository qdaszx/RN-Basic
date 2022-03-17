import React, { useState, useCallback, useEffect } from 'react';
import { FlatList, RefreshControl } from 'react-native';
import PalettePreview from '../components/PalettePreview';

const Home = ({ navigation }) => {
  const [colorPalette, setColorPalette] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleColorPalette = useCallback(async () => {
    const result = await fetch(
      'https://color-palette-api.kadikraman.vercel.app/palettes',
    );
    const palette = await result.json();

    if (result.ok) {
      setColorPalette(palette);
    }
  }, []);

  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true);
    await handleColorPalette();
    setTimeout(() => {
      setIsRefreshing(false);
    }, 1000);
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
      refreshControl={
        <RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh} />
      }
    />
  );
};

export default Home;
