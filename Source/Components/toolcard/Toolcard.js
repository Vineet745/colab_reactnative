import {View, Text, Image, ScrollView,TouchableOpacity} from 'react-native';
import React from 'react';
import toolcardstyle from './toolcardstyle';
import { useNavigation } from '@react-navigation/native';

const Toolcard = () => {
  const {navigate} = useNavigation()
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View style={toolcardstyle.cardcontainer}>
        <TouchableOpacity activeOpacity={1} onPress={()=>navigate('homestack', {screen: 'Labour Data'})}>
        <View style={toolcardstyle.maincard}>
          <Image source={require('../../assets/Images/card-1.png')} />
          <Text style={toolcardstyle.text}>Labour Data</Text>
          <View style={toolcardstyle.button}>
            <Text style={toolcardstyle.buttontext}>100</Text>
          </View>
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigate('homestack', {screen: 'Progressdata'})}>
        <View style={toolcardstyle.maincard}>
          <Image source={require('../../assets/Images/card-2.png')} />
          <Text style={toolcardstyle.text}>Site Progress</Text>
          <View style={toolcardstyle.button}>
            <Text style={toolcardstyle.buttontext}>100</Text>
          </View>
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigate('homestack', {screen: 'Quality Control'})}>
        <View style={toolcardstyle.maincard}>
          <Image source={require('../../assets/Images/card-3.png')} />
          <Text style={toolcardstyle.text}>Quality Checklist</Text>
          <View style={toolcardstyle.buttongroup}>
            <View style={toolcardstyle.redbutton}>
              <Text style={toolcardstyle.buttontext}>150</Text>
            </View>
            <View style={toolcardstyle.button}>
              <Text style={toolcardstyle.buttontext}>150</Text>
            </View>
          </View>
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={toolcardstyle.maincard}>
          <Image source={require('../../assets/Images/card-4.png')} />
          <Text style={toolcardstyle.text}>Snag</Text>
          <View style={toolcardstyle.buttongroup}>
            <View style={toolcardstyle.redbutton}>
              <Text style={toolcardstyle.buttontext}>150</Text>
            </View>
            <View style={toolcardstyle.button}>
              <Text style={toolcardstyle.buttontext}>150</Text>
            </View>
          </View>
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigate('homestack', {screen: 'De-Snags'})}>
        <View style={toolcardstyle.maincard}>
          <Image source={require('../../assets/Images/card-5.png')} />
          <Text style={toolcardstyle.text}>De-Snag</Text>
          <View style={toolcardstyle.buttongroup}>
            <View style={toolcardstyle.redbutton}>
              <Text style={toolcardstyle.buttontext}>150</Text>
            </View>
            <View style={toolcardstyle.button}>
              <Text style={toolcardstyle.buttontext}>150</Text>
            </View>
          </View>
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigate('homestack',{screen:'Area of Concern'})}>
        <View style={toolcardstyle.maincard}>
          <Image source={require('../../assets/Images/card-6.png')} />
          <Text style={toolcardstyle.text}>Area of Concern</Text>
          <View style={toolcardstyle.button}>
            <Text style={toolcardstyle.buttontext}>150</Text>
          </View>
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={toolcardstyle.maincard}>
          <Image source={require('../../assets/Images/card-7.png')} />
          <Text style={toolcardstyle.text}>Drawing Master</Text>
          <View style={toolcardstyle.button}>
            <Text style={toolcardstyle.buttontext}>150</Text>
          </View>
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigate('homestack', {screen: 'Hindrance'})}>
        <View style={toolcardstyle.maincard}>
          <Image source={require('../../assets/Images/card-8.png')} />
          <Text style={toolcardstyle.text}>Hindrance</Text>
          <View style={toolcardstyle.button}>
            <Text style={toolcardstyle.buttontext}>150</Text>
          </View>
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={toolcardstyle.maincard}>
          <Image source={require('../../assets/Images/card-9.png')} />
          <Text style={toolcardstyle.text}>360 Image</Text>
          <View style={toolcardstyle.button}>
            <Text style={toolcardstyle.buttontext}>150</Text>
          </View>
        </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Toolcard;
