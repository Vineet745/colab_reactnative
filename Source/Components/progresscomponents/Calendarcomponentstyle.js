import { StyleSheet } from "react-native";
import { horizontalScale, moderateScale, verticalScale } from "../../assets/Dimension";


export default calendarcomponentstyle = StyleSheet.create({
    calendarmain:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        padding:moderateScale(15),
        borderRadius:moderateScale(10),
        backgroundColor:"white",
        width:horizontalScale(340),
        alignSelf:"center",
        marginTop:verticalScale(10)
    },
    Datetext:{
        fontFamily:"Geologica-Medium"
    }
})