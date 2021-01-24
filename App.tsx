import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from './src/components/shared/icon';
import MyCardsScreen from './src/screens/my-cards';
import SearchScreen from './src/screens/search';
import CategoriesScreen from './src/screens/categories';

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
          name="MyCards"
          component={MyCardsScreen}
          options={{
            title: 'My Cards',
            tabBarIcon: ({focused, color, size}) => (
              <Icon name="home" size={size} color={color} />
            ),
          }}
        />

        <Tab.Screen
          name="Categories"
          component={CategoriesScreen}
          options={{
            title: 'Categories',
            tabBarIcon: ({focused, color, size}) => (
              <Icon name="list" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{
            title: 'Search',
            tabBarIcon: ({focused, color, size}) => (
              <Icon name="search" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
