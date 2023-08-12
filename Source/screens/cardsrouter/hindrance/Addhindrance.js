import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import Locationcomponent from '../../../Components/helpers/locationcomponent/Locationcomponent';
import {verticalScale} from '../../../assets/Dimension';
import Addhindrancestyle from './Addhindrancestyle';
import Remarkcomponent from '../../../Components/helpers/remarkcomponent/Remarkcomponent';
import Camera from '../../../Components/helpers/cameracomponent/Camera';

const Addhindrance = () => {
  return (
    <View style={Addhindrancestyle.Addhindrancemain}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Location Component */}
        <View style={{marginTop: verticalScale(10)}}>
          <Locationcomponent
            backgroundColor={'white'}
            title="Select Hindrance"
          />
        </View>
        {/* Remark Component */}
        <View>
          <Remarkcomponent
            title="Description"
            placeholder="Enter Your Description"
          />
        </View>

        <View>
          <Remarkcomponent
            title="Reason For Hindrance"
            placeholder="Enter Your Description"
          />
        </View>

        {/* Datepicker */}

        <View style={Addhindrancestyle.dateselector}>
          <View style={Addhindrancestyle.maintextholder}>
            <Text style={Addhindrancestyle.maintext}>From Date</Text>
          </View>
          <View style={Addhindrancestyle.dateholder}>
            <TouchableOpacity style={Addhindrancestyle.fromdate}>
              <Text style={{fontFamily: 'Geologica-Regular'}}>Select Date</Text>
              <Image
                source={require('../../../assets/Images/blackcalendar.png')}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={Addhindrancestyle.dateselector}>
          <View style={Addhindrancestyle.maintextholder}>
            <Text style={Addhindrancestyle.maintext}>To Date</Text>
          </View>
          <View style={Addhindrancestyle.dateholder}>
            <TouchableOpacity style={Addhindrancestyle.fromdate}>
              <Text style={{fontFamily: 'Geologica-Regular'}}>Select Date</Text>
              <Image
                source={require('../../../assets/Images/blackcalendar.png')}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={Addhindrancestyle.Daysholder}>
            <Text style={{fontFamily:"Geologica-Bold",color:"black"}}>No.Of Days :</Text>
            <Text style={{fontFamily:"Geologica-Medium"}}> 21</Text>
        </View>

        <View style={Addhindrancestyle.dateselector}>
          <View style={Addhindrancestyle.maintextholder}>
            <Text style={Addhindrancestyle.maintext}>Cost Impact</Text>
          </View>
          <View style={Addhindrancestyle.dateholder}>
            <TouchableOpacity style={Addhindrancestyle.fromdate}>
              <Text style={{fontFamily: 'Geologica-Regular'}}>Enter Amount</Text>
              
            </TouchableOpacity>
          </View>
        </View>

        <View style={Addhindrancestyle.cameraholder}>
            <Camera/>
        </View>
          
          <TouchableOpacity style={Addhindrancestyle.buttonstyle}>
<Text style={{fontFamily:"Geologica-Bold",color:"black"}}>Submit</Text>
          </TouchableOpacity>


      </ScrollView>
    </View>
  );
};

export default Addhindrance;
