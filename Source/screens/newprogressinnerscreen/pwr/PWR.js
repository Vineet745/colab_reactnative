import {View, Text, Image, ScrollView} from 'react-native';
import React from 'react';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../assets/Dimension';
import Locationcomponent from '../../../Components/helpers/locationcomponent/Locationcomponent';
import Progresscard from '../../../Components/helpers/progresscard/Progresscard';
import pwrstyle from './pwrstyle';
import Labourdetailcard from '../../../Components/helpers/labourdetailcard/Labourdetailcard';
import Remarkcomponent from '../../../Components/helpers/remarkcomponent/Remarkcomponent';
import Camera from '../../../Components/helpers/cameracomponent/Camera';
import Camera360 from '../../../Components/helpers/cameracomponent/Camera360';
import Button from '../../../Components/helpers/buttoncomponent/Button';
import { useDispatch, useSelector } from 'react-redux';
import { modalvalue } from '../../../redux/slice/modalslice';
import BottomTester from '../../../Components/bottomsheet/Bottomsheet';

const PWR = () => {
  const dispatch= useDispatch()
  const {modalvisible} = useSelector(state=>state.modal)
  
    // Redux state handling
    const togglebutton = () => {
      dispatch(modalvalue(!modalvisible));
    };
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: horizontalScale(15),
        paddingVertical: verticalScale(10),
        backgroundColor: '#f3f5f8',
      }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{marginBottom:verticalScale(10)}}>
        <Locationcomponent title="Select Location" togglebutton={togglebutton}  backgroundColor={"white"} color={"#898989"} />
        </View>
        <View style={{marginBottom:verticalScale(10)}}>
        <Locationcomponent title="Select Activity Head" togglebutton={togglebutton}  backgroundColor={"white"} color={"#898989"} />
        </View>
        <Progresscard />

        {/* Contractor Details */}
        <View style={pwrstyle.pwrmain}>
          <View style={pwrstyle.pwrcompanyname}>
            <Text style={pwrstyle.pwrcompanynametext}>Irshad Khan-COMP 3</Text>
          </View>
        </View>
              <Labourdetailcard title='Basant Soni'/>
              <Remarkcomponent/>
              <View style={pwrstyle.cameracontainer}>
              <Camera/>
              <Camera360/>
              </View>
              <Button/>
      </ScrollView>
      <BottomTester/>
    </View>
  );
};

export default PWR;
