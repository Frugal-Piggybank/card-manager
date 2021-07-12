import React, {FC} from 'react';
import {GestureResponderEvent, StyleSheet} from 'react-native';
import {Text, TouchableOpacity} from 'react-native';
import Icon from '../Icon';

interface AddButtonProps {
  onPress: ((event: GestureResponderEvent) => void) | undefined;
}

const AddButton: FC<AddButtonProps> = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon name="plus" size={35} color="white" />
    </TouchableOpacity>
  );
};

export default AddButton;

const styles = StyleSheet.create({
  container: {
    borderRadius: 50,
    backgroundColor: 'blue',
    position: 'relative',
    width: 55,
    height: 55,
    padding: 10,
  },
});
