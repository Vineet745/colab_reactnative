import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { horizontalScale, verticalScale } from '../../../assets/Dimension'
import labourdetailcardstyle from "./labourdetailstyle"
const Labourdetailcard = ({title}) => {
  return (
    <View style={labourdetailcardstyle.pwrlabourdetails}>
            <Text style={labourdetailcardstyle.Labourmaintext}>Labour Details</Text>
            <View style={labourdetailcardstyle.labourdescriptionwrapper}>
              <View style={labourdetailcardstyle.Staffselector}>
                <Text style={{fontFamily: 'Geologica-Medium', color: 'black'}}>
                  {title}
                </Text>
                <Image source={require('../../../assets/Images/dropdownlist.png')}/>
              </View>
              <View style={labourdetailcardstyle.countcontainer}>
                <Text style={{fontFamily:"Geologica-Medium"}}>0</Text>
              </View>
              <Image
                style={{width: horizontalScale(16), height: verticalScale(18)}}
                source={require('../../../assets/Images/delete.png')}
              />
            </View>
            <View style={{borderWidth: 1, borderColor: '#DBDBDB'}}></View>
            <View style={labourdetailcardstyle.labourdescriptionwrapper}>
              <View style={labourdetailcardstyle.Staffselector}>
                <Text style={{fontFamily: 'Geologica-Medium', color: 'black'}}>
                  {title}
                </Text>
                <Image source={require('../../../assets/Images/dropdownlist.png')}/>
              </View>
              <View style={labourdetailcardstyle.countcontainer}>
                <Text style={{fontFamily:"Geologica-Medium"}}>0</Text>
              </View>
              <Image
                style={{width: horizontalScale(16), height: verticalScale(18)}}
                source={require('../../../assets/Images/delete.png')}
              />
            </View>
            <TouchableOpacity style={labourdetailcardstyle.addbutton}>
              <Text style={labourdetailcardstyle.addbuttontext}>Add More Labour</Text>
            </TouchableOpacity>
          </View>
  )
}

export default Labourdetailcard