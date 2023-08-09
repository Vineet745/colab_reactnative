import React,{useCallback, useState} from 'react';
import { Text, View, TouchableOpacity,FlatList,ScrollView,Image} from 'react-native';
import Modal from 'react-native-modal';
import bottomstyle from '../bottomsheet/bottomstylesheet'
import Otherbottom from './Otherbottomsheet';
import { useDispatch, useSelector } from 'react-redux';
import { selectlocation } from '../../redux/slice/locationslice';
import { modal2value, modalvalue } from '../../redux/slice/modalslice';


function BottomTester() {
  const {modalvisible}  = useSelector(state=>state.modal)
  console.log("modalvisible",modalvisible)
  const dispatch = useDispatch()
  const [towersheet, settowersheet] = useState(false)


// Function for close 1st bottomsheet
  const closefunc = ()=>{
    dispatch(modalvalue(false))
  }

  const othertoggle =(title)=>{
   settowersheet(!towersheet)
   dispatch(modal2value(!towersheet))
   dispatch(selectlocation(title))
  }



  const data = [
    {
      title: 'Tower 1',
    },
    {
      title: 'Tower 2',
    },
    {
      title: 'Tower 3',
    },
    {
      title: 'Tower 4',
    },

    // Add more items as needed
  ];




  return (
    <Modal style={{width:"100%",height:"100%",marginLeft:0,marginBottom:0,zIndex:999,}}
      coverScreen={false}
      isVisible={modalvisible}
      onSwipeComplete={closefunc}
      swipeDirection={['down']}
      
      >
      <View style={bottomstyle.modalmain}>
        <Text style={bottomstyle.listtext}>Select Location</Text>
        
        {data.map((item,index)=>{
          return(
            <TouchableOpacity  key={index} onPress={()=>othertoggle(item.title)}
              style={bottomstyle.touchablelist} >
              <Text style={bottomstyle.touchabletext}>{item.title}</Text>
              <Image source={require('../../assets/Images/Dropdown.png')}/>
            </TouchableOpacity>
          )
        })}
      </View>
      <Otherbottom />
    </Modal>
  );
}

export default BottomTester;
