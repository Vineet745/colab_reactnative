import {View, Text} from 'react-native';
import React from 'react';
import snagchartstyle from './snagchartstyle';
// import { StackedBarChart } from 'react-native-svg-charts'
import { BarChart } from "react-native-gifted-charts";
const Snagchart = () => {

  const stackData = [
    {
      stacks: [
        {value: 0.5, color: '#ffba4d'},
        {value: 2.3, color: '#007ec7'},
      ],
      label: 'Vaibhav',
    },
    {
      stacks: [
        {value: 1.6, color: '#EC334D'},
        
      ],
      label: 'Kuldeep',
    },
    {
      stacks: [
        {value: 0.9, color: '#EC334D'},
        {value: 2.0, color: '#007EC7'},
      ],
      label: 'Nilesh',
    },
    {
      stacks: [
        {value: 0.7, color: '#007EC7'},
      ],
      label: 'Amit',
    },
    {
      stacks: [
        {value: 1.0, color: '#EC334D'},
        {value: 2.3, color: '#FFBA4D'},
      ],
      label: 'Kanan',
    },
  ];
  return (
    <View>
      <View>
        <Text style={snagchartstyle.snagmaintext}>Top 5 Assignee of Snags</Text>
      </View>
      <View style={snagchartstyle.upperview}>
        <View style={snagchartstyle.pointscontainer}>
          <View style={snagchartstyle.workmenship}>
            <View style={snagchartstyle.workmenshipcircle}></View>
            <Text style={snagchartstyle.pointstext}>Workmenship</Text>
          </View>
          <View style={snagchartstyle.workmanship}>
            <View style={snagchartstyle.workmanshipcircle}></View>
            <Text style={snagchartstyle.pointstext}>Workmanship</Text>
          </View>
          <View style={snagchartstyle.quality}>
            <View style={snagchartstyle.qualitycircle}></View>
            <Text style={snagchartstyle.pointstext}>Quality</Text>
          </View>
        </View>
        <View style={snagchartstyle.divisionview}>
          <View style={snagchartstyle.divisionviewone}>
            <Text style={snagchartstyle.divisiontext}>1</Text>
          </View>
          <View style={snagchartstyle.divisionviewtwo}>
            <Text style={snagchartstyle.divisiontext}>5</Text>
          </View>
          <View style={snagchartstyle.divisionviewthree}>
            <Text style={snagchartstyle.divisiontext}>3</Text>
          </View>
        </View>
      </View>
      <View style={snagchartstyle.middleview}>
        <View style={snagchartstyle.chartpointscontainer}>
          <View style={snagchartstyle.workmenship}>
            <View style={snagchartstyle.workmenshipcircle}></View>
            <Text style={snagchartstyle.pointstext}>Major</Text>
          </View>
          <View style={snagchartstyle.workmanship}>
            <View style={snagchartstyle.workmanshipcircle}></View>
            <Text style={snagchartstyle.pointstext}>Minor</Text>
          </View>
          <View style={snagchartstyle.quality}>
            <View style={snagchartstyle.criticalcircle}></View>
            <Text style={snagchartstyle.pointstext}>Critical</Text>
          </View>
        </View>
        <View style={{height:250,paddingLeft:30,paddingVertical:30}}>
        <BarChart
        style={{backgrounColor:"lightgreen"}}
        horizontal
        width={190}
            noOfSections={6}
            stackData={stackData}
            spacing={8}
            initialSpacing={0}
            showFractionalValues
            

            
            />
        </View>
      </View>
      <View style={snagchartstyle.lowerview}>
        <View style={snagchartstyle.statusbutton}>
          <Text style={snagchartstyle.statusbuttontext}>Open: 1</Text>
        </View>
        <View style={snagchartstyle.statusbutton}>
          <Text style={snagchartstyle.statusbuttontext}>Closed: 8</Text>
        </View>
        <View style={snagchartstyle.statusbutton}>
          <Text style={snagchartstyle.statusbuttontext}>Rejected: 0</Text>
        </View>
        <View style={snagchartstyle.statusbutton}>
          <Text style={snagchartstyle.statusbuttontext}>Critical: 3</Text>
        </View>
        <View style={snagchartstyle.statusbutton}>
          <Text style={snagchartstyle.statusbuttontext}>Major: 2</Text>
        </View>
        <View style={snagchartstyle.statusbutton}>
          <Text style={snagchartstyle.statusbuttontext}>Minor: 6</Text>
        </View>
      </View>
    </View>
  );
};

export default Snagchart;
