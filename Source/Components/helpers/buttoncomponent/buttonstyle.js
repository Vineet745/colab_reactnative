import {StyleSheet} from "react-native" 
import { horizontalScale, moderateScale, verticalScale } from "../../../assets/Dimension"

 export default buttonstyle = StyleSheet.create({
   buttonmain:{
    paddingHorizontal:horizontalScale(10),
    paddingVertical:verticalScale(10),
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
   },
   blackbtn:{
       backgroundColor:"black",
       paddingVertical:verticalScale(10),
    width:horizontalScale(150),
       paddingVertical:verticalScale(8),
       borderRadius:moderateScale(27),
       alignItems:"center",
       justifyContent:"center"
   },
   blackbuttontext:{
    fontFamily:"Geologica-Medium",
    fontSize:moderateScale(14),
    color:"white"
   },
   yellowbtn:{
       backgroundColor:"#FFBA4D",
       paddingVertical:verticalScale(8),
    width:horizontalScale(150),
       borderRadius:moderateScale(27),
       alignItems:"center",
       justifyContent:"center"
   },
   yellowbuttontext:{
    fontFamily:"Geologica-Medium",
    fontSize:moderateScale(14),
    color:"black"
   },
   

})