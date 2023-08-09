import {View, Text, ScrollView, Image} from 'react-native';
import React from 'react';
import Topnav from '../../../Components/Topnav';
import Userdets from '../../../Components/Userdets';
import Taskstyle from './Taskstyle';
import Progresschart from '../../../Components/graph/Progresschart';

const Task = () => {
  return (
    <View style={{flex: 1}}>
    {/* Imported Component */}
      <Topnav />
      <View style={Taskstyle.container}>

        {/* Imported Component */}

        <ScrollView style={Taskstyle.taskcontainer} contentContainerStyle={{paddingBottom:40}}>
        <Userdets />

        <View style={Taskstyle.contentholder}>
          <Text style={Taskstyle.taskheader}>My Task</Text>
          <View style={Taskstyle.chartcontainer}>
          </View>
          <View style={Taskstyle.listitem}>
            <View style={Taskstyle.listleftcontainer}>
              <Image
                source={require('../../../assets/Images/Task-image-1.png')}
              />
              <Text style={Taskstyle.listtitle}>Activity Tasks</Text>
            </View>
            <View style={Taskstyle.counter}>
              <Text style={Taskstyle.countertext}>10</Text>
            </View>
          </View>
          <View style={Taskstyle.listitem}>
            <View style={Taskstyle.listleftcontainer}>
              <Image
                source={require('../../../assets/Images/Task-image-2.png')}
              />
              <Text style={Taskstyle.listtitle}>Non Construction Tasks</Text>
            </View>
            <View style={Taskstyle.counteryellow}>
              <Text style={Taskstyle.countertext}>13</Text>
            </View>
          </View>
          <View style={Taskstyle.listitem}>
            <View style={Taskstyle.listleftcontainer}>
              <Image
                source={require('../../../assets/Images/Task-image-3.png')}
              />
              <Text style={Taskstyle.listtitle}>Design Related Tasks</Text>
            </View>
            <View style={Taskstyle.counter}>
              <Text style={Taskstyle.countertext}>9</Text>
            </View>
          </View>
          <View style={Taskstyle.listitem}>
            <View style={Taskstyle.listleftcontainer}>
              <Image
                source={require('../../../assets/Images/Task-image-4.png')}
              />
              <Text style={Taskstyle.listtitle}>Laisoning Tasks</Text>
            </View>
            <View style={Taskstyle.counteryellow}>
              <Text style={Taskstyle.countertext}>0</Text>
            </View>
          </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Task;
