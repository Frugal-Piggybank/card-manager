import React, {FC} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
// import CreditCard from '../components/credit-card';
import Layout from '../components/shared/layout';

const MyCardsScreen: FC = () => {
  return (
    <Layout>
      <ScrollView>{/* <CreditCard /> */}</ScrollView>
    </Layout>
  );
};

export default MyCardsScreen;
