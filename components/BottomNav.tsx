import {Image, StyleSheet, View, Text} from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import React from 'react';
import { createBottomTabNavigator, BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HeaderBanner from './HeaderBanner';
import Leaderboard from '../screens/Leaderboard';
import Learn from '../screens/Learn';
import Play from '../screens/Play';
import Profile from '../screens/Profile';
import Vote from '../screens/Vote';
import ActiveIcon from '../assets/Images/iosAppLogo.png';
import InactiveIcon from '../assets/Images/graywhiteicon.png';
import MonthlyLeader from './LeaderAll/MonthlyLeader';
// For more information on the bottom navigation, here is the source: https://reactnavigation.org/docs/bottom-tab-navigator/

type BottomTabParamList = {
  Vote: undefined;
  Play: undefined;
  Leaderboard: undefined;
  Profile: undefined;
  Learn: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();

const BottomNav: React.FC = () => {
  return (
    <NavigationContainer>
    <Tab.Navigator
      // id: { undefined } // Tab.Navigator or id is an error
      initialRouteName="Vote"
      screenOptions={{ 
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#f36b26',
        tabBarStyle: {
          height: 65,
          paddingLeft: 10,
          paddingRight: 10,
          paddingBottom: 5,
          paddingTop: 5,
          borderTopWidth: 3,
        },
        headerTitle: () => <HeaderBanner Title="" />,
        headerTitleContainerStyle: {marginBottom: 15},
        headerStyle: {height: 120},
        headerTitleAlign: 'center',
        headerShadowVisible: false,
      }}>
      <Tab.Screen
        name="Vote"
        component={Vote}
        options={{
          tabBarIcon: ({focused, color, size}: { focused: boolean; color: string; size: number }) => (
            <View style={styles.iconContainer}>
                <Image source={focused ? ActiveIcon : InactiveIcon} resizeMode="contain" style={styles.image} />
                <Text style={[styles.tabText, { color: focused ? '#e32f45' : '#748c94' }]}>Vote</Text>
              </View>
            ),
          }}
        />
      <Tab.Screen
        name="Play"
        component={Play}
        options={{
          tabBarIcon: ({focused, color, size}: { focused: boolean; color: string; size: number }) => (
            <View style={styles.iconContainer}>
                {focused && <View style={styles.activeDot} />}
                <FontAwesome5 name="play-circle" color={color} size={22} />
                <Text style={[styles.tabText, { color: focused ? '#e32f45' : '#748c94' }]}>Play</Text>
              </View>
          ),
        }}
      />
      <Tab.Screen
        name="Leaderboard"
        component={Leaderboard}
        options={{
          tabBarIcon: ({focused, color, size}: { focused: boolean; color: string; size: number }) => (
            <View style={styles.iconContainer}>
                <FontAwesome5 name="award" color={color} size={23} />
                <Text style={[styles.tabText, { color: focused ? '#e32f45' : '#748c94' }]}>Results</Text>
              </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused, color, size}: { focused: boolean; color: string; size: number }) => (
            <View style={styles.iconContainer}>
                <MaterialIcons name="person" color={color} size={31} />
                <Text style={[styles.tabText, { color: focused ? '#e32f45' : '#748c94' }]}>Profile</Text>
              </View>
          ),
        }}
      />
      <Tab.Screen
        name="Learn"
        component={Learn}
        options={{
          tabBarIcon: ({color, size, focused}: { focused: boolean; color: string; size: number }) => (
            <View style={styles.iconContainer}>
                <MaterialIcons name="menu-book" color={color} size={30} />
                <Text style={[styles.tabText, { color: focused ? '#e32f45' : '#748c94' }]}>Learn</Text>
              </View>
          ),
        }}
      />
    </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomNav;

const styles = StyleSheet.create({
  image: {
    width: 27,
    height: 27,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    top: 10,
  },
  tabText: {
    fontSize: 14,
    marginBottom: 10,
    marginTop: 2,
  },
  activeDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#e32f45',
    position: 'absolute',
    top: 0,
  },
});
