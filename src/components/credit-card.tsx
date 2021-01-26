import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {Card} from '../interfaces/card';
import DefaultText from './common/default-text';

const CreditCard: FC<{card: Card}> = ({card}) => {
  return (
    <View style={styles.cardContainer}>
      <DefaultText>{`${card.issuer}`}</DefaultText>
      <DefaultText>{card.name}</DefaultText>
    </View>
  );
};

export default CreditCard;

const styles = StyleSheet.create({
  cardContainer: {
    width: '85%',
    height: 200,
    backgroundColor: 'yellow',
    borderRadius: 15,
    padding: 35,
    marginVertical: 15,
  },
});
