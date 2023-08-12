import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {Calendar} from 'react-native-calendars';
import Modal from 'react-native-modal';
import calendarmodalstyle from './calendarmodalstyle';
import CalendarView from '../Calendar';
import {useDispatch, useSelector} from 'react-redux';
import {calendardata} from '../../redux/slice/calendarslice';

const Calendarmodal = () => {
  const {calendarvisible} = useSelector(state => state.calendar);
  const dispatch = useDispatch();


  const closecalendar = ()=>{
    dispatch(calendardata(false))
  }

  return (
    <Modal coverScreen={false} isVisible={calendarvisible}>
      <View style={calendarmodalstyle.calendarmodalmain}>
        <CalendarView  />
        <TouchableOpacity
          style={{marginBottom: 5}}
          onPress={()=>closecalendar()}
          >
          <Text
            style={{fontFamily: 'Geologica-Bold', color: 'red', fontSize: 15}}>
            Cancel
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{marginBottom: 10}}
          onPress={()=>handleDateSelect()}
          >
          <Text
            style={{
              fontFamily: 'Geologica-Bold',
              color: 'black',
              fontSize: 15,
            }}>
            Ok
          </Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default Calendarmodal;
