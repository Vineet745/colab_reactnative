import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../assets/Dimension';

export default qualitychecklistcardstyle = StyleSheet.create({
  desnagcard: {
    backgroundColor: 'white',
    // height: verticalScale(140),
    borderTopEndRadius: moderateScale(5),
    borderBottomRightRadius: moderateScale(5),
    borderBottomLeftRadius: moderateScale(5),
  },
  workingareaview: {
    width: horizontalScale(130),
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
  Workingdetailcontainer: {
    padding: moderateScale(15),
  },

  workingareadetail: {
    flexDirection: 'row',
    marginBottom: verticalScale(10),
    alignContent: 'center',
    justifyContent: 'space-between',
  },
  workplace: {
    width: horizontalScale(180),
  },
  contractordetail: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: verticalScale(10),
    width: 280,
  },
  workdetails: {
    borderTopEndRadius: 9,
    borderTopStartRadius: 9,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderTopWidth: 1,
    borderColor: '#EBEDF2',
    paddingVertical: verticalScale(12),
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
    flexDirection: 'row',
    alignItems: 'center',
  },
  creatornametext: {
    fontFamily: 'Geologica-Medium',
    fontSize: moderateScale(10),
    color: 'gray',
  },
  creatornametext2: {
    fontFamily: 'Geologica-SemiBold',
    fontSize: moderateScale(13),
    color: 'black',
    marginLeft: horizontalScale(10),
  },
});
