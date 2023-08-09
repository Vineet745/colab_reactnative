import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../assets/Dimension';

export default toolcardstyle = StyleSheet.create({
  cardcontainer: {
    height: verticalScale(140),
    paddingLeft: horizontalScale(20),
    flexDirection: 'row',
  },
  maincard: {
    width: horizontalScale(164),
    height: verticalScale(135),
    borderRadius: moderateScale(9),
    backgroundColor: 'white',
    padding: moderateScale(15),
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginRight: horizontalScale(9),
    elevation:3,
    shadowOpacity:0.22,
    shadowRadius:1
  },
  text: {
    fontSize: moderateScale(15),
    color: '#202A44',
    fontWeight: '600',
    fontFamily:"Geologica-SemiBold"
  },
  buttongroup:{
    width:horizontalScale(140),
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
 },

  redbutton:{
    width: horizontalScale(55.8),
    height: verticalScale(21),
    backgroundColor: '#fc3f3f',
    borderRadius: moderateScale(30),
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: horizontalScale(55.8),
    height: verticalScale(21),
    backgroundColor: '#ffba4d',
    borderRadius: moderateScale(30),
    alignItems: 'center',
    justifyContent: 'center',
  },
  
 
  buttontext: {
    color: 'white',
    fontWeight: '600',
    fontFamily:"Geologica-Medium"

  },
});
