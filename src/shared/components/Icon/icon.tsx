import React, {FC} from 'react';
import {IconProps} from 'react-native-vector-icons/Icon';
import FeatherIcon from 'react-native-vector-icons/Feather';

const Icon: FC<IconProps> = ({name, size, color}) => {
  return <FeatherIcon name={name} size={size} color={color} />;
};

export default Icon;
