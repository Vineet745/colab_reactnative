import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../assets/Dimension';

export default miscstyle = StyleSheet.create({
  miscmain: {
    marginTop: verticalScale(15),
    borderRadius: moderateScale(15),
    overflow: 'hidden',
  },
  companydetailholder: {
    backgroundColor: '#202a44',
    paddingVertical: verticalScale(10),
    paddingHorizontal: horizontalScale(7),
  },
  companyscrollablename: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: horizontalScale(6),
  },
  
  addbuttonholder: {
    backgroundColor: '#FFBA4D',
    alignItems: 'center',
    justifyContent: 'center',
    padding: moderateScale(10),
    borderRadius: moderateScale(20),
  },
  debitcontractordetail: {
    marginVertical: verticalScale(15),
    padding: moderateScale(12),
    backgroundColor:"white"
  },
  textcontainer: {
    paddingVertical: verticalScale(5),
    paddingHorizontal: horizontalScale(6),
  },
  cameracontainer: {
    paddingVertical: verticalScale(15),
    paddingHorizontal: horizontalScale(15),
    marginBottom: verticalScale(10),
    backgroundColor: 'white',
    borderRadius: moderateScale(10),
    elevation:3,
    flexDirection:"row",
    justifyContent:"space-between"

  },
});
