import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { useDispatch } from 'react-redux';
import { calendardata } from '../redux/slice/calendarslice';

const CalendarView = () => {
  const [selected, setSelected] = useState(null)
  return (
    <Calendar style={{
        borderColor: 'gray',
        height: 380,
        width:300
      }}
      theme={{
        backgroundColor: '#ffffff',
        calendarBackground: 'white',
        textSectionTitleColor: '#b6c1cd',
        selectedDayBackgroundColor: 'lightgreen',
        selectedDayTextColor: '#ffffff',
        todayTextColor: '#00adf5',
        dayTextColor: '#2d4150',
        textDayFontFamily: 'Geologica-Medium', 
        textMonthFontFamily: 'Geologica-Bold',
        
      }}
      onDayPress={day => {
        setSelected(day.dateString);
      }}

      markedDates={{
        [selected]: {selected: true, disableTouchEvent: false, selectedDotColor: 'orange'}
      }}
      
    />
  );
  
}

export default CalendarView