import { StyleSheet } from "react-native";
import { horizontalScale, moderateScale, verticalScale } from "../../../assets/Dimension";

export default snagchartstyle = StyleSheet.create({
   snagmaintext: {
        fontFamily: 'Geologica-Bold',
        fontSize: 15,
        letterSpacing: -0.3,
        color: 'black',
        fontWeight:'600'
        // padding: moderateScale(8),
      },
      upperview:{
          marginTop:verticalScale(15),
          alignItems:"start",
          justifyContent:"space-between",
          flexDirection:"column",
          height:verticalScale(53)
      },
      pointscontainer: {
        width: moderateScale(300),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        },
      workmenship: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      workmenshipcircle: {
        width: 12,
        height: 12,
        borderRadius: 50,
        backgroundColor: '#ffba4d',
        marginRight: 5,

      },
      workmanship: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      workmanshipcircle: {
        width: 12,
        height: 12,
        borderRadius: 50,
        backgroundColor: '#007EC7',
        marginRight: 5,
      },
      quality: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      qualitycircle: {
        width: 12,
        height: 12,
        borderWidth: 1,
        borderRadius: 50,
        backgroundColor: 'black',
        marginRight: 5,
      },
      pointstext: {
        fontSize: moderateScale(12),
        fontWeight: '400',
        color: '#5A5A5A',
        fontFamily:"Geologica-Medium"
      },
      divisionview: {
        width: horizontalScale(310),
        height: verticalScale(21),
        flexDirection: 'row',
        borderRadius: moderateScale(30),
        overflow: 'hidden',
      },
      divisionviewone: {
        width: horizontalScale(145),
        backgroundColor: '#ffba4d',
        alignItems: 'center',
        justifyContent: 'center',
      },
      divisionviewtwo: {
        width: horizontalScale(90),
        backgroundColor: '#007ec7',
        alignItems: 'center',
        justifyContent: 'center',
      },
      divisionviewthree: {
        width: horizontalScale(75),
        backgroundColor: '#202a44',
        alignItems: 'center',
        justifyContent: 'center',
      },
      divisiontext: {
        color: 'white',
        fontSize: moderateScale(12),
        fontFamily:"Geologica-Medium",
    
      },
      middleview:{
        borderTopWidth:0.5,
        borderBottomWidth:0.5,
        height:verticalScale(230),
        marginTop:verticalScale(21),
        borderWidth:1,
        padding:moderateScale(5)
      },
      
      chartpointscontainer: {
        width: moderateScale(210),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        },
      workmenship: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      workmenshipcircle: {
        width: 14,
        height: 14,
        borderRadius: 50,
        backgroundColor: '#ffba4d',
        marginRight: 5,

      },
      workmanship: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      workmanshipcircle: {
        width: 14,
        height: 14,
        borderRadius: 50,
        backgroundColor: '#007EC7',
        marginRight: 5,
      },
      quality: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      criticalcircle: {
        width: 14,
        height: 14,
        borderRadius: 50,
        backgroundColor: '#ec334d',
        marginRight: 5,
      },
      pointstext: {
        fontSize: moderateScale(12),
        fontWeight: '400',
        color: '#5A5A5A',
        fontFamily:"Geologica-Medium"
      },
      lowerview:{
        height:verticalScale(90),
        flexDirection:"row",
        flexWrap:"wrap",
        alignItems:"center",
        paddingVertical:verticalScale(8),
        borderWidth:1
      },
      statusbutton:{
        borderRadius:moderateScale(20),
        margin:moderateScale(3),
        backgroundColor:"#202a44",
        paddingHorizontal:horizontalScale(7),
        paddingVertical:verticalScale(2)
      },
      statusbuttontext:{
        padding:moderateScale(6),
        fontFamily:"Geologica-SemiBold",
        color:"white",
        fontSize:moderateScale(10)
      }

})