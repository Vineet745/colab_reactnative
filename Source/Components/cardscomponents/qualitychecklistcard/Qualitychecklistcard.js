import {View, Text} from 'react-native';
import React from 'react';
import {verticalScale} from '../../../assets/Dimension';
import qualitychecklistcardstyle from './qualitychecklistcardstyle';

const Qualitychecklistcard = () => {
  return (
    <View style={{marginBottom: verticalScale(15)}}>
      <View style={qualitychecklistcardstyle.desnagcard}>
        <View style={qualitychecklistcardstyle.workingareaview}>
          <Text style={qualitychecklistcardstyle.workingareatext}>
            Checklist Name
          </Text>
        </View>
        <View style={qualitychecklistcardstyle.Workingdetailcontainer}>
          <View style={qualitychecklistcardstyle.workingareadetail}>
            <View style={qualitychecklistcardstyle.workplace}>
              <Text style={{fontFamily: 'Geologica-SemiBold', color: 'black'}}>
                Tower A / Ground Floor /Unit 1
              </Text>
              <Text style={{fontFamily: 'Geologica-Medium'}}>Location</Text>
            </View>
            <View>
              <Text style={{fontFamily: 'Geologica-SemiBold', color: 'black'}}>
                Column Shuttering
              </Text>
              <Text style={{fontFamily: 'Geologica-Medium'}}>Activity</Text>
            </View>
          </View>
          <View style={qualitychecklistcardstyle.contractordetail}>
            <View>
              <Text style={{fontFamily: 'Geologica-SemiBold', color: 'black'}}>
                Irshad Khan COMP 3
              </Text>
              <Text style={{fontFamily: 'Geologica-Medium'}}>Contractor</Text>
            </View>
            <View style={qualitychecklistcardstyle.activitycontainer}>
              <Text style={{fontFamily: 'Geologica-SemiBold', color: 'black'}}>
                Activity Start
              </Text>
              <Text style={{fontFamily: 'Geologica-Medium'}}>Contractor</Text>
            </View>
          </View>
          <View style={qualitychecklistcardstyle.workdetails}>
            <View style={qualitychecklistcardstyle.startdatediv}>
              <Text style={qualitychecklistcardstyle.workdetailstextone}>
                9 June 2023
              </Text>
              <Text style={qualitychecklistcardstyle.workdetailstexttwo}>
                Working Completion Date
              </Text>
            </View>
            <View style={qualitychecklistcardstyle.centerdiv}>
              <Text style={qualitychecklistcardstyle.centerdivtext}>17</Text>
            </View>
            <View style={qualitychecklistcardstyle.enddatediv}>
              <Text style={qualitychecklistcardstyle.workdetailstextone}>
                20 June 2023
              </Text>
              <Text style={qualitychecklistcardstyle.workdetailstexttwo}>
                Close Date
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Qualitychecklistcard;
