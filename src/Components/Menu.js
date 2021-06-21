import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Head from './Head';
import Items from './Items';

const Menu = () => {
  return (
    <View style={styles.menuContainer}>
      <View style={styles.innerMenuContainer}>
        <Head />
        <Items/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    backgroundColor: '#000',
    width: '100%',
    height: 350,
    position: 'absolute',
    bottom: 0,
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
  },
  innerMenuContainer: {
    backgroundColor: '#fff',
    width: '100%',
    height: 270,
    position: 'absolute',
    bottom: 0,
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
  },
});

export default Menu;
