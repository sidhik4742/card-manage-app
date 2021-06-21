import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import Card from '../src/Components/Card';
import Menu from '../src/Components/Menu';

const LandingPage = () => {
  return (
    <View style={styles.landingContainer}>
      <Card />
      <Menu />
    </View>
  );
};

const styles = StyleSheet.create({
  landingContainer: {
    height: '100%',
  },
});

export default LandingPage;
