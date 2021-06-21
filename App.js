import {StatusBar} from 'expo-status-bar';
import React, {Fragment} from 'react';
import {StyleSheet, Text, View, ImageBackground, Image} from 'react-native';

const bgImage = require('./assets/BG1_sm_martin-widenka-n83ma0Wd4eY-unsplash.jpg');

import LandingPage from './pages/LandingPage';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ImageBackground style={styles.backgroundImage} source={bgImage}>
        <LandingPage />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // justifyContent: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    // justifyContent: 'center',
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#ff3366',
    fontSize: 55,
    fontWeight: 'bold',
  },
});
