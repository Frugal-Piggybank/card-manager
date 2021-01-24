import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import Layout from '../components/shared/layout';
import Categories from '../data/mock-categories';
import {Category} from '../interfaces/Category';
import Screens from '../screens';
import CategoryScreen from './category';

const CategoriesStack = createStackNavigator();

const CategoriesStackScreen: FC = () => {
  return (
    <CategoriesStack.Navigator>
      <CategoriesStack.Screen
        name={`${Screens.Categories}`}
        component={CategoriesScreen}
      />
      <CategoriesStack.Screen
        name={`${Screens.Category}`}
        component={CategoryScreen}
      />
    </CategoriesStack.Navigator>
  );
};

const CategoriesScreen: FC<{navigation: any}> = ({navigation: {navigate}}) => {
  const renderCategory = ({item: category}: any) => (
    <TouchableOpacity
      onPress={() => navigate(`${Screens.Category}`, {id: category.id})}>
      <View>
        <Text>{category.name || 'Test'}</Text>
      </View>
    </TouchableOpacity>
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

export default CategoriesStackScreen;
