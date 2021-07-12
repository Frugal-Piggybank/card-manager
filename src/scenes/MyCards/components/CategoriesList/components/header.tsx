import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {defaultStyles} from '../../../../../shared/styles/default-styles';

const Header: FC = () => {
  return (
    <View style={styles.container}>
      <Text style={defaultStyles.text}>Category Name</Text>
      <Text style={defaultStyles.text}>Percentage</Text>
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
