import React, {FC, useState} from 'react';
import {Switch, TextInput} from 'react-native';
import {View, StyleSheet} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {Card} from '@shared/interfaces/card';
import {defaultStyles} from '@shared/styles/default-styles';
import Label from '@shared/components/Forms/label';

interface UpsertCardFormProps {
  creditCard?: Card;
}

const UpsertCardForm: FC<UpsertCardFormProps> = ({creditCard}) => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <View>
      <TextInput
        style={defaultStyles.textInput}
        placeholder="Name"
        value={creditCard?.name}
      />
      <TextInput
        style={defaultStyles.textInput}
        placeholder="Annual Fee"
        value={`${creditCard?.annualFee || 0}`}
        keyboardType="numeric"
        returnKeyType="done"
      />
      <View style={styles.inputContainer}>
        <Label text={'Foreign Transaction Fee?'} />
        <Switch value={creditCard?.hasForeignTransactionFee || false} />
      </View>
      <DatePicker date={startDate} onDateChange={setStartDate} />
    </View>
  );
};

export default UpsertCardForm;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 15,
    paddingVertical: 10,
  },
});
