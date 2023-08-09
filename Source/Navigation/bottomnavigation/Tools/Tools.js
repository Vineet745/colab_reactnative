import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import Topnav from '../../../Components/Topnav'
import Userdets from '../../../Components/Userdets'
import Toolstyle from './toolsstyle'
import { verticalScale } from '../../../assets/Dimension'

const Tools = () => {
  return (
    <View style={{flex:1}}>
      {/* Imported Component */}
      <Topnav/>
      <View style={Toolstyle.container}>

        {/* Imported Component */}

        <ScrollView style={Toolstyle.Toolcontainer} contentContainerStyle={{paddingBottom:verticalScale(30)}}>
        <Userdets />
          <Text style={Toolstyle.Toolheader}>My Tools</Text>
          <View style={Toolstyle.listitem}>
            <View style={Toolstyle.listleftcontainer}>
              <Image
                source={require('../../../assets/Images/Task-image-1.png')}
              />
              <Text style={Toolstyle.listtitle}>View DPR</Text>
            </View>
            
          </View>
          <View style={Toolstyle.listitem}>
            <View style={Toolstyle.listleftcontainer}>
              <Image
                source={require('../../../assets/Images/Task-image-2.png')}
              />
              <Text style={Toolstyle.listtitle}>View Stock Consumption</Text>
            </View>
            
          </View>
          <View style={Toolstyle.listitem}>
            <View style={Toolstyle.listleftcontainer}>
              <Image
                source={require('../../../assets/Images/Task-image-3.png')}
              />
              <Text style={Toolstyle.listtitle}>View Labour Trend</Text>
            </View>
            
          </View>
          <View style={Toolstyle.listitem}>
            <View style={Toolstyle.listleftcontainer}>
              <Image
                source={require('../../../assets/Images/Task-image-4.png')}
              />
              <Text style={Toolstyle.listtitle}>View Resources Requests</Text>
            </View>
            
          </View>
          <View style={Toolstyle.listitem}>
            <View style={Toolstyle.listleftcontainer}>
              <Image
                source={require('../../../assets/Images/Task-image-3.png')}
              />
              <Text style={Toolstyle.listtitle}>View Directory</Text>
            </View>
            
          </View>
        </ScrollView>
      </View>
    </View>
  )
}

export default Tools