import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../assets/Dimension';
import miscstyle from './miscstyle';
import Labourdetailcard from '../../../Components/helpers/labourdetailcard/Labourdetailcard';
import Locationcomponent from '../../../Components/helpers/locationcomponent/Locationcomponent';
import Camera from '../../../Components/helpers/cameracomponent/Camera';
import Button from '../../../Components/helpers/buttoncomponent/Button';
import Remarkcomponent from '../../../Components/helpers/remarkcomponent/Remarkcomponent';
import {modalvalue} from '../../../redux/slice/modalslice';
import {useDispatch, useSelector} from 'react-redux';
import BottomTester from '../../../Components/bottomsheet/Bottomsheet';

const Misc = () => {
  const dispatch = useDispatch();
  const {modalvisible} = useSelector(state => state.modal);

  const togglebutton = () => {
    dispatch(modalvalue(!modalvisible));
  };

  return (
    <View>
      <ScrollView style={{paddingHorizontal: horizontalScale(2)}}>
        <View
          style={{
            flex: 1,
            paddingHorizontal: horizontalScale(15),
            paddingVertical: verticalScale(10),
            backgroundColor: '#f3f5f8',
          }}>
          {/* 1st contractor Card   */}

          <View style={miscstyle.miscmain}>
            <View style={miscstyle.companydetailholder}>
              <Text
                style={{
                  fontFamily: 'Geologica-Bold',
                  fontSize: moderateScale(15),
                  marginBottom: verticalScale(10),
                  color: 'white',
                  marginLeft: horizontalScale(10),
                }}>
                Contractor
              </Text>
              <View style={miscstyle.companyscrollablename}>
                <View style={{width: horizontalScale(250)}}>
                  <Locationcomponent
                    title="Irshad Khan-COMP 3"
                    backgroundColor={'white'}
                    color={'black'}
                  />
                </View>
                <TouchableOpacity
                  onPress={() => setisshown(true)}
                  style={miscstyle.addbuttonholder}>
                  <Image source={require('../../../assets/Images/plus.png')} />
                </TouchableOpacity>
              </View>
            </View>
            <Labourdetailcard title="Basant Soni" />
          </View>

          {/* 2nd Contractor card */}

          <View style={miscstyle.labourmain}>
            <View style={miscstyle.companydetailholder}>
              <Text
                style={{
                  fontFamily: 'Geologica-Bold',
                  fontSize: moderateScale(15),
                  marginBottom: verticalScale(10),
                  color: 'white',
                  marginLeft: horizontalScale(10),
                }}>
                Contractor
              </Text>
              <View style={miscstyle.companyscrollablename}>
                <View style={{width: horizontalScale(250)}}>
                  <Locationcomponent
                    title="Irshad Khan-COMP 3"
                    backgroundColor={'white'}
                    color={'black'}
                  />
                </View>
                <TouchableOpacity
                  onPress={() => setisshown(true)}
                  style={miscstyle.addbuttonholder}>
                  <Image source={require('../../../assets/Images/plus.png')} />
                </TouchableOpacity>
              </View>
            </View>
            <Labourdetailcard title="Basant Soni" />
          </View>

          {/* Remark Component */}

          <View>
            <Remarkcomponent />
          </View>

          {/* Contractor Detail  */}

          <View style={miscstyle.debitcontractordetail}>
            <View style={miscstyle.textcontainer}>
              <Text
                style={{
                  fontFamily: 'Geologica-Bold',
                  fontSize: moderateScale(15),
                  color: 'black',
                }}>
                Debit To
              </Text>
            </View>
            <Locationcomponent
              togglebutton={togglebutton}
              title="Irshad Khan-COMP 3"
              backgroundColor={'#f6f8fb'}
              color={'black'}
            />
          </View>

          <View style={miscstyle.cameracontainer}>
            <Camera />
          </View>
          <Button />
        </View>
      </ScrollView>
      <BottomTester />
    </View>
  );
};

export default Misc;
