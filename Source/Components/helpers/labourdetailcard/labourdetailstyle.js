import { StyleSheet } from "react-native"
import { horizontalScale, moderateScale, verticalScale } from "../../../assets/Dimension"

export default labourdetailcardstyle = StyleSheet.create({


pwrlabourdetails: {
    paddingHorizontal: horizontalScale(10),
    paddingTop:verticalScale(7),
    backgroundColor: 'white',
    paddingBottom:verticalScale(12)
  },

  Labourmaintext: {
    fontFamily: 'Geologica-SemiBold',
    marginBottom: verticalScale(3),
    color: 'black',
    marginLeft: horizontalScale(10),
  },

  labourdescriptionwrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: horizontalScale(10),
    paddingVertical: verticalScale(8),
  },
  Staffselector: {
    width: horizontalScale(200),
    backgroundColor: '#f6f8fb',
    borderRadius: moderateScale(10),
    paddingHorizontal: horizontalScale(13),
    paddingVertical: verticalScale(9),
    alignItems:"center",
    justifyContent:"space-between",
    flexDirection:"row"
  },
  countcontainer: {
    paddingHorizontal: horizontalScale(24),
    paddingVertical: verticalScale(10),
    backgroundColor: '#f6f8fb',
    borderRadius: moderateScale(10),
  },
  addbutton:{
    alignItems:"center",
    justifyContent:"center",
    marginTop:verticalScale(10),
    borderWidth:1,
    backgroundColor:"#202a44",
    paddingVertical:verticalScale(8),
    width:horizontalScale(160),
    alignSelf:"center",
    borderRadius:moderateScale(20)
  },
  addbuttontext:{
    fontFamily:"Geologica-Medium",
    fontSize:moderateScale(12),
    color:"white"
  }

})
