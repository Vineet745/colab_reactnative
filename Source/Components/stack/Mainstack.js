import {View, Text, Image, TouchableOpacity, Button} from 'react-native';
import React, {useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../../Navigation/bottomnavigation/home/Home';
import Task from '../../Navigation/bottomnavigation/task/Task';
import Tools from '../../Navigation/bottomnavigation/Tools/Tools';
import Profile from '../../Navigation/bottomnavigation/Profile/Profile';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Snag from '../../screens/addscreen/snag/Snag';
import Desnag from '../../screens/addscreen/desnag/Desnag';
import Newprogress from '../../screens/addscreen/newprogress/Newprogress';
import {useDispatch} from 'react-redux';
import ModalTester from '../modal/Modal';
import Labourdata from '../../screens/cardsrouter/labourdata/Labourdata';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Completed from '../../screens/toptabscreen/completed/Completed';
import Ongoing from '../../screens/toptabscreen/ongoing/Ongoing';
import Inquality from '../../screens/toptabscreen/inquality/Inquality';
import Upcoming from '../../screens/toptabscreen/upcoming/Upcoming';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../assets/Dimension';
import New from '../../screens/desnagscreen/new/New';
import Inreview from '../../screens/desnagscreen/inreveiw/Inreview';
import Closed from '../../screens/desnagscreen/closed/Closed';
import Approved from '../../screens/areaofconcernscreen/approved/Approved';
import Pending from '../../screens/areaofconcernscreen/pending/Pending';
import Read from '../../screens/areaofconcernscreen/read/Read';
import Areaofconcern from '../../screens/cardsrouter/areaofconcern/Areaofconcern';
import Areaofconcerncard from '../cardscomponents/areaofconcercard/Areaofconcerncard';
import Hindrance from '../../screens/cardsrouter/hindrance/Hindrance';
import Open from '../../screens/qualitychecklistscreen/Open/Open';
import { Badge } from 'react-native-elements';
import PWR from '../../screens/newprogressinnerscreen/pwr/PWR';
import Misc from '../../screens/newprogressinnerscreen/misc/Misc';
import Laboursupply from '../../screens/newprogressinnerscreen/laboursupply/Laboursupply';
import Calendarcomponent from '../progresscomponents/Calendarcomponent';

const Tab = createBottomTabNavigator();
const Toptab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();

const Homestack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: {
          fontFamily: 'Geologica-SemiBold',
        },
      }}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Labour Data" component={Labourdata} options={{}} />
      <Stack.Screen name="Progressdata" component={Progressstack} />
      <Stack.Screen name="De-Snags" component={Desnagstack} />
      <Stack.Screen name="Area of Concern" component={AreaofConcernstack} />
      <Stack.Screen name="AreaofConcern" component={Areaofconcern} />
      <Stack.Screen name="Hindrance" component={Hindrance} />
      <Stack.Screen name="Quality Control" component={Qualitystack} />
    </Stack.Navigator>
  );
};

const Addstack = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerTitleStyle: {
        fontFamily: 'Geologica-Medium',
      },
    }}>
      <Stack.Screen name="Snag" component={Snag} />
      <Stack.Screen name="De-Snag" component={Desnag} />
      <Stack.Screen name="New-progress" component={Innerprogressstack} />
    </Stack.Navigator>
  );
};


const Innerprogressstack =()=>{
  return (
    <>
    <Calendarcomponent/>
      <Toptab.Navigator
      screenOptions={{
        tabBarPressOpacity: 0,
        tabBarActiveTintColor: 'black',
        tabBarItemStyle: {width: 130},
        tabBarStyle: {
          backgroundColor: 'white',
          marginTop: verticalScale(10),
          width: moderateScale(360),
          alignSelf:"center",
          borderRadius: moderateScale(30),
        },
        tabBarLabelStyle: {fontSize: 11, fontFamily: 'Geologica-SemiBold'},
        tabBarIndicatorStyle: {
          backgroundColor: '#ffba4d',
          height: verticalScale(40),
          borderRadius: moderateScale(30),
          width: horizontalScale(130),
        },
        tabBarPressColor: null,
        tabBarScrollEnabled: true,
      }}>
      <Toptab.Screen
        name="Labour Supply"
        component={Laboursupply}
        screenOptions={{backgroundColor: 'white'}}
      />
      <Toptab.Screen name="PRW" component={PWR} />
      <Toptab.Screen name="Misc." component={Misc} />
      </Toptab.Navigator>
    </>
  );
}

