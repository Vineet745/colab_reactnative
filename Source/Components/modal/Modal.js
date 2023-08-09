import React from 'react';
import { Text, View, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import {useNavigation} from '@react-navigation/native';
import modalstyle from './modalstyle';

function ModalTester({visible, onClose}) {
  const {navigate} = useNavigation();

  return (
    <Modal
      coverScreen={false}
      backdropColor="transparent"
      isVisible={visible}
      deviceHeight={45}>
      <View
        style={modalstyle.modalmain}>
        <TouchableOpacity
          onPress={() => navigate('addstack', {screen: 'Snag'},onClose())}
          style={modalstyle.modalnavigatebuttons}>
          <Text
            style={{
              fontFamily: 'Geologica-Medium',
              fontSize: 15,
              color: 'white',
            }}>
            Snag
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigate('addstack', {screen: 'De-Snag'},onClose())}
          style={modalstyle.modalnavigatebuttons}>
          <Text
            style={{
              fontFamily: 'Geologica-Medium',
              fontSize: 15,
              color: 'white',
            }}>
            De-Snag
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigate('addstack', {screen: 'New-progress'},onClose())}
          style={modalstyle.modalnavigatebuttons}>
          <Text
            style={{
              fontFamily: 'Geologica-Medium',
              fontSize: 15,
              color: 'white',
            }}>
            New progress
          </Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

export default ModalTester;
