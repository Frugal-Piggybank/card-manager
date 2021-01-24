import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import Layout from '../components/shared/layout';
import Categories from '../data/mock-categories';
import {Category} from '../interfaces/Category';

const CategoriesScreen: FC = () => {
  const renderCategory = ({item: category}: any) => (
    <View>
      <Text>{category.name || 'Test'}</Text>
    </View>
  );

  return (
    <Layout>
      <FlatList
        data={Categories}
        renderItem={renderCategory}
        keyExtractor={(cat: Category) => `${cat.id}`}
      />
    </Layout>
  );
};

export default CategoriesScreen;
