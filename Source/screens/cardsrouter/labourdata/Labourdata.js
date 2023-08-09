import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import labourdatastyle from './labourdatastyle';
import Labourdetail from '../../labourdetail/Labourdetail';

const Labourdata = () => {
  // const navigation = useNavigation();

  // React.useLayoutEffect(() => {
  //   navigation.setOptions({
  //     tabBarVisible: false, // Hide the bottom navigation
  //   });
  // }, [navigation]);

  return (
    <ScrollView style={{flex:1}}>
    <View style={labourdatastyle.labourmain}>
      <View style={labourdatastyle.calendardiv}>
        <Text style={labourdatastyle.calendartext}>Date</Text>
      </View>

      <View style={labourdatastyle.labourholder}>
        <View style={labourdatastyle.contractorname}>
          <Text style={labourdatastyle.contractornametext}>Irshad khan-COMP 3</Text>
        </View>
        <View style={labourdatastyle.labourcontainer}>
        <Labourdetail />
        <Labourdetail />
        <Labourdetail />
        <Labourdetail />
        <Labourdetail />
        <Labourdetail />
        </View>
      </View>
      <View style={labourdatastyle.labourholder}>
        <View style={labourdatastyle.contractorname}>
          <Text style={labourdatastyle.contractornametext}>Irshad khan Comp 3</Text>
        </View>
        <View style={labourdatastyle.labourcontainer}>
        <Labourdetail />
        <Labourdetail />
        <Labourdetail />
        <Labourdetail />
       
        </View>
      </View>
      <View style={labourdatastyle.labourholder}>
        <View style={labourdatastyle.contractorname}>
          <Text style={labourdatastyle.contractornametext}>Irshad khan Comp 3</Text>
        </View>
        <View style={labourdatastyle.labourcontainer}>
        <Labourdetail />
        <Labourdetail />
        <Labourdetail />
        <Labourdetail />
        <Labourdetail />
        <Labourdetail />
        <Labourdetail />
       
        </View>
      </View>
    </View>
    </ScrollView>
  );
};

export default Labourdata;
