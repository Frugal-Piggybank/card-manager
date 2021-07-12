import React, {FC, useEffect, useState} from 'react';
import Layout from '@shared/components/Layout';
import {Text} from 'react-native';
import {defaultStyles} from '@shared/styles/default-styles';
import UpsertCardForm from './upsert-card-form';
import {Card} from '@shared/interfaces/card';

interface UpsertCardProps {
  id?: string;
}

const UpsertCard: FC<UpsertCardProps> = ({id}) => {
  const [creditCard, setCreditCard] = useState<Card>();

  useEffect(() => {
    if (id) {
      console.log(`Getting card information for ${id}`);
    } else {
      console.log('Adding a new card');
    }
  }, [id]);

  return (
    <Layout>
      <Text style={defaultStyles.text}>
        Fill out the information below to add a new card
      </Text>
      <UpsertCardForm creditCard={creditCard} />
    </Layout>
  );
};

export default UpsertCard;
