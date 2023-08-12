import { View, Text, Image,ScrollView  } from 'react-native'
import React from 'react'
import { moderateScale, verticalScale } from '../../../../assets/Dimension'
import hindrancedetailstyle from './hindrancedetailstyle'
import Remarkcomponent from '../../../../Components/helpers/remarkcomponent/Remarkcomponent'

const Hindrancedetail = () => {
  return (
    <View style={hindrancedetailstyle.hindrancedetailmain}>
        <ScrollView>
        <View style={hindrancedetailstyle.hindrancealldetail}>
       <View style={hindrancedetailstyle.hindrancedetailleft}>
        <Text style={hindrancedetailstyle.hindrancedetailtextone}>21 March 2023 </Text>
        <Text style={hindrancedetailstyle.hindrancedetailtexttwo}>From Date</Text>
       </View>
       <View >
        <Text style={hindrancedetailstyle.hindrancedetailtextone}>11 April 2023 </Text>
        <Text style={hindrancedetailstyle.hindrancedetailtexttwo}>To Date</Text>
       </View>
       <View>
        <Text style={hindrancedetailstyle.hindrancedetailtextone}>2000 </Text>
        <Text style={hindrancedetailstyle.hindrancedetailtexttwo}>Cost Impact</Text>
       </View>
        </View>

        <View style={hindrancedetailstyle.issuecontainer}>
            <View>
                <View style={{marginBottom:verticalScale(15)}}>
                    <Text style={hindrancedetailstyle.issuecontainertextone}>Material Issue</Text> 
                    <Text style={hindrancedetailstyle.issuecontainertexttwo}>Hindrance Type</Text>
                </View>
                <View>
                    <Text style={hindrancedetailstyle.issuecontainertextone}>M Supply-SUP COMP NAME</Text> 
                    <Text style={hindrancedetailstyle.issuecontainertexttwo}>Responsible Person</Text>
                </View>
            </View>
            <View>
            <View style={{marginBottom:verticalScale(15)}}>
                    <Text style={hindrancedetailstyle.issuecontainertextone}>Catch</Text> 
                    <Text style={hindrancedetailstyle.issuecontainertexttwo}>Hindrance Reason</Text>
                </View>
                <View>
                    <Text style={hindrancedetailstyle.issuecontainertextone}>7</Text> 
                    <Text style={hindrancedetailstyle.issuecontainertexttwo}>No of days</Text>
                </View>
            </View>
        </View>

        <View>
            <Remarkcomponent title="Description" placeholder='It is a long established fact that a reader will be d istracted by the readable content of a page when looking at its layout'/>
        </View>

        <View style={hindrancedetailstyle.imagecontainer}>
            <Text style={hindrancedetailstyle.imagecontainertext}>File</Text>
            <View style={{borderWidth:0.3,borderRadius:10,alignItems:"center"}}>
                <Image source={require('../../../../assets/Images/naksha.png')}/>
            </View>
        </View>
        </ScrollView>
    </View>
  )
}

export default Hindrancedetail