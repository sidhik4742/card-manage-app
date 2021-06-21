import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const CardNumber = () => {
  return (
    <View style={styles.cardNumberContainer}>
      <Text style={styles.text}>1234</Text>
      <Text style={styles.text}>5678</Text>
      <Text style={styles.text}>9123</Text>
      <Text style={styles.text}>4567</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardNumberContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    marginTop:5,
  },
  text: {
    color: '#fff',
    marginHorizontal: 10,
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
});

export default CardNumber;
