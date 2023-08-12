import {horizontalScale, moderateScale, verticalScale} from '../../../assets/Dimension';

const {StyleSheet} = require('react-native');

export default progressstyle = StyleSheet.create({
  progressmain: {
    paddingHorizontal: horizontalScale(10),
    paddingVertical: verticalScale(15),
    backgroundColor:"white",
    borderRadius:moderateScale(12)
  },
  progresstextcontainer:{
      paddingBottom:verticalScale(8)
  },
  
  maintext:{
    fontFamily:"Geologica-Bold",
    color:"black",
    fontSize:moderateScale(15)
    
  },
  progressbartext:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    marginTop:verticalScale(8),
    paddingHorizontal:horizontalScale(2)
  },
  totalquantity:{
    marginVertical:verticalScale(8)
  },
  totalquantitytext:{
    fontFamily:"Geologica-Medium",
    color:"black",
    fontSize:moderateScale(15)
  },
  workingstatus:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between"
  },
  countholder:{
    paddingVertical:verticalScale(4),
    paddingHorizontal:horizontalScale(26),
    borderRadius:moderateScale(5),
    backgroundColor:"#ffba4d"
  },
  count:{
    fontSize:15,
    fontFamily:"Geologica-Medium",
    color:"black"
  },

  
});
