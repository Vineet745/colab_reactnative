import {StyleSheet} from "react-native"
import { horizontalScale, moderateScale, verticalScale } from "../../../assets/Dimension"


export default concernstyle = StyleSheet.create({
    concernmain:{
        borderRadius:moderateScale(9),
        backgroundColor:"white",
        paddingBottom:verticalScale(12),
    },
    statusview:{
        paddingVertical:verticalScale(8),
        paddingHorizontal:horizontalScale(14),
        backgroundColor:"rgb(235,237,242)"
    },
    statusviewtext:{
        fontFamily:"Geologica-SemiBold",
        color:"black",
        fontSize:moderateScale(13),
    }   ,
    detailholder:{
        backgroundColor:"white"
    },
    workdetail:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
    },
    workareadetail:{
        backgroundColor:"#202a44",
        width:horizontalScale(180),
        paddingHorizontal:horizontalScale(14),
        paddingVertical:verticalScale(7)
    },
    workareadetailtext:{
        fontFamily:"Geologica-Medium",
        color:"white",
        fontSize:moderateScale(13)
    },
    workingprogressdetail:{
        alignItems:"center",
        justifyContent:"center",
        paddingHorizontal:horizontalScale(14),
        paddingVertical:verticalScale(7),

    },
    workingprogressdetailtext:{
        fontFamily:"Geologica-Medium",
        color:"black",
        fontSize:moderateScale(14)
    },
    creatordetail:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        paddingHorizontal:horizontalScale(14),
        paddingVertical:verticalScale(7)
    },
    creatordetailtextone:{
        fontFamily:"Geologica-Medium",
        color:"black",
        fontSize:moderateScale(13),
    },
    
    creatordetailtexttwo:{
        fontSize:moderateScale(9),
        fontFamily:"Geologica-Medium"
    }
})