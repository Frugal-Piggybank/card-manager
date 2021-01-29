import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {Card} from '../interfaces/card';
import DefaultText from './defaults/default-text';

const CreditCard: FC<{card: Card}> = ({card}) => {
  return (
    <View style={[styles.cardContainer, {backgroundColor: card.primaryColor}]}>
      <DefaultText
        textStyles={[
          styles.cardHeader,
          {color: card.secondaryColor},
        ]}>{`${card.issuer}`}</DefaultText>
      <DefaultText textStyles={[{color: card.secondaryColor}]}>
        {card.name}
      </DefaultText>
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
