import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../assets/Dimension';

export default progressdatacardstyle = StyleSheet.create({
 
  desnagcard: {
    backgroundColor: 'white',
    // height: verticalScale(140),
    borderTopEndRadius:moderateScale(5),
    borderBottomRightRadius:moderateScale(5),
    borderBottomLeftRadius:moderateScale(5),
    marginTop:verticalScale(10),

  },

  workdetail:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
},
workareadetail:{
    backgroundColor:"#202a44",
    width:horizontalScale(180),
    paddingHorizontal:horizontalScale(14),
    paddingVertical:verticalScale(7)
},
workareadetailtext:{
    fontFamily:"Geologica-Medium",
    color:"white",
    fontSize:moderateScale(13)
},
workingprogressdetail:{
    alignItems:"center",
    justifyContent:"center",
    paddingHorizontal:horizontalScale(14),
    paddingVertical:verticalScale(7),

},
workingprogressdetailtext:{
    fontFamily:"Geologica-Medium",
    color:"black",
    fontSize:moderateScale(14)
},


  workingareaview: {
    width: horizontalScale(180),
    paddingVertical: verticalScale(6),
    borderBottomRightRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#202a44',
  },
  workingareatext: {
    color: 'white',
    fontFamily: 'Geologica-Medium',
    fontSize: moderateScale(13),
  },
  workdetails: {
    height: verticalScale(51),
    marginTop: verticalScale(5),
    borderTopEndRadius: 9,
    borderTopStartRadius: 9,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: moderateScale(10),
    borderBottomWidth: 0.5,
    borderColor:"#EBEDF2",
    width: horizontalScale(320),
  },

  workdetailstextone: {
    fontFamily: 'Geologica-Bold',
    fontSize: moderateScale(14),
    color: 'black',
  },
  workdetailstexttwo: {
    fontFamily: 'Geologica-Medium',
    fontSize: moderateScale(9),
  },
  centerdiv: {
    backgroundColor: '#ffcd7e',
    paddingVertical: verticalScale(4),
    paddingHorizontal: horizontalScale(12),
    borderRadius: moderateScale(4),
  },
  centerdivtext: {
    color: 'black',
    fontFamily: 'Geologica-SemiBold',
    fontSize: moderateScale(11),
  },
  creatornamediv: {
    padding: moderateScale(10),
    flexDirection:"row",
    alignItems:"center",
  },
  creatornametext: {
    fontFamily: 'Geologica-Medium',
    fontSize:moderateScale(11),
    color: 'gray',
  },
  creatornametext2: {
    fontFamily: 'Geologica-SemiBold',
    fontSize: moderateScale(13),
    color:"black",
    marginLeft:horizontalScale(10)
  },
});
