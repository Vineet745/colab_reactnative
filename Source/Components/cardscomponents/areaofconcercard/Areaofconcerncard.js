import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import concernstyle from "./areaofconcernstyle"
import { useNavigation } from '@react-navigation/native'

const Areaofconcerncard = () => {
  const {navigate} = useNavigation()
  return (
    <View style={concernstyle.concernmain}>
      <TouchableOpacity onPress={()=>navigate('homestack',{screen:"Area of Concern Detail"})}>
      <View style={concernstyle.statusview}>
        <Text style={concernstyle.statusviewtext}>Approval</Text>
      </View>
      <View style={concernstyle.detailholder}>
     <View style={concernstyle.workdetail}>
        <View style={concernstyle.workareadetail}>
            <Text style={concernstyle.workareadetailtext}>Tower A/Ground Floor / Unit 1</Text>
        </View>
        <View style={concernstyle.workingprogressdetail}>
            <Text style={concernstyle.workingprogressdetailtext}>Column Shuttering</Text>
        </View>
     </View>
     <View style={concernstyle.creatordetail}>
       <View style={concernstyle.creatorleftview}>
        <Text style={concernstyle.creatordetailtextone}>The Lake Admin</Text>
        <Text style={concernstyle.creatordetailtexttwo}>Created By</Text>
       </View>
       <View style={concernstyle.creatorrightview}>
        <Text style={concernstyle.creatordetailtextone}>9 June 2023</Text>
        <Text style={concernstyle.creatordetailtexttwo}>Close Date</Text>
       </View>
     </View>
      </View>
      </TouchableOpacity>
    </View>
  )
}

export default Areaofconcerncard