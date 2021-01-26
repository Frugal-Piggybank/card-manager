import React, {FC} from 'react';
import DefaultText from '../components/common/default-text';
import Layout from '../components/shared/layout';

const ManageScreen: FC = () => {
  return (
    <Layout>
      <DefaultText>Manage your cards and categories here.</DefaultText>
    </Layout>
  );
};

export default ManageScreen;
