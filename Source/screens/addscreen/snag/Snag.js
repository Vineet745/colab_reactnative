import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {snagstyle} from './snagstyle';
import BottomTester from '../../../Components/bottomsheet/Bottomsheet';
import Calendarmodal from '../../../Components/calendarmodal/Calendarmodal';
import {useDispatch, useSelector} from 'react-redux';
import {modalvalue} from '../../../redux/slice/modalslice';
import {calendardata} from '../../../redux/slice/calendarslice';
import Locationcomponent from '../../../Components/helpers/locationcomponent/Locationcomponent';
import { moderateScale } from '../../../assets/Dimension';
import Button from '../../../Components/helpers/buttoncomponent/Button';

const Snag = () => {
  const dispatch = useDispatch();
  const {location} = useSelector(state => state.location);

  const mixedarray = location.join('/');

  const currentDate = new Date();

  const [bottom, setbottom] = useState(false);
  const [calendarsheet, setCalendarsheet] = useState(false);

  
  // BottomSheet button
  const togglebutton = () => {
    dispatch(modalvalue(!bottom));
  };

  //Calendar sheet button
  const calendarbutton = () => {
    dispatch(calendardata(!calendarsheet));
  };

  // Top CheckBox

  const checkboxdata = [
    {
      id: 1,
      name: 'Safety',
    },
    {
      id: 2,
      name: 'Execution',
    },
    {
      id: 3,
      name: 'Quality',
    },
  ];

  // Bottom CheckBox

  const bottomcheckboxdata = [
    {
      id: 1,
      name: 'Minor',
    },
    {
      id: 2,
      name: 'Major',
    },
    {
      id: 3,
      name: 'Critical',
    },
  ];

  const [selectedRadio, setselectedRadio] = useState(1);

  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <View style={snagstyle.main}>
          <View style={snagstyle.datepicker}>
            <View style={snagstyle.datepickerleft}>
              <Text style={snagstyle.datepickerlefttextone}>9 June 2023</Text>
              <Text style={snagstyle.datepickerlefttexttwo}>Created Date</Text>
            </View>
            <TouchableOpacity
              onPress={calendarbutton}
              style={snagstyle.touchable}>
              <Image source={require('../../../assets/Images/calendar.png')} />
              <Text style={snagstyle.touchabletext}>Select Due Date</Text>
            </TouchableOpacity>
          </View>

          <View style={snagstyle.options}>
            {checkboxdata.map(item => (
              <TouchableOpacity
                key={item.id}
                onPress={() => setselectedRadio(item.id)}>
                <View style={snagstyle.optionbuttons}>
                  <View
                    style={[
                      snagstyle.optionbutton,
                      selectedRadio === item.id && {backgroundColor: '#F4C601'},
                    ]}></View>
                  <Text style={snagstyle.optionbuttontext}>{item.name}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>

          {/* kdkljflkdjfdl */}
          <View style={{marginBottom:moderateScale(10)}}>
          <Locationcomponent
            togglebutton={togglebutton}
            title={mixedarray ? mixedarray : 'Select Location'}
            color={'#8c8c8c'}
            backgroundColor={"white"}
          />
          </View>
          <View style={{marginBottom:moderateScale(10)}}>
          <Locationcomponent
            togglebutton={togglebutton}
            title="Select Activity Head"
            color={'#8c8c8c'}
            backgroundColor={"white"}
          />
          </View>

          <TouchableOpacity>
            <View style={snagstyle.contractorname}>
              <Text style={snagstyle.contractnametextone}>Contractor Name</Text>
              <Text style={snagstyle.contractnametexttwo}>Contractor</Text>
            </View>
          </TouchableOpacity>

          <View style={snagstyle.marklocation}>
            <Text style={snagstyle.marklocationtext}>Mark Location</Text>
            <View style={snagstyle.imagecontainer}>
              <Image source={require('../../../assets/Images/naksha.png')} />
            </View>
          </View>

          <View style={snagstyle.Remark}>
            <Text style={snagstyle.Remarktext}>Remark</Text>
            <View style={snagstyle.Remarkinputwrapper}>
              <TextInput
                style={snagstyle.textstyle}
                multiline={true}
                placeholder="Enter Your Remark"
              />
            </View>
          </View>

          <View style={snagstyle.AmountView}>
            <View style={snagstyle.boxodd}>
              <Text style={snagstyle.oddboxtext}>Debit to</Text>
              <Locationcomponent title="Select" backgroundColor={"#f4f6f9"} color={"black"}/>
            </View>
            <View style={snagstyle.boxeven}>
              <Text style={snagstyle.oddboxtext}>Debit Amount</Text>
              <View style={snagstyle.boxdropdown2}>
                <TextInput
                  style={snagstyle.inputbox}
                  placeholder="Enter Amount"></TextInput>
              </View>
            </View>
            <View style={snagstyle.boxodd}>
              <Text style={snagstyle.oddboxtext}>Snag Assigned To</Text>
              <Locationcomponent title="Select" backgroundColor={"#f4f6f9"} color={"black"}/>
            </View>
            <View style={snagstyle.boxeven}>
              <Text style={snagstyle.oddboxtext}>Due Date</Text>
              <View style={snagstyle.boxdropdown2}>
                <TouchableOpacity
                  onPress={calendarbutton}
                  style={snagstyle.touchable}>
                  <Image
                    source={require('../../../assets/Images/calendar.png')}
                  />
                  <Text style={snagstyle.touchabletext}>
                    {currentDate.toLocaleDateString()}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={snagstyle.options}>
            {bottomcheckboxdata.map(item => (
              <TouchableOpacity
                key={item.id}
                onPress={() => setselectedRadio(item.id)}>
                <View style={snagstyle.optionbuttons}>
                  <View
                    style={[
                      snagstyle.optionbutton,
                      selectedRadio === item.id && {backgroundColor: '#F4C601'},
                    ]}></View>
                  <Text style={snagstyle.optionbuttontext}>{item.name}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>

          <Button/>
        </View>
      </ScrollView>
      <BottomTester />
      <Calendarmodal visible={calendarsheet} onClose={calendarbutton} />
    </View>
  );
};

export default Snag;
