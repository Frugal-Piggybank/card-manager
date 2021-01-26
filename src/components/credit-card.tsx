import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {Card} from '../interfaces/card';
import DefaultText from './common/default-text';

const CreditCard: FC<{card: Card}> = ({card}) => {
  console.log(card.primaryColor);

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
    width: '85%',
    height: 200,
    backgroundColor: 'yellow',
    borderRadius: 15,
    padding: 35,
    marginVertical: 15,
  },
  cardHeader: {
    fontWeight: 'bold',
    fontSize: 30,
  },
});
