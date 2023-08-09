import { StyleSheet } from "react-native";
import { moderateScale, verticalScale } from "../../../assets/Dimension";
export default locationcomponentstyle = StyleSheet.create({
    dropdownone: {
        marginBottom: verticalScale(10),
        backgroundColor: 'white',
        padding: moderateScale(15),
        borderRadius: moderateScale(10),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      dropingtext: {
        fontFamily: 'Geologica-Medium',
        color: '#b9b9b9',
        fontSize:moderateScale(12)
      },
})