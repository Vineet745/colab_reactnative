import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../assets/Dimension';

const {StyleSheet} = require('react-native');

export const snagstyle = StyleSheet.create({
  main: {
    flex: 1,
    padding: moderateScale(15),
  },
  datepicker: {
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 15,
    backgroundColor: 'white',
    borderRadius: moderateScale(10),
    marginBottom: 10,
  },
  datepickerlefttextone: {
    fontFamily: 'Geologica-Medium',
    color: 'black',
    fontSize: 15,
  },
  datepickerlefttexttwo: {
    fontFamily: 'Geologica-Medium',
    color: '#b6b6b6',
    fontSize: 10,
  },
  touchable: {
    backgroundColor: 'black',
    borderRadius: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingVertical: verticalScale(6),
    paddingHorizontal: horizontalScale(12),
    borderRadius: moderateScale(15),
  },
  touchabletext: {
    fontSize: moderateScale(8),
    color: 'white',
    marginLeft: verticalScale(5),
    fontFamily: 'Geologica-Medium',
    fontSize: moderateScale(12),
  },
  options: {
    paddingVertical: verticalScale(10),
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 15,
    backgroundColor: 'white',
    borderRadius: moderateScale(10),
    marginBottom: 20,
  },
  singlediv: {
    borderWidth: 1,
    height: '100%',
    width: '30%',
  },
  optionbuttons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'Center',
  },
  optionbutton: {
    width: 16,
    height: 16,
    borderWidth: 1,
    borderRadius: moderateScale(50),
  },
  optionbuttontext: {
    fontFamily: 'Geologica-Medium',
    fontSize: moderateScale(16),
    marginLeft: 6,
    color: 'black',
  },
  

  contractorname: {
    padding: moderateScale(15),
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderRadius: moderateScale(10),
  },
  contractnametextone: {
    fontFamily: 'Geologica-Bold',
    fontSize: 15,
    color: 'black',
    fontWeight: '500',
  },
  contractnametexttwo: {
    fontFamily: 'Geologica-Medium',
    fontSize: 12,
    color: '#B6B6B6',
  },
  marklocation: {
    backgroundColor: 'white',
    marginTop: 10,
    borderRadius: 10,
    padding: moderateScale(15),
  },
  marklocationtext: {
    fontSize: moderateScale(15),
    fontFamily: 'Geologica-Bold',
    color: 'black',
    paddingBottom: verticalScale(15),
  },
  imagecontainer: {
    alignItems: 'center',
    justifyContent: 'center',
    objectFit: 'cover',
    borderWidth: 0.2,
    borderRadius: moderateScale(10),
    paddingVertical: verticalScale(10),
  },
  Remark: {
    padding: moderateScale(15),
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderRadius: moderateScale(10),
    marginTop: 20,
  },
  Remarkinputwrapper: {
    borderWidth: 1.5,
    marginTop: verticalScale(10),
    borderRadius: 10,
    borderStyle: 'dashed',
    borderColor: 'orange',
  },
  Remarktext: {
    fontSize: 15,
    fontFamily: 'Geologica-Bold',
    color: 'black',
  },
  textstyle: {
    padding: moderateScale(10),
    fontFamily: 'Geologica-Medium',
  },
  AmountView: {
    paddingVertical: verticalScale(10),
    borderRadius: moderateScale(10),
    marginTop: 10,
  },
  boxodd: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: moderateScale(10),
    elevation: 2,
    marginBottom:verticalScale(12)
  },

  oddboxtext: {
    fontFamily: 'Geologica-SemiBold',
    color: 'black',
    paddingLeft: 5,
    marginBottom: 10,
    fontSize: moderateScale(15),
  },
  boxdropdown: {
    overflow: 'hidden',
    borderRadius: 8,
    height: 50,
    backgroundColor: '#f4f6f9',
    overflow: 'idden',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: horizontalScale(10),
  },
  boxdropdown2: {
    overflow: 'hidden',
    borderRadius: 8,
    height: 50,
    backgroundColor: '#f4f6f9',
    overflow: 'hidden',
    justifyContent: 'center',
  },
  boxeven: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: moderateScale(10),
    elevation: 2,
    marginBottom:verticalScale(12)

  },
  inputbox: {
    paddingLeft: 10,
    fontFamily: 'Geologica-Medium',
  },
  profilebuttons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  editbutton: {
    paddingVertical: verticalScale(5),
    borderRadius: moderateScale(20),
    width: horizontalScale(140),
    backgroundColor: 'black',
    alignItems: 'center',
  },
  editbuttontext: {
    fontFamily: 'Geologica-Medium',
    fontSize: moderateScale(15),
    color: 'white',
  },
  switchbutton: {
    paddingVertical: verticalScale(5),
    borderRadius: moderateScale(20),
    width: horizontalScale(140),
    backgroundColor: '#ffba4d',
    alignItems: 'center',
  },
});
