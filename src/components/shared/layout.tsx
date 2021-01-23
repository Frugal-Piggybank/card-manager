import React, {FC} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

const Layout: FC = ({children}) => {
  return <SafeAreaView>{children}</SafeAreaView>;
};

export default Layout;
