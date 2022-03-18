import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.h1}>Here are some boxes of different colors</Text>
        <View style={[styles.div, styles.cyan]}>
          <Text style={styles.sapn}>Cyan #2aa198</Text>
        </View>
        <View style={[styles.div, styles.blue]}>
          <Text style={styles.sapn}>Blue #268bd2</Text>
        </View>
        <View style={[styles.div, styles.megenta]}>
          <Text style={styles.sapn}>Megenta #d33682</Text>
        </View>
        <View style={[styles.div, styles.orange]}>
          <Text style={styles.sapn}>Orange #cb4b16</Text>
        </View>
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
  div: {
    paddingVertical: 10,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sapn: {
    color: '#ffffff',
  },
  cyan: {
    backgroundColor: '#2aa198',
  },
  blue: {
    backgroundColor: '#268bd2',
  },
  megenta: {
    backgroundColor: '#d33682',
  },
  orange: {
    backgroundColor: '#cb4b16',
  },
});

export default App;
