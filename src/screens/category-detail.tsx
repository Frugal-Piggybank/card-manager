import React, {FC, useEffect, useState} from 'react';
import {FlatList} from 'react-native-gesture-handler';
import DefaultText from '../components/defaults/default-text';
import CreditCard from '../components/credit-card';
import Layout from '../components/shared/layout';
import MockCards from '../data/mock-cards';
import MockCategories from '../data/mock-categories';
import {Card} from '../interfaces/card';
import {Category} from '../interfaces/Category';

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
    category?.cards.forEach((categoryCard) => {
      const match = MockCards.find((card) => {
        return card.id === categoryCard;
      });

      if (match) {
        setCreditCards((prevCards) => [...prevCards, match]);
      }
    });
  }, [category]);

  const renderCreditCard = ({item}: any) => <CreditCard card={item} />;

  return (
    <Layout>
      <DefaultText>Category id: {category?.id}</DefaultText>
      <DefaultText>Category name: {category?.name}</DefaultText>
      <DefaultText>Category percent: {category?.percent}%</DefaultText>

      <FlatList
        data={creditCards}
        renderItem={renderCreditCard}
        keyExtractor={(card) => `${card.id}`}
      />
    </Layout>
  );
};

export default CategoryDetailScreen;
