import { View, Text,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import Topnav from '../../../Components/Topnav'
import profilestyle from './profilestyle'
import { useDispatch, useSelector } from 'react-redux'
import AsyncStorage from "@react-native-async-storage/async-storage"
import { loginuser, logoutuser } from '../../../redux/slice/userslice'

const Profile = () => {
  const dispatch = useDispatch()
  const logout =async()=>{
   const token = await AsyncStorage.removeItem('TOKEN')
   dispatch(logoutuser(token))
  }
    

   
  return (
    <View style={{flex:1}}>
      <Topnav/>
      <View style={profilestyle.userdetail}>
        <View style={profilestyle.userdetailinner}>
        <View style={profilestyle.userprofile}>
          <Image source={require('../../../assets/Images/User-Logo.png')}/>
          <View style={profilestyle.usercredential}>
            <Text style={profilestyle.usercredentialtext}>Hi, The Lake Admin</Text>
            <Text style={profilestyle.usercredentialtexttwo}>@lakesuperadmin</Text>
          </View>
        </View>
        <View style={profilestyle.profilebuttons}>
          <TouchableOpacity style={profilestyle.editbutton}>
            <Text  style={profilestyle.editbuttontext}>Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={profilestyle.switchbutton}>
            <Text style={profilestyle.editbuttontext}>Switch Project</Text>
          </TouchableOpacity>
        </View>
        </View>
      </View>

       <View style={profilestyle.userotherdetail}>
        <View style={profilestyle.userotherdetailinner}>
          <View style={profilestyle.singledetailcontainer}>
            <Text style={profilestyle.singledetailtextone}>1 Jan 2021</Text>
            <Text style={profilestyle.singledetailtexttwo}>Date of Birth</Text>
          </View>
          <View style={profilestyle.singledetailcontainer}>
            <Text style={profilestyle.singledetailtextone}>1 Jan 2021</Text>
            <Text style={profilestyle.singledetailtexttwo}>Corporate Address</Text>
          </View>
          <View style={profilestyle.singledetailcontainer}>
            <Text style={profilestyle.singledetailtextone}>1 Jan 2021</Text>
            <Text style={profilestyle.singledetailtexttwo}>Emergency Contact Person</Text>
          </View>
          <View style={profilestyle.singledetailcontainer}>
            <Text style={profilestyle.singledetailtextone}>1 Jan 2021</Text>
            <Text style={profilestyle.singledetailtexttwo}>Emergency Contact Mobile Number</Text>
          </View>
          <View style={profilestyle.singledetailcontainer}>
            <Text style={profilestyle.singledetailtextone}>1 Jan 2021</Text>
            <Text style={profilestyle.singledetailtexttwo}>Emergency Alternate Mobile Number</Text>
          </View>
        </View>
       </View>

       <View style={profilestyle.workingbuttons}>
          <TouchableOpacity onPress={()=>logout()} style={profilestyle.workingbutton}>
            <Text  style={profilestyle.workingbuttontext}>Logout</Text>
          </TouchableOpacity>
          <TouchableOpacity style={profilestyle.workingbutton}>
            <Text style={profilestyle.workingbuttontext}>Change Password</Text>
          </TouchableOpacity>
        </View>
    </View>
  )
}

export default Profile