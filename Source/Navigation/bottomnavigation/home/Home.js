import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import Homestyle from './Homestyle';
import Userdets from '../../../Components/Userdets';
import Topnav from '../../../Components/Topnav';
import Toolcard from '../../../Components/toolcard/Toolcard';
import Progresschart from '../../../Components/graph/Progresschart';
import Snagchart from '../../../Components/graph/snagchart/Snagchart';
import Countsummary from '../../../Components/graph/countsummary.js/Countsummary';
import { moderateScale, verticalScale } from '../../../assets/Dimension';
import Summarychart from '../../../Components/graph/summarychart/Summarychart';

const Home = () => {
  return (
    <View style={{flex: 1}}>
      <Topnav />
      <ScrollView style={Homestyle.homescroll}>
        <Userdets />
        <View style={Homestyle.toolsview}>
          <View style={Homestyle.toptoolview}>
            <Text style={Homestyle.toptoolviewtext}>My Tools</Text>
            <TouchableOpacity style={Homestyle.toptoolbutton}>
              <Text style={Homestyle.toptoolbuttontext}>Show All</Text>
            </TouchableOpacity>
          </View>
          <Toolcard />
        </View>
        {/* Work Tab */}
        <View style={Homestyle.Workcontainer}>
          <View style={Homestyle.Workcontainerinner}>
            <Text style={Homestyle.Workcontainerheading}>
              Today's Work-in-Progress
            </Text>
            <View style={Homestyle.pointscontainer}>
              <View style={Homestyle.PRW}>
                <View style={Homestyle.prwcircle}></View>
                <Text style={Homestyle.pointstext}>PRW</Text>
              </View>
              <View style={Homestyle.Labour}>
                <View style={Homestyle.Labourcircle}></View>
                <Text style={Homestyle.pointstext}>Labour Supply</Text>
              </View>
              <View style={Homestyle.Miscellaneous}>
                <View style={Homestyle.Miscellaneouscircle}></View>
                <Text style={Homestyle.pointstext}>Miscellaneous</Text>
              </View>
            </View>
            <View style={Homestyle.divisionview}>
              <View style={Homestyle.divisionviewone}>
                <Text style={Homestyle.divisiontext}>45</Text>
              </View>
              <View style={Homestyle.divisionviewtwo}>
                <Text style={Homestyle.divisiontext}>27.5</Text>
              </View>
              <View style={Homestyle.divisionviewthree}>
                <Text style={Homestyle.divisiontext}>27.5</Text>
              </View>
            </View>
            <View style={Homestyle.Workdetails}>
              <View style={Homestyle.amountdetail}>
                <Text style={Homestyle.amountdetailtextone}>₹ 483779.56</Text>
                <Text style={Homestyle.amountdetailtexttwo}>
                  Planned Value of Work
                </Text>
              </View>
              <View style={Homestyle.workdetail}>
                <Text style={Homestyle.amountdetailtextone}>17 Labours</Text>
                <Text style={Homestyle.amountdetailtexttwo}>
                  Work Force Count
                </Text>
              </View>
            </View>
            <TouchableOpacity style={Homestyle.viewbutton}>
              <Text style={Homestyle.viewbuttontext}>View All</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* Summary Tab */}
        <View style={Homestyle.summarycontainer}>
          <View style={Homestyle.summarycontainerinner}>
            <Text style={Homestyle.Workcontainerheading}>Schedule Summary</Text>
            <View style={Homestyle.workdiv1}>
              <View style={Homestyle.workdivchild1}>
                <Text style={Homestyle.Uppertext}>02 Mar 2023</Text>
                <Text style={Homestyle.bottomtext}>Planned Start</Text>
              </View>
              <View style={Homestyle.workdivchild2}>
                <Text style={Homestyle.Uppertext}>11 Aug 2024</Text>
                <Text style={Homestyle.bottomtext}>Planned End</Text>
              </View>
            </View>
            <View style={Homestyle.workdiv2}>
              <View style={Homestyle.workdivchild1}>
                <Text style={Homestyle.Uppertext}>12 Mar 2023</Text>
                <Text style={Homestyle.bottomtext}>Actual Start</Text>
              </View>
              <View style={Homestyle.workdivchild2}>
                <Text style={Homestyle.Uppertext}>09 Aug 2024</Text>
                <Text style={Homestyle.bottomtext}>Projected End</Text>
              </View>
            </View>
            <View style={Homestyle.bottomsummary}>
              <View style={Homestyle.progressview}>
                <View style={Homestyle.progressbar}>
                  <View style={Homestyle.progressleft}></View>
                  <View style={Homestyle.progressright}></View>
                </View>
                <View style={Homestyle.progressline}></View>
              </View>
              <View style={Homestyle.dayscount}>
                <Text style={Homestyle.daystext1}>120</Text>
                <Text style={Homestyle.daystext2}>Total Days</Text>
              </View>
            </View>
          </View>
        </View>
        {/* Hindrance Tab */}
        <View style={Homestyle.hindrancecontainer}>
          <View style={Homestyle.hindranceinnercontainer}>
            <Text style={Homestyle.hindrancetext}>Total Hindrance : 180</Text>
            <View style={Homestyle.hindrancecardsmain}>
              <View style={Homestyle.hindrancecard}>
                <View style={Homestyle.cardstatus}>
                  <Text style={Homestyle.cardstatustextone}>1</Text>
                  <Text style={Homestyle.cardstatustexttwo}>Approval</Text>
                </View>
                <View style={Homestyle.daysstatus}>
                  <Text style={Homestyle.daystextone}>Days</Text>
                  <Text style={Homestyle.daystexttwo}>66</Text>
                </View>
              </View>
              <View style={Homestyle.hindrancecard}>
                <View style={Homestyle.cardstatus}>
                  <Text style={Homestyle.cardstatustextone}>12</Text>
                  <Text style={Homestyle.cardstatustexttwo}>
                    Material Issue
                  </Text>
                </View>
                <View style={Homestyle.daysstatus}>
                  <Text style={Homestyle.daystextone}>Days</Text>
                  <Text style={Homestyle.daystexttwo}>75</Text>
                </View>
              </View>
              <View style={Homestyle.hindrancecard}>
                <View style={Homestyle.cardstatus}>
                  <Text style={Homestyle.cardstatustextone}>3</Text>
                  <Text style={Homestyle.cardstatustexttwo}>Local Issue</Text>
                </View>
                <View style={Homestyle.daysstatus}>
                  <Text style={Homestyle.daystextone}>Days</Text>
                  <Text style={Homestyle.daystexttwo}>24</Text>
                </View>
              </View>
              <View style={Homestyle.hindrancecard}>
                <View style={Homestyle.cardstatus}>
                  <Text style={Homestyle.cardstatustextone}>2</Text>
                  <Text style={Homestyle.cardstatustexttwo}>Manpower</Text>
                </View>
                <View style={Homestyle.daysstatus}>
                  <Text style={Homestyle.daystextone}>Days</Text>
                  <Text style={Homestyle.daystexttwo}>14</Text>
                </View>
              </View>
              <View style={Homestyle.hindrancecard}>
                <View style={Homestyle.cardstatus}>
                  <Text style={Homestyle.cardstatustextone}>1</Text>
                  <Text style={Homestyle.cardstatustexttwo}>
                    Compliance Issue
                  </Text>
                </View>
                <View style={Homestyle.daysstatus}>
                  <Text style={Homestyle.daystextone}>Days</Text>
                  <Text style={Homestyle.daystexttwo}>1</Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* Progress Charts */}
        <View style={Homestyle.progresscontainer}>
          <View style={Homestyle.progresscontainerinner}>
            <Progresschart />
          </View>
        </View>




        {/* Work Summary */}
        <View style={Homestyle.worksummarycontainer}>
          <View style={Homestyle.worksummarycontainerinner}>
            <View style={Homestyle.worksummarytopcontainer}>
          <Text style={Homestyle.Workcontainerheading}>Work Summary</Text>
          <View style={Homestyle.workdiv1}>
              <View style={Homestyle.workdivchild1}>
                <Text style={Homestyle.Uppertext}>573.63</Text>
                <Text style={Homestyle.bottomtext}>Total Project Value</Text>
              </View>
              <View style={Homestyle.workdivchild2}>
                <Text style={Homestyle.Uppertext}>735.19</Text>
                <Text style={Homestyle.bottomtext}>Work Awarded</Text>
              </View>
            </View>
            <View style={Homestyle.workdiv2}>
              <View style={Homestyle.workdivchild1}>
                <Text style={Homestyle.Uppertext}>234.0</Text>
                <Text style={Homestyle.bottomtext}>PO Created</Text>
              </View>
              <View style={Homestyle.workdivchild2}>
                <Text style={Homestyle.Uppertext}>100</Text>
                <Text style={Homestyle.bottomtext}>Total Extra Work</Text>
              </View>
            </View>
            </View>
            <View style={Homestyle.worksummarybottomcontainer}>
            <Summarychart style={{borderwidth:1}}/>
            </View>
          </View>
        </View>
        {/* {Snag chart} */}
        <View style={Homestyle.snagchart}>
          <View style={Homestyle.snagchartinner}>
            <Snagchart />
          </View>
        </View>

        {/* {Inspection Summary} */}
        <View style={Homestyle.inspectioncontainer}>
          <View style={Homestyle.inspectioninnercontainer}>
            <View style={Homestyle.inspectionmaintext}>
              <Text
                style={{
                  fontFamily: 'Geologica-Bold',
                  color: 'black',
                  fontSize: 15,
                }}>
                Inspection Summary
              </Text>
            </View>
            <View style={Homestyle.inspectionsummary}>
            <View style={Homestyle.inspectiondetail}>
                <Text style={Homestyle.inspectiondetailtextone}>0</Text>
                <Text style={Homestyle.inspectiondetailtexttwo}>New Check Lists</Text>
              </View>
              <View style={Homestyle.inspectiondetail}>
                <Text style={[Homestyle.inspectiondetailtextone,{color:"red"}]}>0</Text>
                <Text style={Homestyle.inspectiondetailtexttwo}>Open Check Lists</Text>
              </View>
              <View style={Homestyle.inspectiondetail}>
                <Text style={Homestyle.inspectiondetailtextone}>0</Text>
                <Text style={Homestyle.inspectiondetailtexttwo}>Closed Check Lists</Text>
              </View>
              <View style={Homestyle.inspectiondetail}>
                <Text style={Homestyle.inspectiondetailtextone}>0</Text>
                <Text style={Homestyle.inspectiondetailtexttwo}>Total Force Closed</Text>
              </View>
              <View style={Homestyle.inspectiondetail}>
                <Text style={Homestyle.inspectiondetailtextone}>0</Text>
                <Text style={Homestyle.inspectiondetailtexttwo}>Reject Count</Text>
              </View>
              <View style={Homestyle.inspectiondetail}>
                <Text style={Homestyle.inspectiondetailtextone}>0</Text>
                <Text style={Homestyle.inspectiondetailtexttwo}>Average TAT</Text>
              </View>
              <View style={Homestyle.inspectiondetail}>
                <Text style={Homestyle.inspectiondetailtextone}>0</Text>
                <Text style={Homestyle.inspectiondetailtexttwo}>Total Triggered</Text>
              </View>
              <View style={Homestyle.inspectiondetail}>
                <Text style={[Homestyle.inspectiondetailtextone,{color:"#5fd054"}]}>0</Text>
                <Text style={Homestyle.inspectiondetailtexttwo}>Total Debit Mode</Text>
              </View>
              <View style={[Homestyle.inspectiondetail,{opacity:0}]}>
                <Text style={Homestyle.inspectiondetailtextone}>0</Text>
                <Text style={Homestyle.inspectiondetailtexttwo}>Total Debit Mode</Text>
              </View>
             
              
            </View>
          </View>
        </View>

        {/* {Progress Count Summary} */}

        <View style={Homestyle.progresscountsummary}>
          <View style={Homestyle.progressinnercountsummary}>
            <View style={Homestyle.progresscountmaintext}>
              <Text
                style={{
                  fontFamily: 'Geologica-Bold',
                  color: 'black',
                  fontSize:moderateScale(15),
                }}>
                Progress Count Summary
              </Text>
            </View>
            <View></View>
            <View>
              <Countsummary />
            </View>
            <View style={Homestyle.progresslowerView}>
<View style={Homestyle.progresslowerbutton}>
  <Text style={Homestyle.progressbuttontext}>Progress</Text>
</View>
<View style={Homestyle.progresslowerbutton}>
  <Text style={Homestyle.progressbuttontext}>Checklist</Text>
</View>
<View style={Homestyle.progresslowerbutton}>
  <Text style={Homestyle.progressbuttontext}>Snags</Text>
</View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
