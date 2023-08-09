import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../assets/Dimension';

export default Taskstyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f7fa',
  },
  taskcontainer: {
    flex: 1,
    padding: horizontalScale(17),
  },
  contentholder:{
    marginTop:verticalScale(20)
  },
  
  taskheader: {
    fontSize: moderateScale(15),
    color: '#202A44',
    fontWeight: '600',
    fontFamily:"Geologica-Bold",
  },
  chartcontainer: {
    width: horizontalScale(335),
    height: verticalScale(120),
    marginTop: verticalScale(15),
    borderRadius: moderateScale(10),
    backgroundColor: '#ffffff',
  },
  listitem: {
    width: horizontalScale(335),
    height: verticalScale(76),
    marginTop: verticalScale(15),
    backgroundColor: '#ffffff',
    borderRadius: moderateScale(10),
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  listleftcontainer: {
    width: horizontalScale(230),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  listtitle: {
    marginLeft: horizontalScale(15),
    color: '#202A44',
    fontSize: moderateScale(15),
    fontWeight: '500',
    fontFamily:"Geologica-SemiBold",
    letterSpacing:-0.5

  },
  counter: {
    backgroundColor: 'black',
    borderRadius: moderateScale(30),
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical:verticalScale(6),
    paddingHorizontal:horizontalScale(23)
  },
  countertext: {
    color: 'white',
    fontSize: moderateScale(12),
    fontFamily:"Geologica-Bold",

  },
  counteryellow: {
    width: 60,
    height: 30,
    backgroundColor: '#ffba4d',
    borderRadius: moderateScale(30),
    alignItems: 'center',
    justifyContent: 'center',
  }
});
