import {StyleSheet} from "react-native"
import { horizontalScale, moderateScale, verticalScale } from "../../../assets/Dimension";

export const desnagstyle = StyleSheet.create({
    maincontainer:{
      paddingVertical:verticalScale(10),
      paddingHorizontal:horizontalScale(15),
      borderRadius:moderateScale(10)
    },
    snagstatus:{
      backgroundColor:"white",
      paddingVertical:verticalScale(10),
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"space-between",
      paddingHorizontal:horizontalScale(10),
      marginBottom:verticalScale(10),
      borderRadius:moderateScale(10)
    },
    snagstatustextone:{
      fontFamily:"Geologica-Medium",
      fontSize:moderateScale(14),
      color:"black"
    },
    snagstatustexttwo:{
      fontFamily:"Geologica-Medium",
      fontSize:moderateScale(10)
    },

    amountdetail:{
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"space-between",
      paddingHorizontal: horizontalScale(12),
      paddingVertical:verticalScale(10),
      borderRadius:moderateScale(10),
      backgroundColor:"white",
      marginBottom:verticalScale(10)
  
  },
  issuecontainertextone:{
      fontFamily:"Geologica-Medium",
      fontSize:moderateScale(13),
      color:"black"
  },
  issuecontainertexttwo:{
      fontFamily:"Geologica-Medium",
      fontSize:moderateScale(10),
      color:"#a2a2a2"
  },
  workarea:{
    backgroundColor:"white",
    paddingVertical:verticalScale(10),
    paddingHorizontal:horizontalScale(18)
  },
  workareabottomview:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    marginTop:verticalScale(10)
  },
  workareatextone:{
    fontFamily:"Geologica-Medium",
    fontSize:moderateScale(14),
    color:"black"
  },
  workareatexttwo:{
    fontFamily:"Geologica-Medium",
    fontSize:moderateScale(10)
  },
  imagecontainer:{
    backgroundColor:"white",
    marginTop:verticalScale(12),
    borderRadius:moderateScale(10),
    paddingVertical:verticalScale(12),
    paddingHorizontal:horizontalScale(10),

},
imagecontainertext:{
    fontFamily:"Geologica-Bold",
    fontSize:moderateScale(15),
    paddingHorizontal:horizontalScale(15),
    paddingBottom:verticalScale(10),
    color:"black"
}

  });
  