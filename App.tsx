import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import Config from 'react-native-config';

import Icon from './src/shared/components/Icon/icon';
import AccountStackNavigatorScreen from '@scenes/Account';
import CategoryListStackScreen from './src/screens/category-list';
import Screens from './src/screens';
import MyCards from './src/scenes/MyCards';

const Tab = createBottomTabNavigator();

const client = new ApolloClient({
  uri: Config.GRAPHQL_URI,
});

const App: FC = () => {
  return (
    <ApolloProvider client={client}>
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
              tabBarIcon: ({focused, color, size}): React.ReactNode => (
                <Icon name="list" size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name={`${Screens.CardList}`}
            component={MyCards}
            options={{
              title: 'My Credit Cards',
              tabBarIcon: ({focused, color, size}): React.ReactNode => (
                <Icon name="credit-card" size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name={`${Screens.Account}`}
            component={AccountStackNavigatorScreen}
            options={{
              title: 'Account',
              tabBarIcon: ({focused, color, size}): React.ReactNode => (
                <Icon name="edit" size={size} color={color} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
};

export default App;
