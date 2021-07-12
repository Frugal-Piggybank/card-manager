import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Category} from '../../../../../interfaces/Category';

interface CategoryItemProps {
  category: Category;
}

const CategoryItem: FC<CategoryItemProps> = ({category}) => {
  return (
    <View style={styles.container}>
      <Text>{category.name}</Text>
      <Text>{category.percent}</Text>
    </View>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
  },
});
