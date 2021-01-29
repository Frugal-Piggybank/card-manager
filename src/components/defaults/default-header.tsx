import React, {FC} from 'react';
import {StyleSheet, Text} from 'react-native';

interface DefaultHeaderProps {
  textStyles?: any[];
}

const DefaultHeader: FC<DefaultHeaderProps> = ({textStyles, children}) => {
  return <Text style={[styles.header, textStyles]}>{children}</Text>;
};

export default DefaultHeader;

const styles = StyleSheet.create({
  header: {
    fontSize: 30,
  },
});
