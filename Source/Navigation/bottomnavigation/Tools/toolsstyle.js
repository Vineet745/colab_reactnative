import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../assets/Dimension';

export default Toolstyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f7fa',
  },
  Toolcontainer: {
    flex: 1,
    padding: horizontalScale(20),
  },
  Toolheader: {
    fontSize: moderateScale(15),
    color: '#202A44',
    fontWeight: '600',
    fontFamily:"Geologica-Medium"

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
    fontSize: moderateScale(13),
    fontWeight: '500',
    fontFamily:"Geologica-Medium"

  },
 
});
