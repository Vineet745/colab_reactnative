import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../assets/Dimension';
import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window').width;

export default bottomstyle = StyleSheet.create({
  modalmain: {
    backgroundColor: 'white',
    position: 'absolute',
    bottom:0,
    padding: moderateScale(15),
    width: '100%',
    zIndex: -999,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 6,
    borderTopWidth:0.5

  },
  listtext:{
     fontFamily:"Geologica-Bold",
     color:"black",
     fontSize:moderateScale(20),
     paddingVertical:verticalScale(10)
  },
  modalnavigatebuttons: {
    borderWidth: 1,
    width: 140,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    paddingVertical: 6,
    backgroundColor: 'black',
    marginBottom: 5,
  },
  
  touchablelist:{
    paddingVertical:verticalScale(10),
    paddingHorizontal:horizontalScale(15),
    borderRadius:moderateScale(10),
    marginBottom:verticalScale(5),
    backgroundColor:"#f6f8fb",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
  },
  touchabletext:{
    fontFamily:"Geologica-Medium",
    color:"black",
    fontSize:16,
  },
  collapsibleView:{
  width:horizontalScale(300),
  backgroundColor:"white",
  alignSelf:"center",
  elevation:2
  },
  icontextcontainer:{
    flexDirection:"row-reverse",
    alignItems:"center",
    justifyContent:"space-between",
    width:horizontalScale(70)
  }
});