// New Progress Top tab
const Progressstack = () => {
  return (
    <Toptab.Navigator
      screenOptions={{
        tabBarPressOpacity: 0,
        tabBarActiveTintColor: 'black',
        tabBarItemStyle: {width: 115},
        tabBarStyle: {
          backgroundColor: 'white',
          marginTop: verticalScale(10),
          borderRadius: moderateScale(30),
        },
        tabBarLabelStyle: {fontSize: 12, fontFamily: 'Geologica-SemiBold'},
        tabBarIndicatorStyle: {
          backgroundColor: '#ffba4d',
          height: verticalScale(40),
          borderRadius: moderateScale(30),
          width: horizontalScale(115),
        },
        tabBarPressColor: null,
        tabBarScrollEnabled: true,
      }}>
      <Toptab.Screen
        name="Completed"
        component={Completed}
        screenOptions={{backgroundColor: 'white'}}
      />
      <Toptab.Screen name="Ongoing" component={Ongoing} />
      <Toptab.Screen name="Inquality" component={Inquality} />
      <Toptab.Screen name="Upcoming" component={Upcoming} />
    </Toptab.Navigator>
  );
};  

// Quality Checklist
const Qualitystack = () => {
  return (
    <View style={{flex: 1,borderWidth:1}}>
      <Toptab.Navigator
        screenOptions={{
          tabBarPressOpacity: 0,
          tabBarActiveTintColor: 'black',
          
          tabBarStyle: {
            marginTop: verticalScale(10),
            borderRadius: moderateScale(30),
            width: moderateScale(360),
            alignSelf: 'center',
            shadowColor: 'transparent',
            position:"relative",
            backgroundColor:"transparent",
            
          },
          tabBarItemStyle:{borderRadius: moderateScale(30),width:120,position:"relative",height:verticalScale(50)},
          tabBarLabelStyle: {fontSize: 12, fontFamily: 'Geologica-SemiBold',marginBottom:20},
          
          tabBarIndicatorStyle: {
            backgroundColor: '#ffba4d',
            height: verticalScale(40),
            borderRadius: moderateScale(30),
            position: "absolute",
            top: 0,
            zIndex:999
          },
          tabBarPressColor: null,
        }}>
        <Toptab.Screen
          name="Closed"
          
          component={Closed}
          options={{
            tabBarBadge: () => (
              <View style={{backgroundColor:"black",borderWidth:1,top:35,right:40,zIndex:10, position:"absolute",borderRadius:moderateScale(5)}}>
              <Text style={{color:"white",fontFamily:"Geologica-Medium",fontSize:11,paddingHorizontal:horizontalScale(6)}} >
                1000
              </Text>
              </View>
            ),
          }}
        />
        <Toptab.Screen name="New" component={New} />
        <Toptab.Screen name="Open" component={Open} options={{
            tabBarBadge: () => (
              <View style={{backgroundColor:"black",borderWidth:1,top:35,right:40,zIndex:10, position:"absolute",borderRadius:moderateScale(5)}}>
              <Text style={{color:"white",fontFamily:"Geologica-Medium",fontSize:11,paddingHorizontal:horizontalScale(6)}} >
                1000
              </Text>
              </View>
            ),
          }} />
      </Toptab.Navigator>
    </View>
  );
};

