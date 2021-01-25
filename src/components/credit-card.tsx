import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Card} from '../interfaces/card';

const CreditCard: FC<{card: Card}> = ({card}) => {
  return (
    <View style={styles.creditCard}>
      <Text>
        {`${card.issuer}`} {card.name}
      </Text>
    </View>
  );
};

export default CreditCard;

const styles = StyleSheet.create({
  creditCard: {
    width: 100,
    height: 50,
    backgroundColor: 'yellow',
    marginVertical: 5,
  },
});
