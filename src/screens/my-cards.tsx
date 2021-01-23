import React, {FC} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import Card from '../components/card';

const MyCards: FC = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Card />
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyCards;
