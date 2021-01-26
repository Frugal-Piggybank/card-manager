import React, {FC} from 'react';
import {View} from 'react-native';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import Layout from '../components/shared/layout';
import MockCategories from '../data/mock-categories';
import {Category} from '../interfaces/Category';
import Screens from '.';
import CategoryDetailScreen from './category-detail';
import DefaultText from '../components/common/default-text';

const CategoryListStack = createStackNavigator();

const CategoryListStackScreen: FC = () => {
  return (
    <CategoryListStack.Navigator>
      <CategoryListStack.Screen
        name={`${Screens.CategoryList}`}
        component={CategoryListScreen}
      />
      <CategoryListStack.Screen
        name={`${Screens.CategoryDetail}`}
        component={CategoryDetailScreen}
        options={({route}: any) => ({
          title: route.params?.title,
        })}
      />
    </CategoryListStack.Navigator>
  );
};

const CategoryListScreen: FC<{navigation: any}> = ({
  navigation: {navigate},
}) => {
  const renderCategory = ({item: category}: any) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigate(`${Screens.CategoryDetail}`, {
            id: category.id,
            title: category.name,
          })
        }>
        <View>
          <DefaultText>{category.name || 'Test'}</DefaultText>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <Layout>
      <FlatList
        data={MockCategories}
        renderItem={renderCategory}
        keyExtractor={(cat: Category) => `${cat.id}`}
      />
    </Layout>
  );
};

export default CategoryListStackScreen;
