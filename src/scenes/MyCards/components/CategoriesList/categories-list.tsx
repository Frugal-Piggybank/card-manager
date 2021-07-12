import React, {FC} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {Category} from '../../../../interfaces/Category';
import Header from './components/header';
import CategoryItem from './components/category-item';

interface CategoriesListProps {
  categories: Category[];
}

const CategoriesList: FC<CategoriesListProps> = ({categories}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        renderItem={({item}): any => <CategoryItem category={item} />}
        keyExtractor={(cat): string => `${cat.id}`}
        ListHeaderComponent={Header}
      />
    </View>
  );
};

export default CategoriesList;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 65,
  },
});
