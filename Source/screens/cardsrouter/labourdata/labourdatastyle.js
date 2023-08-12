import {StyleSheet} from 'react-native';
import { horizontalScale, moderateScale, verticalScale } from '../../../assets/Dimension';


export default labourdatastyle = StyleSheet.create({
    labourmain:{
        flex:1,
        padding:moderateScale(15),
    },
    calendardiv:{
        height:verticalScale(35),
        borderRadius:moderateScale(10),
        backgroundColor:"white",
        justifyContent:"center",
        paddingHorizontal:horizontalScale(15),
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"
    },
    calendartext:{
        fontFamily:"Geologica-Medium",
        color:"black"
    },
    labourholder:{
        borderTopRightRadius:10,
        borderTopLeftRadius:10,
        overflow:"hidden",
        backgroundColor:"white",
        marginTop:verticalScale(10)




    },
    contractorname:{
        backgroundColor:"#202a44",
        paddingHorizontal:horizontalScale(15),
        paddingVertical:verticalScale(3),
    },
    contractornametext:{
        color:"white",
        fontFamily:"Geologica-SemiBold",
    },
    labourcontainer:{
        paddingHorizontal:horizontalScale(10),
        paddingVertical:verticalScale(5)
    }
})