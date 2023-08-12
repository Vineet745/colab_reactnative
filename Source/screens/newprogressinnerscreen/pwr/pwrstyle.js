import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../assets/Dimension';

const {StyleSheet} = require('react-native');

export default pwrstyle = StyleSheet.create({
  pwrmain: {
    marginTop: verticalScale(12),
    overflow: 'hidden',
    borderWidth: 1,
  },
  pwrcompanyname: {
    paddingHorizontal: horizontalScale(12),
    paddingVertical: verticalScale(10),
    backgroundColor: '#202a44',
  },
  pwrcompanynametext: {
    fontSize: 15,
    fontFamily: 'Geologica-Medium',
    color: 'white',
  },

  cameracontainer: {
    paddingVertical: verticalScale(15),
    paddingHorizontal: horizontalScale(15),
    marginVertical: verticalScale(15),
    backgroundColor: 'white',
    borderRadius: moderateScale(10),
    elevation:3,
    flexDirection:"row",
    justifyContent:"space-between"

  },
});
