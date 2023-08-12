import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../assets/Dimension';

export default laboursupplystyle = StyleSheet.create({
  labourmain: {
    marginTop: verticalScale(15),
    borderRadius: moderateScale(15),
    overflow: 'hidden',
    elevation:4
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
  locationholder: {
    borderWidth: 1,
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
    backgroundColor:"white",
    borderRadius:moderateScale(10)
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
