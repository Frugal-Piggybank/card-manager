import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Category} from '@shared/interfaces/Category';
import {defaultStyles} from '@shared/styles/default-styles';

interface CategoryItemProps {
  category: Category;
}

const CategoryItem: FC<CategoryItemProps> = ({category}) => {
  return (
    <View style={styles.container}>
      <Text style={defaultStyles.text}>{category.name}</Text>
      <Text style={defaultStyles.text}>{category.percent}</Text>
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
