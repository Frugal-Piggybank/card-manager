import React, {FC} from 'react';
import Layout from '@shared/components/Layout';
import {Text} from 'react-native';
import {defaultStyles} from '@shared/styles/default-styles';

const AddCard: FC = () => {
  return (
    <Layout>
      <Text style={defaultStyles.text}>
        Fill out the information below to add a new card
      </Text>
    </Layout>
  );
};

export default AddCard;
