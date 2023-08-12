import {StyleSheet} from "react-native"
import { horizontalScale, moderateScale, verticalScale } from "../../../../assets/Dimension"

export default Areaofconcernstyle =StyleSheet.create({
towermain:{
    borderWidth:1,
    backgroundColor:"#202a44",
    padding:moderateScale(12),
    borderRadius:moderateScale(10)
},
towermaintextone:{
    fontFamily:"Geologica-Medium",
    fontSize:14,
    color:"white"
},
towermaintexttwo:{
    fontFamily:"Geologica-Medium",
    fontSize:11,
    color:"#c4c5c8"
},
status:{
    marginTop:verticalScale(10),
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    backgroundColor:"white",
    padding:moderateScale(12),
    borderRadius:moderateScale(10)
},
assigner:{
    marginTop:verticalScale(10),
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    backgroundColor:"white",
    padding:moderateScale(15),
    borderRadius:moderateScale(10)
},
buttonstyle:{
    backgroundColor:"#202a44",
    borderRadius:moderateScale(20),
    alignItems:"center",
    justifyContent:"center",
    padding:moderateScale(12),
    marginVertical:verticalScale(10),
},
})
    