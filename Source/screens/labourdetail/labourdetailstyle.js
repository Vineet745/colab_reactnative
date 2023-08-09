import {StyleSheet} from 'react-native';
import {horizontalScale, moderateScale, verticalScale} from '../../assets/Dimension';

export default labourdetailstyle = StyleSheet.create({
  labourcontainermain: {
    height: verticalScale(70),
    flexDirection:"column",
    justifyContent:"space-between",
    overflow:"hidden",
    paddingHorizontal:horizontalScale(1),
    marginBottom:verticalScale(15)
  },
  labourname: {
    height: 30,
    backgroundColor: '#f6f8fb',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingHorizontal: horizontalScale(12),
    paddingVertical: verticalScale(3),
  },
  labournametext: {
    fontFamily: 'Geologica-Regular',
    color: 'black',
  },
  labourdets: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // borderWidth:1,

  },
  labourdetschild: {
    borderRadius:moderateScale(5),
    paddingVertical:verticalScale(1),
    paddingHorizontal:horizontalScale(12),
    backgroundColor:"#f6f8fb",
    alignItems:"center",
    justifyContent:"center"
  },
  labourdetschildtextone:{
    fontFamily:"Geologica-Medium",
    fontSize:12,
    color:"#787e8d"
  },
  labourdetschildtexttwo:{
    fontFamily:"Geologica-Bold",
    fontSize:14,
    color:"black"
  }
});
