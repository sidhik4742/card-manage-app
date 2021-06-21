import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Graph from '../Icons/Graph';

const Head = () => {
  return (
    <View style={styles.headContainer}>
      <Text>Today</Text>
      <Graph />
    </View>
  );
};

export default Head;

const styles = StyleSheet.create({
  headContainer: {
    marginVertical: 30,
    marginHorizontal: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
