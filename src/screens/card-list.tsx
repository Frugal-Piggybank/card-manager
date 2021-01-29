import React, {FC} from 'react';
import {FlatList} from 'react-native-gesture-handler';
import CreditCard from '../components/credit-card';
import Layout from '../components/shared/layout';
import MockCards from '../data/mock-cards';

const CardListScreen: FC = () => {
  const renderCard = ({item}: any) => <CreditCard card={item} />;

  return (
    <Layout>
      <FlatList
        data={MockCards}
        renderItem={renderCard}
        keyExtractor={(card) => `${card.id}`}
      />
    </Layout>
  );
};

export default CardListScreen;
