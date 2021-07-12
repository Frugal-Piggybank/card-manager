import React, {FC} from 'react';
import {Text, View} from 'react-native';
import Layout from '@shared/components/Layout';
import {defaultStyles} from '@shared/styles/default-styles';

const ManageCategories: FC = () => {
  return (
    <Layout>
      <Text style={defaultStyles.text}>Manage Your Categories</Text>
    </Layout>
  );
};

export default ManageCategories;
