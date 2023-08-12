import { View, Text,Image,ScrollView } from 'react-native'
import React from 'react'
import ModalTester from '../../../Components/modal/Modal'
import { desnagstyle } from './desnagstyle'
import { horizontalScale, moderateScale, verticalScale } from '../../../assets/Dimension'
import Remarkcomponent from '../../../Components/helpers/remarkcomponent/Remarkcomponent'
import Button from '../../../Components/helpers/buttoncomponent/Button'

const Desnag = () => {
  return (
    <View style={desnagstyle.maincontainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={desnagstyle.snagstatus}>
      <View>
        <Text style={desnagstyle.snagstatustextone}>9 June 2023</Text>
        <Text style={desnagstyle.snagstatustexttwo}>Snag Created Date</Text>
      </View>
      <View>
        <Text style={desnagstyle.snagstatustextone}>15 June 2023</Text>
        <Text style={desnagstyle.snagstatustexttwo}>Snag Due Date</Text>
      </View>
      </View>

      <View style={desnagstyle.snagstatus}>
      <View>
        <View style={{flexDirection:"row"}}>
          <View style={{backgroundColor:"#ec334d",width:horizontalScale(26),height:verticalScale(6),borderRadius:moderateScale(3),marginRight:verticalScale(3)}}></View>
          <View style={{backgroundColor:"#ec334d",width:horizontalScale(26),height:verticalScale(6),borderRadius:moderateScale(3),marginRight:verticalScale(3)}}></View>
          <View style={{backgroundColor:"#ec334d",width:horizontalScale(26),height:verticalScale(6),borderRadius:moderateScale(3)}}></View>
        </View>
        <View style={{marginTop:verticalScale(8),flexDirection:"row"}}>
        <Text style={desnagstyle.snagstatustexttwo}>Priority :</Text>
        <Text style={desnagstyle.snagstatustexttwo}> Critical</Text>
        </View>
      </View>
      <View>
        <Text style={desnagstyle.snagstatustextone}>Safety</Text>
        <Text style={desnagstyle.snagstatustexttwo}>Category</Text>
      </View>
      </View>

      <View style={desnagstyle.amountdetail}>
            <View>
                <View style={{marginBottom:verticalScale(15)}}>
                    <Text style={desnagstyle.issuecontainertextone}>Irshad Khan COMP 3</Text> 
                    <Text style={desnagstyle.issuecontainertexttwo}>Debit To</Text>
                </View>
                <View>
                    <Text style={desnagstyle.issuecontainertextone}>The Lake Admin</Text> 
                    <Text style={desnagstyle.issuecontainertexttwo}>Snag Assigned By</Text>
                </View>
            </View>
            <View>
            <View style={{marginBottom:verticalScale(15)}}>
                    <Text style={desnagstyle.issuecontainertextone}>10,000</Text> 
                    <Text style={desnagstyle.issuecontainertexttwo}>Debit Amount</Text>
                </View>
                <View>
                    <Text style={desnagstyle.issuecontainertextone}>The Lake Admin</Text> 
                    <Text style={desnagstyle.issuecontainertexttwo}>Snag Assigner To</Text>
                </View>
            </View>
        </View>

        <View style={desnagstyle.workarea}>
          <View>
            <View>
              <Text style={desnagstyle.workareatextone}>Tower A / Ground Floor / Unit 1</Text>
              <Text style={desnagstyle.workareatexttwo}>Contractor</Text>
            </View>
          </View>
          <View style={desnagstyle.workareabottomview}>
            <View>
              <Text style={desnagstyle.workareatextone}>Irshad Khan COMP 3</Text>
              <Text style={desnagstyle.workareatexttwo}>Contractor</Text>
            </View>
            <View>
              <Text style={desnagstyle.workareatextone}>Column Shuttering</Text>
              <Text style={desnagstyle.workareatexttwo}>Activity</Text>
            </View>
          </View>
        </View>

        <View style={desnagstyle.imagecontainer}>
            <Text style={desnagstyle.imagecontainertext}>Mark Location</Text>
            <View style={{borderWidth:0.3,borderRadius:10,alignItems:"center"}}>
                <Image source={require('../../../assets/Images/naksha.png')}/>
            </View>
        </View>

        <View>
          <Remarkcomponent title="Remark" placeholder='It is a long established fact that a reader will be d istracted by the readable content of a page when looking at its layout'/>
        </View>

        <View>
          <Remarkcomponent title="De-Snag Remark" placeholder='Enter Your De-Snag Remark'/>
        </View>
        <View>
          <Button firstbutton='Cancel'/>
        </View>
        </ScrollView>
    </View>
  )
}

export default Desnag