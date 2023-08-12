import {View, Text, ScrollView,Image,TouchableOpacity} from 'react-native';
import React from 'react';
import labourdatastyle from './labourdatastyle';
import Labourdetail from '../../labourdetail/Labourdetail';
import { useDispatch, useSelector } from 'react-redux';
import Calendarmodal from '../../../Components/calendarmodal/Calendarmodal';
import { calendardata } from '../../../redux/slice/calendarslice';


const Labourdata = () => {
  const dispatch = useDispatch()
  const {calendarvisible} = useSelector(state=>state.calendar)

  const togglebutton=()=>{
    dispatch(calendardata(!calendarvisible))
  }

  return (
    <View style={{flex:1}}>
    <ScrollView style={{flex:1}}>
    <View style={labourdatastyle.labourmain}>
      <View style={labourdatastyle.calendardiv}>
        <Text style={labourdatastyle.calendartext}>Date</Text>
        <TouchableOpacity onPress={()=>togglebutton()}>
        <Image source={require('../../../assets/Images/blackcalendar.png')}/>
        </TouchableOpacity>
      </View>

      <View style={labourdatastyle.labourholder}>
        <View style={labourdatastyle.contractorname}>
          <Text style={labourdatastyle.contractornametext}>Irshad khan-COMP 3</Text>
        </View>
        <View style={labourdatastyle.labourcontainer}>
        <Labourdetail />
        <Labourdetail />
        <Labourdetail />
        <Labourdetail />
        <Labourdetail />
        <Labourdetail />
        </View>
      </View>
      <View style={labourdatastyle.labourholder}>
        <View style={labourdatastyle.contractorname}>
          <Text style={labourdatastyle.contractornametext}>Irshad khan Comp 3</Text>
        </View>
        <View style={labourdatastyle.labourcontainer}>
        <Labourdetail />
        <Labourdetail />
        <Labourdetail />
        <Labourdetail />
       
        </View>
      </View>
      <View style={labourdatastyle.labourholder}>
        <View style={labourdatastyle.contractorname}>
          <Text style={labourdatastyle.contractornametext}>Irshad khan Comp 3</Text>
        </View>
        <View style={labourdatastyle.labourcontainer}>
        <Labourdetail />
        <Labourdetail />
        <Labourdetail />
        <Labourdetail />
        <Labourdetail />
        <Labourdetail />
        <Labourdetail />
       
        </View>
      </View>
    </View>
    </ScrollView>
       <Calendarmodal/>
    </View>
  );
};

export default Labourdata;
