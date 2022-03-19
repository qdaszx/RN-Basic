import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import ColorBox from './components/ColorBox';

const App = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.h1}>Here are some boxes of different colors</Text>
        <ColorBox hexCode={'#2aa198'} colorName={'Cyan'} />
        <ColorBox hexCode={'#268bd2'} colorName={'Blue'} />
        <ColorBox hexCode={'#d33682'} colorName={'Megenta'} />
        <ColorBox hexCode={'#cb4b16'} colorName={'Orange'} />
      </View>
    </SafeAreaView>
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

export default App;
