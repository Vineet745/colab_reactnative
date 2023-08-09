import {StyleSheet} from 'react-native';
import { horizontalScale, moderateScale, verticalScale } from '../../../assets/Dimension';


export default profilestyle = StyleSheet.create({
    userdetail:{
        alignItems:"center",
        justifyContent:"center",
        padding:moderateScale(10),

        
    },
    userdetailinner:{
        width:verticalScale(300),
        backgroundColor:"white",
        padding:moderateScale(8),
        borderRadius:moderateScale(20),
        marginTop:verticalScale(10)

    },
    userprofile:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-evenly",
        marginBottom:verticalScale(10),
        
    },
    
    usercredentialtext:{
         fontFamily:"Geologica-Bold",
         fontSize:22,
         color:"black",

    },
    usercredentialtexttwo:{
           fontSize:16,
         fontFamily:"Geologica-Medium",
         color:"#bfbfbf",
         lineHeight:17
         


    },
    profilebuttons:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-evenly",
    },
    editbutton:{
        paddingVertical:verticalScale(4),
        paddingHorizontal:horizontalScale(20),
        width:horizontalScale(140),
        borderRadius:moderateScale(20),
        backgroundColor:"black",
        alignItems:"center",
        justifyContent:"center"
    },
    editbuttontext:{
        fontFamily:"Geologica-Medium",
        fontSize:moderateScale(15),
        color:"white"
    },
    switchbutton:{
        paddingVertical:verticalScale(4),
        paddingHorizontal:horizontalScale(10),
        borderRadius:moderateScale(20),
        width:horizontalScale(140),
        backgroundColor:"#ffba4d",
        alignItems:"center",
        justifyContent:"center"
    },

    userotherdetail:{
        alignItems:"center",
        justifyContent:"center",
        marginTop:verticalScale(20)
    },
    userotherdetailinner:{
        backgroundColor:"white",
        width:"92%",
        borderRadius:20,
        padding:moderateScale(5),
        paddingHorizontal:horizontalScale(10)

    },
    singledetailcontainer:{
        padding:moderateScale(5)
    },
    singledetailtextone:{
        fontFamily:"Geologica-SemiBold",
        color:"black",
        fontSize:16
    },
    singledetailtexttwo:{
        fontFamily:"Geologica-Medium",
        fontSize:moderateScale(12)
    },
    workingbuttons:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-evenly",
        marginTop:verticalScale(20)
    },
    workingbutton:{
        paddingVertical:verticalScale(4),
        paddingHorizontal:horizontalScale(10),
        width:horizontalScale(160),
        borderRadius:moderateScale(20),
        backgroundColor:"#C5C7C9",
        alignItems:"center",
        justifyContent:"center"
    },
    workingbuttontext:{
        fontFamily:"Geologica-Medium",
        fontSize:moderateScale(15),
        color:"black"
    },
    
})