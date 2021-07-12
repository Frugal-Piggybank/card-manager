import React, {FC} from 'react';
import {Text} from 'react-native';
import Layout from '../components/shared/layout';
import {defaultStyles} from '../shared/styles/default-styles';

const ManageScreen: FC = () => {
  return (
    <Layout>
      <Text style={defaultStyles.text}>
        Manage your cards and categories here.
      </Text>
    </Layout>
  );
};

export default ManageScreen;
