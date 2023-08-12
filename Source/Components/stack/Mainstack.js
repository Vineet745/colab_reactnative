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
import {Badge} from 'react-native-elements';
import PWR from '../../screens/newprogressinnerscreen/pwr/PWR';
import Misc from '../../screens/newprogressinnerscreen/misc/Misc';
import Laboursupply from '../../screens/newprogressinnerscreen/laboursupply/Laboursupply';
import Calendarcomponent from '../progresscomponents/Calendarcomponent';
import Searchbar from '../../utils/Searchbar';
import Addhindrance from '../../screens/cardsrouter/hindrance/Addhindrance';
import Hindrancedetail from '../../screens/cardsrouter/hindrance/hindrancedetail/Hindrancedetail';
import Areaofconcerndetail from '../../screens/cardsrouter/areaofconcern/areaofconcerndetail/Areaofconcerndetail';

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
        options={{headerShown: false, headerStyle:{
          borderBottomWidth: 0, // Remove the borderBottom
              elevation: 0, // Remove elevation shadow (Android only)
        }}}
      />
      <Stack.Screen name="Labour Data" component={Labourdata}  />
      <Stack.Screen name="Progressdata" component={Progressstack}  options={{
        header:({navigation})=>{
          return <View style={{backgroundColor:"white",padding:moderateScale(10),alignItems:"center",flexDirection:"row"}}>
          <TouchableOpacity  onPress={()=>navigation.goBack()} style={{marginLeft:verticalScale(10),padding:moderateScale(10)}}>
            <Image source={require('../../assets/Images/backbutton.png')}/>
          </TouchableOpacity >
          <Text style={{fontFamily:"Geologica-Bold",color:"black",fontSize:20,marginLeft:verticalScale(30)}}>New Progress</Text>
          </View>
        }
      }}/>
      <Stack.Screen name="De-Snags" component={Desnagstack} />

      <Stack.Screen name="Area of Concern" component={AreaofConcernstack} />
      {/* page */}
      <Stack.Screen name="Area of concern" component={Areaofconcern} />
      <Stack.Screen name="Area of Concern Detail" component={Areaofconcerndetail} />
      <Stack.Screen name="Hindrance" component={Hindrance} />
      {/* Page */}
      <Stack.Screen name="Add Hindrance" component={Addhindrance} />
      <Stack.Screen name="Hindrance Details" component={Hindrancedetail} />

      <Stack.Screen name="Quality Control" component={Qualitystack} />
    </Stack.Navigator>
  );
};

const Addstack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
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

