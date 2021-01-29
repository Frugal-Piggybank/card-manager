import React, {FC} from 'react';
import {StyleSheet, Text} from 'react-native';

interface DefaultTextProps {
  textStyles?: any[];
}

const DefaultText: FC<DefaultTextProps> = ({textStyles, children}) => {
  return <Text style={[styles.text, textStyles]}>{children}</Text>;
};

export default DefaultText;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
});
