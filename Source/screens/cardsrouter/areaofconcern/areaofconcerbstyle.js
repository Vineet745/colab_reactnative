import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../assets/Dimension';
export default areastylesheet = StyleSheet.create({
  dropdownone: {
    marginBottom: verticalScale(10),
    marginTop: verticalScale(5),
    backgroundColor: 'white',
    padding: moderateScale(15),
    borderRadius: moderateScale(10),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dropingtext: {
    fontFamily: 'Geologica-SemiBold',
    color: 'gray',
  },
  otherlocation: {
    padding: moderateScale(10),
    backgroundColor: 'white',
    borderRadius: moderateScale(10),
    marginBottom: verticalScale(10),
  },
  otherlocationmaintext: {
    fontFamily: 'Geologica-Bold',
    color: 'black',
    padding: moderateScale(5),
  },
  inputbox: {
    marginHorizontal: horizontalScale(10),
    paddingLeft: horizontalScale(10),
    backgroundColor: '#f6f8fb',
    fontFamily: 'Geologica-Medium',
    borderRadius: moderateScale(5),
    borderColor: 'orange',
  },

  Remarkinputwrapper: {
    borderWidth: 1.5,
    marginTop: verticalScale(10),
    borderRadius: 10,
    borderStyle: 'dashed',
    borderColor: 'orange',
  },

  imagepicker:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    backgroundColor:"white",
    padding:moderateScale(15),
    borderRadius:moderateScale(10)
  },
  imagepickerleftview:{
      flexDirection:"row",
      alignItems:"center"
  },
  middletext:{
    fontFamily:"Geologica-SemiBold",
    marginLeft:horizontalScale(15),
    color:"black"
  },
  uploadbtn:{
    backgroundColor:"black",
    paddingVertical:verticalScale(6),
    paddingHorizontal:horizontalScale(15),
    borderRadius:moderateScale(20)
  },
  uploadbtntext:{
    fontFamily:"Geologica-Medium",
    color:"white",
    fontSize:moderateScale(10)
  },
  submitbtn:{
    backgroundColor:"#fdbb51",
    marginTop:verticalScale(12),
    alignItems:"center",
    justifyContent:"center",
    borderRadius:moderateScale(20)
  },
  submitbtntext:{
    fontFamily:"Geologica-Medium",
    fontSize:moderateScale(14),
    color:"black",
    paddingVertical:verticalScale(10)
  }


});