const Desnagstack = () => {
  return (
    <View style={{flex: 1}}>
      <Toptab.Navigator
        screenOptions={{
                    tabBarPressColor: 'false',
          tabBarActiveTintColor: 'black',
          tabBarStyle: {
            backgroundColor: '#f3f5f8',
            marginTop: verticalScale(20),
            borderRadius: moderateScale(30),
            width: moderateScale(360),
            alignSelf: 'center',
          },
          tabBarLabelStyle: {fontSize: 12, fontFamily: 'Geologica-SemiBold'},
          tabBarIndicatorStyle: {
            backgroundColor: '#ffba4d',
            height: verticalScale(40),
            borderRadius: moderateScale(30),
          },
        }}>
        <Toptab.Screen
          name="New"
          component={New}
          screenOptions={{backgroundColor: 'white'}}
        />
        <Toptab.Screen name="In review" component={Inreview} />
        <Toptab.Screen name="Closed" component={Closed} />
      </Toptab.Navigator>
    </View>
  );
};

const AreaofConcernstack = () => {
  return (
    <View style={{flex: 1}}>
      <Toptab.Navigator
        screenOptions={{
          tabBarPressColor: 'false',
          tabBarActiveTintColor: 'black',
          tabBarStyle: {
            backgroundColor: 'white',
            marginTop: verticalScale(20),
            borderRadius: moderateScale(30),
            width: moderateScale(360),
            alignSelf: 'center',
          },
          tabBarLabelStyle: {fontSize: 12, fontFamily: 'Geologica-SemiBold'},
          tabBarIndicatorStyle: {
            backgroundColor: '#ffba4d',
            height: verticalScale(40),
            borderRadius: moderateScale(30),
          },
        }}>
        <Toptab.Screen
          name="Read"
          component={Read}
          screenOptions={{backgroundColor: 'white'}}
        />
        <Toptab.Screen name="Pending" component={Pending} />
        <Toptab.Screen name="Approved" component={Approved} />
      </Toptab.Navigator>
    </View>
  );
};

/////////////////////////Main Bottom Navigation

const Bottom = () => {
  const [ModalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();
  const toggleModal = () => {
    setModalVisible(!ModalVisible);
  };

  return (
    <View style={{flex: 1, backgroundColor: 'lightgreen'}}>
      <ModalTester visible={ModalVisible} onClose={toggleModal} />

      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, size, color}) => {
            let iconName;
            if (route.name === 'homestack') {
              iconName = focused
                ? require('../../assets/Images/home-frame.png')
                : require('../../assets/Images/home.png');
            } else if (route.name === 'Task') {
              iconName = focused
                ? require('../../assets/Images/task-frame.png')
                : require('../../assets/Images/task-bottom.png');
            } else if (route.name === 'Tools') {
              iconName = focused
                ? require('../../assets/Images/tool-frame.png')
                : require('../../assets/Images/tools-bottom.png');
            } else if (route.name === 'Profile') {
              iconName = focused
                ? require('../../assets/Images/user-logo-bottom.png')
                : require('../../assets/Images/user-logo-bottom.png');
            }
            return <Image source={iconName} />;
          },
          tabBarStyle: {height: 70},
          tabBarLabel: () => null,
        })}>
        <Tab.Screen
          name="homestack"
          component={Homestack}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Task"
          component={Task}
          options={{headerShown: false}}
        />

        {/* Extra button Code */}

        <Tab.Screen
          name="addstack"
          component={Addstack}
          // listeners={(e)=>{
          //   e.navigation.popToTop()
          // }}
          options={{
            // on
            tabBarIcon: ({focused}) => {
              return (
                <TouchableOpacity
                  onPress={toggleModal}
                  style={{position: 'absolute', height: 100}}>
                  <View
                    style={{
                      width: 50,
                      height: 50,
                      backgroundColor: 'black',
                      borderRadius: 50,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    {!ModalVisible ? (
                      <Image
                        source={require('../../assets/Images/Add-bottom.png')}
                      />
                    ) : (
                      <Image
                        source={require('../../assets/Images/cross.png')}
                      />
                    )}
                  </View>
                </TouchableOpacity>
              );
            },
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Tools"
          component={Tools}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{headerShown: false}}
        />
      </Tab.Navigator>
      {/* <ModalTester  visible={ModalVisible} onClose={toggleModal}/> */}
    </View>
  );
};

export default Bottom;
