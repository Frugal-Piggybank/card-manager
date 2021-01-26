import React, {FC} from 'react';
import DefaultText from '../components/common/default-text';
import Layout from '../components/shared/layout';

const CardListScreen: FC = () => {
  return (
    <Layout>
      <DefaultText>List of your current cards</DefaultText>
    </Layout>
  );
};

export default CardListScreen;
