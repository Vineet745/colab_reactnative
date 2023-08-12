import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../../assets/Dimension';

export default hindracedetailstyle = StyleSheet.create({
  hindrancedetailmain: {
    paddingVertical: verticalScale(10),
    paddingHorizontal: horizontalScale(15),
    flex: 1,
  },
  hindrancealldetail: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: horizontalScale(12),
    // width:horizontalScale(340),
    borderRadius: moderateScale(10),
    backgroundColor: 'white',
    paddingVertical: verticalScale(5),
  },
//   hindrancedetailleft:{

//   }

hindrancedetailtextone:{
    fontFamily:"Geologica-SemiBold",
    fontSize:moderateScale(13),
    color:"black"
},
hindrancedetailtexttwo:{
    fontFamily:"Geologica-Medium",
    fontSize:moderateScale(10)
},

issuecontainer:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    paddingHorizontal: horizontalScale(12),
    paddingVertical:verticalScale(10),
    marginTop:verticalScale(12),
    borderRadius:moderateScale(10),
    backgroundColor:"white",

},
issuecontainertextone:{
    fontFamily:"Geologica-Medium",
    fontSize:moderateScale(13),
    color:"black"
},
issuecontainertexttwo:{
    fontFamily:"Geologica-Medium",
    fontSize:moderateScale(10),
    color:"#a2a2a2"
},
imagecontainer:{
    backgroundColor:"white",
    marginTop:verticalScale(12),
    borderRadius:moderateScale(10),
    paddingVertical:verticalScale(12),
    paddingHorizontal:horizontalScale(10),

},
imagecontainertext:{
    fontFamily:"Geologica-Bold",
    fontSize:moderateScale(15),
    paddingHorizontal:horizontalScale(15),
    paddingBottom:verticalScale(10),
    color:"black"
}
});
