import {StatusBar} from 'expo-status-bar';
import React, {Fragment} from 'react';
import {StyleSheet, Text, View, ImageBackground, Image} from 'react-native';

const bgImage = require('./assets/BG1_sm_martin-widenka-n83ma0Wd4eY-unsplash.jpg');
const chipImage = require('./assets/atmCardChip.png');

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ImageBackground style={styles.backgroundImage} source={bgImage}>
        <View style={styles.cardContainer}></View>
        <View>
          {/* <Image style={styles.chipImage}  source={chipImage} /> */}
        </View>
        {/* <View style={styles.textContainer}>
          <Text style={styles.text}>Hi Sidhik</Text>
        </View> */}
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
  cardContainer: {
    alignSelf: 'center',
    marginTop: 100,
    width: '85%',
    height: 200,
    backgroundColor: '#000',
    borderRadius: 30,
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
