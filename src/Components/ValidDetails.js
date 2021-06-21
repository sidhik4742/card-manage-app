import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const ValidDetails = () => {
  return (
    <View style={styles.validContainer}>
      <View style={styles.validHeadContainer}>
        <View style={styles.validHeadSubContainer}>
          <Text style={styles.validHead}> VALID FROM </Text>
          <Text style={styles.validValue}> 01/19 </Text>
        </View>
        <View style={styles.validHeadSubContainer}>
          <Text style={styles.validHead}> VALID THRU </Text>
          <Text style={styles.validValue}> 01/24 </Text>
        </View>
      </View>
      <View></View>
    </View>
  );
};

export default ValidDetails;

const styles = StyleSheet.create({
  validContainer: {
    marginLeft: 90,
  },
  validHeadContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  validHeadSubContainer: {
    width: 50,
    alignItems: 'center',
  },
  validHead: {
    color: '#fff',
    fontSize: 7,
    marginLeft: 15,
  },
  validValue: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
