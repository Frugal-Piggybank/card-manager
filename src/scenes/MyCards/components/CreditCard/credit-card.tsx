import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Card} from '@shared/interfaces/card';
import {defaultStyles} from '@shared/styles/default-styles';

const CreditCard: FC<{card: Card}> = ({card}) => {
  return (
    <View style={[styles.cardContainer, {backgroundColor: card.primaryColor}]}>
      <Text
        style={[
          styles.cardHeader,
          {color: card.secondaryColor},
        ]}>{`${card.issuer}`}</Text>
      <Text style={[defaultStyles.text, {color: card.secondaryColor}]}>
        {card.name}
      </Text>
    </View>
  );
};

export default CreditCard;

const styles = StyleSheet.create({
  cardContainer: {
    height: 200,
    borderRadius: 15,
    padding: 35,
    marginVertical: 15,
  },
  cardHeader: {
    fontWeight: 'bold',
    fontSize: 30,
  },
});
