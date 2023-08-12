import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../assets/Dimension';
import Locationcomponent from '../../../Components/helpers/locationcomponent/Locationcomponent';
import Progresscard from '../../../Components/helpers/progresscard/Progresscard';
import laboursupplystyle from './laboursupplystyle';
import Labourdetailcard from '../../../Components/helpers/labourdetailcard/Labourdetailcard';
import Remarkcomponent from '../../../Components/helpers/remarkcomponent/Remarkcomponent';
import Camera from '../../../Components/helpers/cameracomponent/Camera';
import Camera360 from '../../../Components/helpers/cameracomponent/Camera360';
import Button from '../../../Components/helpers/buttoncomponent/Button';
import {useDispatch, useSelector} from 'react-redux';
import {modalvalue} from '../../../redux/slice/modalslice';
import BottomTester from '../../../Components/bottomsheet/Bottomsheet';

const Laboursupply = ({}) => {
  const dispatch = useDispatch();
  const {modalvisible} = useSelector(state => state.modal);
  console.log(modalvisible);
  const [isshown, setisshown] = useState(false);

  // Redux state handling
  const togglebutton = () => {
    dispatch(modalvalue(!modalvisible));
  };

  return (
    <View style={{flex: 1}}>
      <ScrollView style={{paddingHorizontal: horizontalScale(2)}}>
        <View
          style={{
            flex: 1,
            paddingHorizontal: horizontalScale(15),
            paddingVertical: verticalScale(10),
            backgroundColor: '#f3f5f8',
          }}>
          <View style={{marginBottom: verticalScale(10)}}>
            <Locationcomponent
              togglebutton={togglebutton}
              title="Select Location"
              backgroundColor={'white'}
              color={'#898989'}
            />
          </View>
          <View style={{marginBottom: 10}}>
            <Locationcomponent
              togglebutton={togglebutton}
              title="Select Activity Head"
              backgroundColor={'white'}
              color={'#898989'}
            />
          </View>
          <Progresscard />

          {/* 1st contractor Card   */}

          <View style={laboursupplystyle.labourmain}>
            <View style={laboursupplystyle.companydetailholder}>
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
              <View style={laboursupplystyle.companyscrollablename}>
                <View style={{width: horizontalScale(250)}}>
                  <Locationcomponent
                    title="Irshad Khan-COMP 3"
                    backgroundColor={'white'}
                    color={'black'}
                  />
                </View>
                <TouchableOpacity
                  onPress={() => setisshown(true)}
                  style={laboursupplystyle.addbuttonholder}>
                  <Image source={require('../../../assets/Images/plus.png')} />
                </TouchableOpacity>
              </View>
            </View>
            <Labourdetailcard title="Select Guard" />
          </View>

          {/* 2nd Contractor card */}

          <View style={laboursupplystyle.labourmain}>
            <View style={laboursupplystyle.companydetailholder}>
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
              <View style={laboursupplystyle.companyscrollablename}>
                <View style={{width: horizontalScale(250)}}>
                  <Locationcomponent
                    title="Irshad Khan-COMP 3"
                    backgroundColor={'white'}
                    color={'black'}
                  />
                </View>
                <TouchableOpacity
                  onPress={() => setisshown(true)}
                  style={laboursupplystyle.addbuttonholder}>
                  <Image source={require('../../../assets/Images/plus.png')} />
                </TouchableOpacity>
              </View>
            </View>
            <Labourdetailcard title="Select Guard" />
          </View>

          {/* Remark Component */}

          <View>
            <Remarkcomponent />
          </View>

          {/* Contractor Detail  */}

          <View style={laboursupplystyle.debitcontractordetail}>
            <View style={laboursupplystyle.textcontainer}>
              <Text
                style={{
                  fontFamily: 'Geologica-Bold',
                  fontSize: moderateScale(15),
                  color: 'black',
                }}>
                Debit To
              </Text>
            </View>
            <View>
              <Locationcomponent
              togglebutton={togglebutton}
                title="Irshad Khan-COMP 3"
                backgroundColor={'#f6f8fb'}
                color={'black'}
              />
            </View>
          </View>

          <View style={laboursupplystyle.cameracontainer}>
            <Camera />
            <Camera360 />
          </View>
          <Button />
        </View>
      </ScrollView>
      <BottomTester />
    </View>
  );
};

export default Laboursupply;
