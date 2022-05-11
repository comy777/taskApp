import React, {useContext} from 'react';
import {Picker} from '@react-native-picker/picker';
import moment from 'moment';
import {LessonsContext, MainContext} from '../context/MainContext';
import {shedule} from '../utils/shedule';
import DateTimePicker from 'react-native-modal-datetime-picker';
import {View} from 'react-native';

const ShedulePicker = () => {
  const {setDay, day, setSchedlue} = useContext(LessonsContext);
  const {setDateTimeVisible, dateTimeVisible} = useContext(MainContext);
  const handleConfirm = (e: any) => {
    setDateTimeVisible();
    const hora = moment(e).format('LT');
    const data = {day, hours: hora};
    setSchedlue(data);
  };
  const handleCancel = () => {
    setDateTimeVisible();
  };
  const addSchedlue = (value: string) => {
    setDateTimeVisible();
    setDay(value);
  };
  return (
    <View>
      <Picker onValueChange={addSchedlue}>
        <Picker.Item label="Dias" />
        {shedule.map(i => (
          <Picker.Item label={i.day} value={i.day} key={i.id} />
        ))}
      </Picker>
      <DateTimePicker
        isVisible={dateTimeVisible}
        mode="time"
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />
    </View>
  );
};

export default ShedulePicker;
