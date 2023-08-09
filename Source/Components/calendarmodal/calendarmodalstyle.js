import { horizontalScale, moderateScale, verticalScale } from "../../assets/Dimension";

const { StyleSheet } = require("react-native");



export default calendarmodalstyle = StyleSheet.create({
    calendarmodalmain:{
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'white',
            borderRadius: moderateScale(10),
            position: 'absolute',
            bottom: verticalScale(70),
            left: horizontalScale(12),
            padding: moderateScale(15),
            elevation: 5,
    },
    modalnavigatebuttons:{
            borderWidth: 1,
            width: 140,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
            paddingVertical: 6,
            backgroundColor: 'black',
            marginBottom: 5,
          }
    
})