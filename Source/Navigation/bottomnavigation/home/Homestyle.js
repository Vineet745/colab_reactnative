import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../assets/Dimension';

export default Homestyle = StyleSheet.create({
  // Top Nav

  topnav: {
    width: '100%',
    height: verticalScale(50),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    width: horizontalScale(375),
  },
  topnavchild: {
    width: horizontalScale(345),
    height: verticalScale(30),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  // Userdets Details
  Userinfo: {
    width: horizontalScale(340),
    alignSelf: 'center',
    height: verticalScale(60),
    marginTop: verticalScale(10),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  usertextone: {
    fontSize: moderateScale(24),
    color: '#202A44',
    fontFamily: 'Geologica-ExtraBold',
    fontWeight: '600',
  },
  usertexttwo: {
    color: '#7E7E7E',
    fontSize: moderateScale(15),
    fontFamily: 'Geologica-Medium',
  },
  userlogo: {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: '#ffba4d',
    alignItems: 'center',
    justifyContent: 'center',
  },

  // HomeDesign

  homescroll: {
    flex: 1,
  },
  toolsview: {
    height: verticalScale(190),
    paddingVertical: 5,
    marginVertical: verticalScale(8),
  },
  toptoolview: {
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: verticalScale(10),
  },
  toptoolbutton: {
    width: horizontalScale(100),
    backgroundColor: 'black',
    padding: moderateScale(8),
    borderRadius: moderateScale(30),
  },
  toptoolbuttontext: {
    color: '#ffffff',
    textAlign: 'center',
    fontFamily: 'Geologica-Medium',
    fontSize: moderateScale(12),
  },
  toptoolviewtext: {
    color: '#202A44',
    fontSize: moderateScale(15),
    fontWeight: '500',
    fontFamily: 'Geologica-Bold',
  },
  Workcontainer: {
    alignSelf: 'center',
    borderRadius: moderateScale(12),
    backgroundColor: '#ffffff',
    paddingVertical: verticalScale(7),
    paddingHorizontal:horizontalScale(14),
    marginBottom: verticalScale(10),
    elevation: 1,
  },
  Workcontainerinner: {
    borderRadius: moderateScale(10),
  },
  Workcontainerheading: {
    fontSize: moderateScale(15),
    fontFamily: 'Geologica-ExtraBold',
    color: 'black',
  },
  pointscontainer: {
    width: moderateScale(275),
    height: verticalScale(30),
    marginTop: verticalScale(10),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  PRW: {
    flexDirection: 'row',
    height: verticalScale(30),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  prwcircle: {
    width: 12,
    height: 12,
    borderRadius: 50,
    backgroundColor: '#007ec7',
    marginRight: 5,
  },
  Labour: {
    flexDirection: 'row',
    height: verticalScale(30),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  Labourcircle: {
    width: 12,
    height: 12,
    borderRadius: 50,
    backgroundColor: '#ffba4d',
    marginRight: 5,
  },
  Miscellaneous: {
    flexDirection: 'row',
    height: verticalScale(30),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  Miscellaneouscircle: {
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
    fontFamily: 'Geologica-Medium',
  },
  divisionview: {
    width: horizontalScale(310),
    height: verticalScale(21),
    marginTop: verticalScale(10),
    flexDirection: 'row',
    borderRadius: moderateScale(30),
    overflow: 'hidden',
    marginBottom: verticalScale(16),
  },
  divisionviewone: {
    width: horizontalScale(138),
    backgroundColor: '#ffba4d',
    alignItems: 'center',
    justifyContent: 'center',
  },
  divisionviewtwo: {
    width: horizontalScale(85),
    backgroundColor: '#007ec7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  divisionviewthree: {
    width: horizontalScale(85),
    backgroundColor: '#202a44',
    alignItems: 'center',
    justifyContent: 'center',
  },
  divisiontext: {
    color: 'white',
    fontSize: moderateScale(12),
    fontFamily: 'Geologica-Medium',
  },
  Workdetails: {
    width: horizontalScale(310),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: verticalScale(18),
  },

  amountdetailtextone: {
    fontSize: moderateScale(15),
    color: '#202A44',
    marginBottom: horizontalScale(2),
    fontFamily: 'Geologica-Bold',
    fontWeight: '600',
  },
  amountdetailtexttwo: {
    color: '#8E8E8E',
    fontWeight: '400',
    fontSize: moderateScale(12),
    fontFamily: 'Geologica-Medium',
  },
  viewbutton: {
    width: horizontalScale(90),
    height: verticalScale(30),
    backgroundColor: 'black',
    alignSelf: 'center',
    borderRadius: moderateScale(30),
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewbuttontext: {
    color: 'white',
    fontSize: moderateScale(12),
    fontWeight: '400',
    fontFamily: 'Geologica-Medium',
  },

  // Summarycontainer Design

  summarycontainer: {
    width: horizontalScale(338),
    height: verticalScale(251),
    alignSelf: 'center',
    borderRadius: moderateScale(12),
    backgroundColor: '#ffffff',
    padding: moderateScale(10),
    marginBottom: verticalScale(10),
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 1,
  },
  summarycontainerinner: {
    width: horizontalScale(310),
    height: verticalScale(220),
    borderRadius: moderateScale(5),
  },
  workdiv1: {
    height: verticalScale(40),
    marginTop: verticalScale(12),
    borderRadius: moderateScale(5),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  workdiv2: {
    height: verticalScale(40),
    marginTop: verticalScale(8),
    borderRadius: moderateScale(5),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  Uppertext: {
    fontSize: moderateScale(14),
    fontWeight: '500',
    fontFamily: 'Geologica-SemiBold',
    color: '#202A44',
  },
  bottomtext: {
    fontSize: moderateScale(10),
    color: '#8E8E8E',
    fontWeight: '400',
    fontFamily: 'Geologica-Medium',
  },
  bottomsummary: {
    borderTopWidth: 1,
    marginTop: verticalScale(5),
    height: verticalScale(86),
    borderColor: '#DEDEDE',
  },
  progressview: {
    marginVertical: verticalScale(15),
    borderRadius: moderateScale(30),
    position: 'relative',
  },
  progressbar: {
    height: verticalScale(20),
    borderRadius: moderateScale(30),
    overflow: 'hidden',
    flexDirection: 'row',
  },
  progressleft: {
    width: verticalScale(130),
    backgroundColor: '#fbb74c',
    height: verticalScale(20),
  },
  progressright: {
    width: verticalScale(150),
    backgroundColor: '#e1c59a',
    height: verticalScale(20),
  },
  progressline: {
    width: verticalScale(200),
    borderWidth: 1,
    position: 'absolute',
    top: verticalScale(10),
  },
  dayscount: {
    width: horizontalScale(80),
    backgroundColor: '#f4f6f9',
    borderRadius: moderateScale(10),
    padding: moderateScale(5),
  },
  daystext1: {
    fontSize: verticalScale(13),
    color: 'black',
    fontFamily: 'Geologica-Bold',
    letterSpacing: 1,
    paddingLeft: horizontalScale(5),
  },
  daystext2: {
    fontSize: verticalScale(10),
    color: '#7E7E7E',
    fontFamily: 'Geologica-Medium',
    paddingLeft: horizontalScale(5),
  },

  // Hindrance Code
  hindrancecontainer: {
    width: horizontalScale(338),
    alignSelf: 'center',
    borderRadius: moderateScale(12),
    backgroundColor: '#ffffff',
    padding: moderateScale(5),
    marginBottom: verticalScale(10),
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 1,
  },
  hindranceinnercontainer: {
    borderRadius: moderateScale(5),
  },
  hindrancetext: {
    fontFamily: 'Geologica-Bold',
    fontSize: moderateScale(15),
    color: 'black',
    marginLeft: horizontalScale(10),
    marginTop: verticalScale(5),
  },
  hindrancecardsmain: {
    marginTop: verticalScale(15),
    paddingVertical: verticalScale(10),
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },

  hindrancecard: {
    width: horizontalScale(99.8),
    height: verticalScale(65),
    borderRadius: moderateScale(10),
    overflow: 'hidden',
    margin: moderateScale(4.5),
  },
  cardstatus: {
    height: verticalScale(43),
    backgroundColor: '#202a44',
    padding: moderateScale(5),
    paddingLeft: horizontalScale(8),
  },
  cardstatustextone: {
    color: 'white',
    fontFamily: 'Geologica-Medium',
    fontSize: moderateScale(14),
  },
  cardstatustexttwo: {
    color: 'white',
    fontFamily: 'Geologica-Medium',
    fontSize: moderateScale(10),
  },
  daysstatus: {
    flexDirection: 'row',
    paddingLeft: horizontalScale(5),
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#f6f8fb',
    elevation: 3,
  },
  daystextone: {
    fontFamily: 'Geologica-Medium',
    paddingLeft: horizontalScale(5),
  },
  daystexttwo: {
    fontFamily: 'Geologica-Medium',
    paddingLeft: horizontalScale(5),
  },

  // Stack Container
  progresscontainer: {
    width: horizontalScale(338),
    height: verticalScale(206),
    alignSelf: 'center',
    borderRadius: moderateScale(12),
    backgroundColor: '#ffffff',
    padding: moderateScale(10),
    marginBottom: verticalScale(10),
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 1,
  },
  progresscontainerinner: {
    height: verticalScale(200),
    width: horizontalScale(320),
    borderRadius: moderateScale(10),
  },
  snagchart: {
    width: horizontalScale(338),
    height: verticalScale(452),
    alignSelf: 'center',
    borderRadius: moderateScale(12),
    backgroundColor: '#ffffff',
    padding: moderateScale(10),
    marginBottom: verticalScale(10),
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 1,
  },

  // Work summary

  worksummarycontainer: {
    width: horizontalScale(338),
    height: verticalScale(340),
    alignSelf: 'center',
    borderRadius: moderateScale(12),
    backgroundColor: '#ffffff',
    padding: moderateScale(10),
    marginBottom: verticalScale(10),
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 1,
  },
  worksummarycontainerinner: {
    width: horizontalScale(310),
    borderRadius: moderateScale(5),
  },

  worksummarytopcontainer: {
    borderRadius: moderateScale(10),
  },
  worksummarybottomcontainer: {
    borderRadius: moderateScale(5),
    borderWidth:1,
  },

  // Inspection code

  inspectioncontainer: {
    width: horizontalScale(338),
    height: verticalScale(190),
    alignSelf: 'center',
    borderRadius: moderateScale(12),
    backgroundColor: '#ffffff',
    padding: moderateScale(5),
    marginBottom: verticalScale(10),
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 1,
    padding: moderateScale(8),
  },
  inspectioninnercontainer: {
    borderRadius: moderateScale(5),
    width: '100%',
  },
  inspectionmaintext: {
    padding: verticalScale(5),
  },
  inspectionsummary: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: moderateScale(5),
  },

  inspectiondetail: {
    width: horizontalScale(100),
    height: verticalScale(50),
    padding: moderateScale(5),
    fontFamily: 'Geologica-Medium',
  },
  inspectiondetailtextone: {
    fontFamily: 'Geologica-Bold',
    fontSize: 14,
    color: 'black',
  },
  inspectiondetailtexttwo: {
    fontFamily: 'Geologica-Medium',
    fontSize: 10,
    color: '#8E8E8E',
  },

  // {Progress count summary}

  progresscountsummary: {
    width: horizontalScale(338),
    height: verticalScale(360),
    alignSelf: 'center',
    borderRadius: moderateScale(12),
    backgroundColor: '#ffffff',
    padding: moderateScale(5),
    marginBottom: verticalScale(10),
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 1,
    padding: moderateScale(3),
  },
  progressinnercountsummary: {
    borderRadius: moderateScale(5),
    width: '100%',
    height: '100%',
  },
  progresscountmaintext: {
    padding: verticalScale(5),
    fontFamily: '',
  },

  progresslowerView: {
    height: verticalScale(40),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: horizontalScale(6),
  },
  progresslowerbutton: {
    width: horizontalScale(88),
    borderRadius: moderateScale(20),
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: verticalScale(5),
    backgroundColor: '#202a44',
  },
  progressbuttontext: {
    color: 'white',
    fontFamily: 'Geologica-Medium',
    fontSize: 10,
  },
});
