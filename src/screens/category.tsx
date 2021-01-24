import React, {FC} from 'react';
import {Text, View} from 'react-native';

const CategoryScreen: FC<{id: number}> = ({id}) => {
  return (
    <View>
      <Text>Category id: {id}</Text>
    </View>
  );
};

export default CategoryScreen;
