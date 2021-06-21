import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

// const ChipImage = require('../../assets/Smart-Chip-CPU-by-Merlin2525.svg');
import ChipImage from '../../assets/Smart-Chip-CPU-by-Merlin2525.svg';
import Chip from '../Icons/Chip';
import Visa from '../Icons/visa';
import CardNumber from './CardNumber';
import ValidDetails from './ValidDetails';

const Card = () => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.headContainer}>
        <Text style={styles.headText}>FEDERAL BANK</Text>
      </View>
      <Chip />
      <CardNumber />
      <ValidDetails />
      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>SIDHIK A.R</Text>
        <Visa style={styles.footerIcon} />
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  cardContainer: {
    alignSelf: 'center',
    marginTop: 100,
    width: '85%',
    height: 200,
    backgroundColor: '#000',
    borderRadius: 30,
  },
  headContainer: {
    alignSelf: 'flex-end',
    marginHorizontal: 15,
    marginVertical: 6,
  },
  headText: {
    color: '#fff',
    fontStyle: 'italic',
    fontWeight: '500',
  },
  footerContainer: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-around',
  },
  footerText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '400',
  },
  footerIcon: {
    
  },
});
