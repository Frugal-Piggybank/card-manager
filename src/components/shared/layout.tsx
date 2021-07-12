import React, {FC} from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const Layout: FC = ({children}) => {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};

export default Layout;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    paddingHorizontal: 25,
  },
});
