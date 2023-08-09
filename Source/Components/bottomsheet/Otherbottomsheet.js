import React, {useState} from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import Modal from 'react-native-modal';
import bottomstyle from '../bottomsheet/bottomstylesheet';
import Collapsible from 'react-native-collapsible';
import {useDispatch, useSelector} from 'react-redux';
import {selectlocation} from '../../redux/slice/locationslice';
import { modal2value } from '../../redux/slice/modalslice';

function Otherbottom() {
  // useSelector
  const dispatch = useDispatch();
  const {modal2Visible} = useSelector(state=>state.modal)
  const [activeSection, setActiveSection] = useState(null);


  // Switch Button for closing the 2nd button

  const switchbutton = ()=>{
    dispatch(modal2value(false))
}


  // Collapsible Accordion

  const toggleAccordion = (index, item, subItem) => {
    setActiveSection(activeSection === index ? null : index);
    if (item) dispatch(selectlocation(item));
    if (subItem) dispatch(selectlocation(subItem));
  };

  // Data Array

  const data = [
    {
      title: 'Gr Floor',
      sublabel: [
        {
          innerlabel: 'UR 1',
        },

        {innerlabel: 'UR 2'},
      ],
    },
    {
      title: '1st Floor',
      sublabel: [
        {
          innerlabel: 'UR 1',
        },

        {innerlabel: 'UR 2'},
      ],
    },
    {
      title: '2nd Floor',
      sublabel: [
        {
          innerlabel: 'UR 1',
        },

        {innerlabel: 'UR 2'},
      ],
    },
    {
      title: '3rd Floor',
      sublabel: [
        {
          innerlabel: 'UR 1',
        },

        {innerlabel: 'UR 2'},
      ],
    },

    // Add more items as needed
  ];

  return (
    <Modal
      style={{
        width: '100%',
        height: '100%',
        marginLeft: 0,
        marginBottom: 0,
        zIndex: 999,
      }}
      coverScreen={false}
      isVisible={modal2Visible}
      swipeDirection="down"
      onBackdropPress={switchbutton}
      backdropColor="transparent">
      <View style={bottomstyle.modalmain}>
        <Text style={bottomstyle.listtext}>Select Sub Location</Text>
        <TouchableOpacity
          onPress={switchbutton}
          style={{
            marginBottom: 10,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image source={require('../../assets/Images/backbutton.png')} />
          <Text style={[bottomstyle.touchabletext, {marginLeft: 10}]}>
            Tower 1
          </Text>
        </TouchableOpacity>
        {data.map((item, index) => {
          return (
            <View key={index}>
              <TouchableOpacity
                onPress={() => toggleAccordion(index, item.title)}
                style={bottomstyle.touchablelist}>
                <Text style={bottomstyle.touchabletext}>{item.title}</Text>
                <Image source={require('../../assets/Images/Dropdown.png')} />
              </TouchableOpacity>

              <Collapsible collapsed={activeSection !== index}>
                {item.sublabel.map((subItem, subIndex) => (
                  <View key={subIndex} style={bottomstyle.collapsibleView}>
                    <TouchableOpacity
                      onPress={() => toggleAccordion(index, subItem.innerlabel)}
                      style={[bottomstyle.touchablelist]}>
                      <View style={bottomstyle.icontextcontainer}>
                        <Text style={bottomstyle.touchabletext}>
                          {subItem.innerlabel}
                        </Text>
                        <Image
                          source={require('../../assets/Images/homeImg.png')}
                        />
                      </View>

                      <Image
                        source={require('../../assets/Images/rightarrow.png')}
                      />
                    </TouchableOpacity>
                  </View>
                ))}
              </Collapsible>
            </View>
          );
        })}
      </View>
    </Modal>
  );
}

export default Otherbottom;
