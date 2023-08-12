import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import { cardcompsheetstyle } from './cardcompsheet'
import Searchbar from '../../../utils/Searchbar'
import { horizontalScale } from '../../../assets/Dimension'

const Cardcomponent = () => {
  return (
    <View style={{flex:1}}>
        <TouchableOpacity>
        <View style={cardcompsheetstyle.cardmain}>
            <View style={cardcompsheetstyle.cardmaintop}>
                <View style={cardcompsheetstyle.cardmaintopleft}>
                <Text style={cardcompsheetstyle.cardmaintoptext}>Tower A</Text>
                </View>
                <View style={cardcompsheetstyle.cardmaintopRight}>
                    <Text style={cardcompsheetstyle.cardmaintopRighttext}>Draft 10</Text>
                </View>
            </View>
            <View style={cardcompsheetstyle.cardbottom}>
                <View style={cardcompsheetstyle.cardbottomchild}>
                    <Text style={{fontFamily:"Geologica-Medium",fontSize:11,color:"black"}}>Completed</Text>
                    <Text style={{fontFamily:"Geologica-Medium",fontSize:11,color:"black",marginLeft:horizontalScale(7)}}>100</Text>
                </View>
                <View style={cardcompsheetstyle.cardbottomchild}>
                    <Text style={{fontFamily:"Geologica-Medium",fontSize:11,color:"black"}}>Ongoing</Text>
                    <Text style={{fontFamily:"Geologica-Medium",fontSize:11,color:"black",marginLeft:horizontalScale(7)}}>100</Text>
                </View>
                <View style={cardcompsheetstyle.cardbottomchild}>
                    <Text style={{fontFamily:"Geologica-Medium",fontSize:11,color:"black"}}>Upcoming</Text>
                    <Text style={{fontFamily:"Geologica-Medium",fontSize:11,color:"black",marginLeft:horizontalScale(7)}}>100</Text>
                </View>
                
            </View>
        </View>
        </TouchableOpacity>
    </View>
  )
}

export default Cardcomponent