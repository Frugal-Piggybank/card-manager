import React, {FC} from 'react';
import {Text} from 'react-native';
import {defaultStyles} from '@shared/styles/default-styles';

interface LabelProps {
  text: string;
}

const Label: FC<LabelProps> = ({text}) => {
  return <Text style={defaultStyles.text}>{text}</Text>;
};

export default Label;
