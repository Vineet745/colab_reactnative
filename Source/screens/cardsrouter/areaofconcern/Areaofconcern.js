import {View, Text, Image, TextInput} from 'react-native';
import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {modal2value, modalvalue} from '../../../redux/slice/modalslice';
import BottomTester from '../../../Components/bottomsheet/Bottomsheet';
import areastylesheet from './areaofconcerbstyle';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../assets/Dimension';
const Areaofconcern = () => {
  const dispatch = useDispatch();
  const {modalvisible} = useSelector(state => state.modal);

  const togglebutton = () => {
    dispatch(modalvalue(!modalvisible));
  };

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          paddingVertical: verticalScale(10),
          paddingHorizontal: horizontalScale(15),
        }}>
        <TouchableOpacity
          onPress={() => togglebutton()}
          style={areastylesheet.dropdownone}>
          <Text style={areastylesheet.dropingtext}>Select Location</Text>
          <Image source={require('../../../assets/Images/dropdownlist.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={areastylesheet.dropdownone}>
          <Text style={areastylesheet.dropingtext}>Select Activity Head</Text>
          <Image source={require('../../../assets/Images/dropdownlist.png')} />
        </TouchableOpacity>
        <View style={areastylesheet.otherlocation}>
          <Text style={areastylesheet.otherlocationmaintext}>
            Other Location
          </Text>
          <TextInput
            style={areastylesheet.inputbox}
            placeholder="Enter Other location"></TextInput>
        </View>
        <View style={areastylesheet.otherlocation}>
          <Text style={areastylesheet.otherlocationmaintext}>Description</Text>
          <View style={areastylesheet.Remarkinputwrapper}>
            <TextInput
              multiline={true}
              numberOfLines={4}
              style={areastylesheet.inputbox}
              placeholder="Enter Description"
              align></TextInput>
          </View>
        </View>
        <View style={areastylesheet.imagepicker}>
          <View style={areastylesheet.imagepickerleftview}>
            <TouchableOpacity>
              <Image source={require('../../../assets/Images/Camera.png')} />
            </TouchableOpacity>
            <Text style={areastylesheet.middletext}>Upload File / Photo</Text>
          </View>
          <TouchableOpacity style={areastylesheet.uploadbtn}>
            <Text style={areastylesheet.uploadbtntext}>Upload</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={areastylesheet.submitbtn}>
          <Text style={areastylesheet.submitbtntext}>Submit</Text>
        </TouchableOpacity>
      </View>
        <BottomTester  />
    </View>
  );
};

export default Areaofconcern;
