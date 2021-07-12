import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Header: FC = () => {
  return (
    <View style={styles.container}>
      <Text>Category Name</Text>
      <Text>Percentage</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    paddingVertical: 15,
  },
});
