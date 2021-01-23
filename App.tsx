import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MyCards from './src/screens/my-cards';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="MyCards"
          component={MyCards}
          // options={{title: 'My Cards', tabBarIcon: ({focused, color, size}) => (

          // ) }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
