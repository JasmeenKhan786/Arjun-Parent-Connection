import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ForgotpasswordScreen from './ForgotpasswordScreen';
import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen';
import SignupScreen from './Signup';
import LoadingScreen from './Loading';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SettingsScreen from './SettingsScreen';
import UpcomingEventsScreen from './UpcomingEventsScreen';
import ParentsAroundScreen from './ParentsAround';
import AddEventsScreen from './AddEventsScreen';
import ActivitiesScreen from './ActivitiesScreen';
import AddActivitiesScreen from './AddActivities';
import CategoryScreen from './CategoryScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Feather } from '@expo/vector-icons';
const Stack1 = createStackNavigator();
const Stack2 = createStackNavigator();
const Stack3 = createStackNavigator();
const Tabs = createBottomTabNavigator();

function ActivityStack() {
  return (
    <Stack2.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerMode: 'screen',
        headerTintColor: 'white',
        headerStyle: { backgroundColor: 'tomato' },
        headerShown: false,
      }}>
      <Stack2.Screen name="Home" component={HomeScreen} />
      <Stack2.Screen name="Category" component={CategoryScreen} />
      <Stack2.Screen name="Activity" component={ActivitiesScreen} />
      <Stack2.Screen name="AddActivities" component={AddActivitiesScreen} />
    </Stack2.Navigator>
  );
}
function EventsStack() {
  return (
    <Stack3.Navigator
      initialRouteName="UpcomingEvents"
      screenOptions={{
        headerMode: 'screen',
        headerTintColor: 'white',
        headerStyle: { backgroundColor: 'tomato' },
        headerShown: false,
      }}>
      <Stack2.Screen name="Home" component={HomeScreen} />
      <Stack3.Screen name="UpcomingEvents" component={UpcomingEventsScreen} />
      <Stack3.Screen name="AddEvents" component={AddEventsScreen} />
    </Stack3.Navigator>
  );
}
function BottomTab() {
  return (
    <Tabs.Navigator
      initialRouteName="ActivityStack"
     
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'ActivityStack') {
            return <Ionicons name={'home'} size={20} color={color} />;
          } else if (route.name === 'EventsStack') {
            return <Ionicons name="game-controller" size={20} color={color} />;
          } else if (route.name === 'Settings') {
            return <Feather name="user" size={20} color={color} />;
          } else if (route.name === 'ParentsAround') {
            return <Feather name="user" size={20} color={color} />;
          }
        },
        tabBarActiveTintColor: '#1e9afe',
        tabBarInactiveTintColor: 'gray',
        headerShown:false,
        tabBarStyle: { backgroundColor: 'black' },
      })}>
      <Tabs.Screen name="ActivityStack" component={ActivityStack} options={{title:"Home"}}/>
      <Tabs.Screen name="EventsStack" component={EventsStack} options={{title:"Events"}}/>
      <Tabs.Screen name="Settings" component={SettingsScreen} />
      <Tabs.Screen name="ParentsAround" component={ParentsAroundScreen} />
    </Tabs.Navigator>
  );
}
function MyStack() {
  return (
    <Stack1.Navigator
      initialRouteName="Loading"
      screenOptions={{
        headerMode: 'screen',
        headerTintColor: 'white',
        headerStyle: { backgroundColor: 'tomato' },
        headerShown: false,
      }}>
      <Stack1.Screen name="Loading" component={LoadingScreen} />
      <Stack1.Screen name="Login" component={LoginScreen} />
      <Stack1.Screen name="Signup" component={SignupScreen} />
      <Stack1.Screen name="ForgotPassword" component={ForgotpasswordScreen} />
      <Stack1.Screen name="Home" component={BottomTab} />
    </Stack1.Navigator>
  );
}

export default MyStack;
