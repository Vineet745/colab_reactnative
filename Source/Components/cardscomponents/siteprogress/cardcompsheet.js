import { StyleSheet } from "react-native";
import { horizontalScale, moderateScale, verticalScale } from "../../../assets/Dimension";

export const cardcompsheetstyle = StyleSheet.create({
    cardmain:{
        marginTop:verticalScale(15),
        height:verticalScale(70),
        borderRadius:moderateScale(9),
        overflow:"hidden",
        backgroundColor:"#ebedf2",
        paddingRight:verticalScale(15)
        },
    cardmaintop:{
        justifyContent:"space-between",
        alignItems:"center",
        flexDirection:"row",
        height:verticalScale(32),
    
    },
    cardmaintopleft:{
        width:horizontalScale(110),
        paddingLeft:horizontalScale(12),
        backgroundColor:"#202a44",
        paddingVertical:verticalScale(5),
        borderBottomRightRadius:9,
        borderTopLeftRadius:9,
        height:verticalScale(32)

       
    },
    cardmaintoptext:{
        fontFamily:"Geologica-Medium",
        color:"white"
    },
    cardmaintopRight:{
        backgroundColor:"#ffcd7e",
        height:verticalScale(26),
        alignItems:"center",
        justifyContent:"center",
        paddingHorizontal:horizontalScale(15),
        borderRadius:moderateScale(10)
    },
    cardmaintopRighttext:{
        fontFamily:"Geologica-Regular",
        fontSize:moderateScale(10),
        color:"black"
    },
    cardbottom:{
    marginTop:verticalScale(10),
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    width:horizontalScale(320),
    paddingLeft:horizontalScale(15)
    },

    cardbottomchild:{
        backgroundColor:"white",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        padding:moderateScale(5),
        borderRadius:moderateScale(3)
        
    }


})