import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../assets/Dimension';

export default hindrancecardstyle = StyleSheet.create({
 
  desnagcard: {
    backgroundColor: 'white',
    // height: verticalScale(140),
    borderTopEndRadius:moderateScale(5),
    borderBottomRightRadius:moderateScale(5),
    borderBottomLeftRadius:moderateScale(5)

  },
  workingareaview: {
    width: horizontalScale(110),
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
    backgroundColor: '#ec334d',
    paddingVertical: verticalScale(4),
    paddingHorizontal: horizontalScale(10),
    borderRadius: moderateScale(4),
  },
  centerdivtext: {
    color: 'white',
    fontFamily: 'Geologica-SemiBold',
    fontSize: moderateScale(11),
  },
  creatornamediv: {
    padding: moderateScale(10),
    flexDirection:"row",
    alignItems:"center"
  },
  creatornametext: {
    fontFamily: 'Geologica-Medium',
    fontSize:moderateScale(10),
    color: 'gray',
  },
  creatornametext2: {
    fontFamily: 'Geologica-SemiBold',
    fontSize: moderateScale(13),
    color:"black",
    marginLeft:horizontalScale(10)
  },
});
