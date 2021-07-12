import React, {FC} from 'react';
import {TextInput} from 'react-native';
import {View} from 'react-native';
import {Card} from '@shared/interfaces/card';
import {defaultStyles} from '@shared/styles/default-styles';

interface UpsertCardFormProps {
  creditCard?: Card;
}

const UpsertCardForm: FC<UpsertCardFormProps> = ({creditCard}) => {
  return (
    <View>
      <TextInput
        style={defaultStyles.textInput}
        placeholder="Name"
        value={creditCard?.name}
      />
    </View>
  );
};

export default UpsertCardForm;
