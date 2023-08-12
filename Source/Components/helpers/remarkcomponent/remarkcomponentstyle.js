import {StyleSheet} from "react-native"
import { horizontalScale, moderateScale, verticalScale } from "../../../assets/Dimension"

export default remarkcomponentstyle = StyleSheet.create({
   remarkmain:{
    marginTop:verticalScale(15),
    backgroundColor:"white",
    paddingHorizontal:horizontalScale(15),
    paddingVertical:verticalScale(10),
    overflow:"hidden",
    borderRadius:moderateScale(10),
    elevation:3
   },
   inputholder:{
      borderColor:"orange",
      borderWidth:1,
      borderStyle:"dashed",
      borderRadius:moderateScale(10),
    
    
   },
   textholder:{
       paddingBottom:verticalScale(10)

   },
   text:{
       fontSize:moderateScale(15),
       fontFamily:"Geologica-Bold",
       color:"black"

   }
})