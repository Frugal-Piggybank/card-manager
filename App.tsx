import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from './src/components/shared/icon';
import ManageScreen from './src/screens/manage';
import CategoryListStackScreen from './src/screens/category-list';
import Screens from './src/screens';
import CardListScreen from './src/screens/card-list';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen
          name={`${Screens.Home}`}
          component={CategoryListStackScreen}
          options={{
            title: 'Categories',
            tabBarIcon: ({focused, color, size}) => (
              <Icon name="list" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name={`${Screens.CardList}`}
          component={CardListScreen}
          options={{
            title: 'Credit Cards',
            tabBarIcon: ({focused, color, size}) => (
              <Icon name="credit-card" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name={`${Screens.Search}`}
          component={ManageScreen}
          options={{
            title: 'Manage',
            tabBarIcon: ({focused, color, size}) => (
              <Icon name="edit" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
