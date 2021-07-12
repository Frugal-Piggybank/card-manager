import React, {FC, useEffect, useState} from 'react';
import {FlatList} from 'react-native-gesture-handler';
import CreditCard from '../scenes/MyCards/components/CreditCard/credit-card';
import Layout from '../components/shared/layout';
import MockCards from '../data/mock-cards';
import MockCategories from '../data/mock-categories';
import {Card} from '../interfaces/card';
import {Category} from '../interfaces/Category';
import {Text} from 'react-native';
import {defaultStyles} from '../shared/styles/default-styles';

const CategoryDetailScreen: FC<{route: any}> = ({route}) => {
  const [category, setCategory] = useState<Category>();
  const [creditCards, setCreditCards] = useState<Card[]>([]);
  const categoryId = route.params?.id;

  useEffect(() => {
    setCategory(
      MockCategories.find((cat) => {
        return cat.id === categoryId;
      }),
    );
  }, [categoryId]);

  useEffect(() => {
    setCreditCards(
      MockCards.filter((card) => {
        return card.categories.includes(categoryId);
      }),
    );
  }, [categoryId]);

  const renderCreditCard = ({item}: any) => <CreditCard card={item} />;

  return (
    <Layout>
      <Text style={defaultStyles.text}>Category id: {category?.id}</Text>
      <Text style={defaultStyles.text}>Category name: {category?.name}</Text>
      <Text style={defaultStyles.text}>
        Category percent: {category?.percent}%
      </Text>

      <FlatList
        data={creditCards}
        renderItem={renderCreditCard}
        keyExtractor={(card): string => `${card.id}`}
      />
    </Layout>
  );
};

export default CategoryDetailScreen;
