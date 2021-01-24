import React, {FC} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import Card from '../components/card';
import Layout from '../components/shared/layout';

const MyCardsScreen: FC = () => {
  return (
    <Layout>
      <ScrollView>
        <Card />
      </ScrollView>
    </Layout>
  );
};

export default MyCardsScreen;
