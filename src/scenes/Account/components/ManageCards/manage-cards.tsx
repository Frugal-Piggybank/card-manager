import React, {FC} from 'react';
import {Text} from 'react-native';
import Layout from '@shared/components/Layout';
import {defaultStyles} from '@shared/styles/default-styles';

const ManageCards: FC = () => {
  return (
    <Layout>
      <Text style={defaultStyles.text}>Manage Your Credit Cards</Text>
    </Layout>
  );
};

export default ManageCards;