const Innerprogressstack = () => {
  return (
    <>
      <Calendarcomponent />
      <Toptab.Navigator
        screenOptions={{
          tabBarPressOpacity: 0,
          tabBarActiveTintColor: 'black',
          tabBarItemStyle: {width: 125},
          tabBarStyle: {
            backgroundColor: 'white',
            marginTop: verticalScale(10),
            width: moderateScale(340),
            alignSelf: 'center',
            borderRadius: moderateScale(30),
          },
          tabBarLabelStyle: {fontSize: 11, fontFamily: 'Geologica-SemiBold'},
          tabBarIndicatorStyle: {
            backgroundColor: '#ffba4d',
            height: verticalScale(40),
            borderRadius: moderateScale(30),
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
};

// New Progress Top tab
const Progressstack = () => {
  return (
    <View style={{ flex: 1}}>
      <Toptab.Navigator
        screenOptions={{
          tabBarPressOpacity: 0,
          tabBarPressColor: 'white',
          tabBarActiveTintColor: '#ffba4d',
          tabBarInactiveTintColor: 'white',
          tabBarScrollEnabled:true,
          tabBarStyle: {
            backgroundColor: 'white',
            height: 85,
            width:450,
            borderRadius: 0,
            elevation: 0,
            alignContent:"center",
            justifyContent:"center",
            paddingHorizontal:horizontalScale(10),
            
          },
          tabBarItemStyle: { width: 100, padding: 5,height:60},
          tabBarContentContainerStyle: {  flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 5, width: '100%' },
          tabBarIndicatorStyle: { height: 0 },
        }}
      >
        <Toptab.Screen
          name="Completed"
          options={{
            tabBarLabel: ({ color, focused }) => <TitleBadge color={color} focused={focused} item={'Completed'} 
              />,
            tabBarBadge: () => (
            <View style={{ backgroundColor:'black',  top: 40, right: 30, zIndex: 10, position: "absolute", borderRadius: moderateScale(5) }}>
              <Text style={{ color: "white", fontFamily: "Geologica-Medium", fontSize: 11, paddingHorizontal: horizontalScale(6) }} >
                1000
              </Text>
            </View>
          ),
            
          }}
          component={Completed}
        />
        <Toptab.Screen name="Ongoing" component={Ongoing} options={{
          tabBarLabel: ({ color, focused }) => <TitleBadge color={color} focused={focused} item={'Ongoing'} tabBarScrollEnabled={true} />,
          tabBarBadge: () => (
            <View style={{ backgroundColor: "black",  top: 40, right: 30, zIndex: 10, position: "absolute", borderRadius: moderateScale(5) }}>
              <Text style={{ color: "white", fontFamily: "Geologica-Medium", fontSize: 11, paddingHorizontal: horizontalScale(6) }} >
                1000
              </Text>
            </View>
          ),
        }} />
        <Toptab.Screen name="Inquality" component={Inquality} options={{
          tabBarLabel: ({ color, focused }) => <TitleBadge color={color} focused={focused} item={'Open'} />,
          tabBarBadge: () => (
            <View style={{ backgroundColor: "black",  top: 40, right: 30, zIndex: 10, position: "absolute", borderRadius: moderateScale(5) }}>
              <Text style={{ color: "white", fontFamily: "Geologica-Medium", fontSize: 11, paddingHorizontal: horizontalScale(6) }} >
                1000
              </Text>
            </View>
          ),
        }} />
        <Toptab.Screen name="Upcoming" component={Upcoming} options={{
          tabBarLabel: ({ color, focused }) => <TitleBadge color={color} focused={focused} item={'Upcoming'} />,
          tabBarBadge: () => (
            <View style={{ backgroundColor: "black",  top: 40, right: 30, zIndex: 10, position: "absolute", borderRadius: moderateScale(5) }}>
              <Text style={{ color: "white", fontFamily: "Geologica-Medium", fontSize: 11, paddingHorizontal: horizontalScale(6) }} >
                1000
              </Text>
            </View>
          ),
        }} />
      </Toptab.Navigator>
    </View>
  );
};



const TitleBadge = ({ color, focused, item }) => {
  return (
    <View style={[{
      flexDirection: "row",
      alignItems: "center",
      justifyContent:"center",
      marginTop: -5,
      paddingHorizontal: 8,
      paddingVertical: 6,
      borderRadius: 30,
      width:100,
      height:45,
      elevation:5

    }, { backgroundColor: color }]}>
      <Text style={[{
        fontSize: 16,
        fontFamily: 'Geologica-Medium',
      }, { color: focused ? 'black' : 'gray' }]}>
        {item}
      </Text>
    </View>
  );
};

const Qualitystack = () => {
  return (
    <View style={{ flex: 1}}>
      <Toptab.Navigator
        screenOptions={{
         
          tabBarPressOpacity: 0,
          tabBarPressColor: 'white',
          tabBarActiveTintColor: '#ffba4d',
          tabBarInactiveTintColor: 'white',
          tabBarStyle: {
            backgroundColor: 'white',
            height: 85,
            borderRadius: 0,
            elevation: 0,
            alignContent:"center",
            justifyContent:"center",
            paddingHorizontal:horizontalScale(10),
            
          },
          tabBarItemStyle: { width: 100, padding: 5,height:60},
          tabBarContentContainerStyle: {  flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 5, width: '100%' },
          tabBarIndicatorStyle: { height: 0 },
          tabBarScrollEnabled: true,
        }}
      >
        <Toptab.Screen
          name="Closed"
          options={{
            tabBarLabel: ({ color, focused }) => <TitleBadge color={color} focused={focused} item={'Closed'} 
              />,
            tabBarBadge: () => (
            <View style={{ backgroundColor:'black',  top: 40, right: 30, zIndex: 10, position: "absolute", borderRadius: moderateScale(5) }}>
              <Text style={{ color: "white", fontFamily: "Geologica-Medium", fontSize: 11, paddingHorizontal: horizontalScale(6) }} >
                1000
              </Text>
            </View>
          ),
            
          }}
          component={Closed}
        />
        <Toptab.Screen name="New" component={New} options={{
          tabBarLabel: ({ color, focused }) => <TitleBadge color={color} focused={focused} item={'New'} />,
          tabBarBadge: () => (
            <View style={{ backgroundColor: "black",  top: 40, right: 30, zIndex: 10, position: "absolute", borderRadius: moderateScale(5) }}>
              <Text style={{ color: "white", fontFamily: "Geologica-Medium", fontSize: 11, paddingHorizontal: horizontalScale(6) }} >
                1000
              </Text>
            </View>
          ),
        }} />
        <Toptab.Screen name="Open" component={Open} options={{
          tabBarLabel: ({ color, focused }) => <TitleBadge color={color} focused={focused} item={'Open'} />,
          tabBarBadge: () => (
            <View style={{ backgroundColor: "black",  top: 40, right: 30, zIndex: 10, position: "absolute", borderRadius: moderateScale(5) }}>
              <Text style={{ color: "white", fontFamily: "Geologica-Medium", fontSize: 11, paddingHorizontal: horizontalScale(6) }} >
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
    <View style={{ flex: 1}}>
      <Toptab.Navigator
        screenOptions={{
         
          tabBarPressOpacity: 0,
          tabBarPressColor: 'white',
          tabBarActiveTintColor: '#ffba4d',
          tabBarInactiveTintColor: 'white',
          tabBarStyle: {
            backgroundColor: 'white',
            height: 85,
            borderRadius: 0,
            elevation: 0,
            alignContent:"center",
            justifyContent:"center",
            paddingHorizontal:horizontalScale(10),
            
          },
          tabBarItemStyle: { width: 100, padding: 5,height:60},
          tabBarContentContainerStyle: {  flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 5, width: '100%' },
          tabBarIndicatorStyle: { height: 0 },
          tabBarScrollEnabled: true,
        }}
      >
        <Toptab.Screen
          name="New"
          options={{
            tabBarLabel: ({ color, focused }) => <TitleBadge color={color} focused={focused} item={'New'} 
              />,
            tabBarBadge: () => (
            <View style={{ backgroundColor:'black',  top: 40, right: 30, zIndex: 10, position: "absolute", borderRadius: moderateScale(5) }}>
              <Text style={{ color: "white", fontFamily: "Geologica-Medium", fontSize: 11, paddingHorizontal: horizontalScale(6) }} >
                1000
              </Text>
            </View>
          ),
            
          }}
          component={New}
        />
        <Toptab.Screen name="In review" component={Inreview} options={{
          tabBarLabel: ({ color, focused }) => <TitleBadge color={color} focused={focused} item={'Inreview'} />,
          tabBarBadge: () => (
            <View style={{ backgroundColor: "black",  top: 40, right: 30, zIndex: 10, position: "absolute", borderRadius: moderateScale(5) }}>
              <Text style={{ color: "white", fontFamily: "Geologica-Medium", fontSize: 11, paddingHorizontal: horizontalScale(6) }} >
                1000
              </Text>
            </View>
          ),
        }} />
        <Toptab.Screen name="Closed" component={Closed} options={{
          tabBarLabel: ({ color, focused }) => <TitleBadge color={color} focused={focused} item={'Closed'} />,
          tabBarBadge: () => (
            <View style={{ backgroundColor: "black",  top: 40, right: 30, zIndex: 10, position: "absolute", borderRadius: moderateScale(5) }}>
              <Text style={{ color: "white", fontFamily: "Geologica-Medium", fontSize: 11, paddingHorizontal: horizontalScale(6) }} >
                1000
              </Text>
            </View>
          ),
        }} />
      </Toptab.Navigator>
    </View>
  );
};

const AreaofConcernstack = () => {
  return (
    <View style={{ flex: 1}}>
      <Toptab.Navigator
        screenOptions={{
         
          tabBarPressOpacity: 0,
          tabBarPressColor: 'white',
          tabBarActiveTintColor: '#ffba4d',
          tabBarInactiveTintColor: 'white',
          tabBarStyle: {
            backgroundColor: 'white',
            height: 85,
            borderRadius: 0,
            elevation: 0,
            alignContent:"center",
            justifyContent:"center",
            paddingHorizontal:horizontalScale(10),
            
          },
          tabBarItemStyle: { width: 100, padding: 5,height:60},
          tabBarContentContainerStyle: {  flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 5, width: '100%' },
          tabBarIndicatorStyle: { height: 0 },
          tabBarScrollEnabled: true,
        }}
      >
        <Toptab.Screen
          name="Read"
          options={{
            tabBarLabel: ({ color, focused }) => <TitleBadge color={color} focused={focused} item={'Read'} 
              />,
            tabBarBadge: () => (
            <View style={{ backgroundColor:'black',  top: 40, right: 30, zIndex: 10, position: "absolute", borderRadius: moderateScale(5) }}>
              <Text style={{ color: "white", fontFamily: "Geologica-Medium", fontSize: 11, paddingHorizontal: horizontalScale(6) }} >
                1000
              </Text>
            </View>
          ),
            
          }}
          component={Read}
        />
        <Toptab.Screen name="Pending" component={Pending} options={{
          tabBarLabel: ({ color, focused }) => <TitleBadge color={color} focused={focused} item={'Pending'} />,
          tabBarBadge: () => (
            <View style={{ backgroundColor: "black",  top: 40, right: 30, zIndex: 10, position: "absolute", borderRadius: moderateScale(5) }}>
              <Text style={{ color: "white", fontFamily: "Geologica-Medium", fontSize: 11, paddingHorizontal: horizontalScale(6) }} >
                1000
              </Text>
            </View>
          ),
        }} />
        <Toptab.Screen name="Approved" component={Approved} options={{
          tabBarLabel: ({ color, focused }) => <TitleBadge color={color} focused={focused} item={'Approved'} />,
          tabBarBadge: () => (
            <View style={{ backgroundColor: "black",  top: 40, right: 30, zIndex: 10, position: "absolute", borderRadius: moderateScale(5) }}>
              <Text style={{ color: "white", fontFamily: "Geologica-Medium", fontSize: 11, paddingHorizontal: horizontalScale(6) }} >
                1000
              </Text>
            </View>
          ),
        }} />
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
