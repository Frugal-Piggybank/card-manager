import React, {FC} from 'react';
import {Text} from 'react-native';
import Layout from '@shared/components/Layout';
import {defaultStyles} from '@shared/styles/default-styles';
import {createStackNavigator} from '@react-navigation/stack';
import Screens from 'screens';
import ManageCategories from './components/ManageCategories/manage-categories';
import ManageCards from './components/ManageCards/manage-cards';
import UpsertCard from './components/UpsertCard/upsert-card';

const AccountStackNavigator = createStackNavigator();

const AccountStackNavigatorScreen: FC = () => {
  return (
    <AccountStackNavigator.Navigator>
      <AccountStackNavigator.Screen
        name={`${Screens.Account}`}
        component={AccountScreen}
      />
      <AccountStackNavigator.Screen
        name={`${Screens.AddCard}`}
        component={UpsertCard}
      />
      <AccountStackNavigator.Screen
        name={`${Screens.ManageCards}`}
        component={ManageCards}
      />
      <AccountStackNavigator.Screen
        name={`${Screens.ManageCategories}`}
        component={ManageCategories}
      />
    </AccountStackNavigator.Navigator>
  );
};

const AccountScreen: FC = () => {
  return (
    <Layout>
      <Text style={defaultStyles.text}>Manage your account here.</Text>
    </Layout>
  );
};

export default AccountStackNavigatorScreen;
