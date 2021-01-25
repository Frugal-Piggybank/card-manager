import React, {FC, useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import CreditCard from '../components/credit-card';
import Cards from '../data/mock-cards';
import Categories from '../data/mock-categories';
import {Card} from '../interfaces/card';
import {Category} from '../interfaces/Category';

const CategoryScreen: FC<{route: any}> = ({route}) => {
  const [category, setCategory] = useState<Category>();
  const [creditCards, setCreditCards] = useState<Card[]>([]);
  const categoryId = route.params?.id;

  useEffect(() => {
    setCategory(
      Categories.find((cat) => {
        return cat.id === categoryId;
      }),
    );
  }, [categoryId]);

  useEffect(() => {
    category?.cards.forEach((categoryCard) => {
      const match = Cards.find((card) => {
        return card.id === categoryCard;
      });

      if (match) {
        setCreditCards((prevCards) => [...prevCards, match]);
      }
    });
  }, [category]);

  const renderCreditCard = ({item}: any) => <CreditCard card={item} />;

  return (
    <View>
      <Text>Category id: {category?.id}</Text>
      <Text>Category name: {category?.name}</Text>
      <Text>Category percent: {category?.percent}%</Text>

      <FlatList
        data={creditCards}
        renderItem={renderCreditCard}
        keyExtractor={(card) => `${card.id}`}
      />
    </View>
  );
};

export default CategoryScreen;
