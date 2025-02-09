import 'react-native-gesture-handler';

import {Button, Image, StyleSheet, Text} from 'react-native';

import HeaderBanner from './components/HeaderBanner';

import AboutUs from './components/Learn/AboutUs';
import BottomNav from './components/BottomNav';
import DailyLeaderboard from './components/LeaderAll/DailyLeaderboard';
import Home from './screens/Reg';
import HowToPlay from './components/Learn/HowToPlay';
import Intro from './screens/AppIntro';
import { NavigationContainer } from '@react-navigation/native';
import PrivacyPolicy from './components/Learn/PrivacyPolicy';
import Providers from './navigators';
import React from 'react';
import Register from './screens/Register';
import Signup from './screens/Signup';
import Splash from './screens/Splash';
import SuggestionsFeedback from './components/Learn/SuggestionsFeedback';
import TermsConditions from './components/Learn/TermsConditions';
import { createStackNavigator } from '@react-navigation/stack';

// source code for react native navigation: https://reactnative.dev/docs/navigation

const Stack = createStackNavigator();

const App = () => {

  const today = new Date();

  const options = {
    'year':'numeric',
    'month' : 'short',
    'day' : 'numeric',
  };


  {/* Each Stack.Screen represents a screen to navigate to */}


  return (
    // <Providers />
    <NavigationContainer>
      <Stack.Navigator >
{/* Splash screen should show automatically */}
        {/* <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        /> */}
{/* Intro page carries the FlatList (Carousel in HTML5/Javascript) in which we can have people scroll through the introduction pages*/}
        <Stack.Screen name="Intro"
          component={Intro}
          options={({navigation})=> ({
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: '#ECECEC',
            },
            headerTitle: '',
            // headerLeft: () => (<Button title='Skip' onPress={()=> navigation.navigate('Home')}/>)
        })}/>
{/* Home page is the page for users to sign in, you can rename if you please, just make sure all names match to avoid errors! */}
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}/>


{/* In React Native, the Bottom Navigator is its own screen and within it, we attach the different component pages respresenting the different "Pages", ex: Vote, Play, Leaderboard, Profile, Learn. PLEASE DO NOT add any other the mentioned "Pages" to this file,you will cause an infinite loop that will crash the app. */}
        <Stack.Screen name="BottomNav" component={BottomNav} options={{headerShown: false}}/>
        <Stack.Screen
          name="Sign up"
          component={Signup}
          options={({navigation}) => ({
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: 'white',
            },
            headerTitle: 'Sign up with Email',
            // headerRight: () => (<Button title='Done' onPress={() => navigation.navigate('BottomNav')}/>)
          })}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={({navigation}) => ({
            headerBackTitle: 'Back',
            headerTitle: () => (<HeaderBanner />),
            headerStyle: {height: 105},
            headerTitleAlign: 'center',
            headerShadowVisible: false,
            headerRight: () => (<Button title="Done" onPress={() => navigation.navigate('BottomNav')}/>),
          })}
        />
{/* Bacause the "Leaderboard" is separate from the section about todays leaders, we can add this to this screen navigation and just import it to the "Leaderboard" component */}
        <Stack.Screen
          name="Today"
          component={DailyLeaderboard}
          options={{
            headerStyle: {
              backgroundColor: 'white',
            },
            headerTitle: `${today.toLocaleString('en-US', options)}`,
          }}
        />
{/* The remaining screens below are attached to the "Learn" section within BottonNav, the layout is built but as to what it says, we got work to do! */}
        <Stack.Screen
          name="How to Play"
          component={HowToPlay}
          options={{
            headerStyle: {
              backgroundColor: 'white',
            },
            headerShadowVisible: false,
            headerTitle: () => (<Image style={styles.image}  source={require('./assets/Images/FavAnswerLogoTwo.png')}/>),
          }}
        />
        <Stack.Screen
          name="About Us"
          component={AboutUs}
          options={{
            headerBackTitle: 'Back',
            headerTitle: () => (<HeaderBanner />),
            headerStyle: {height: 105},
            headerTitleAlign: 'center',
            headerShadowVisible: false,
          }}
        />
        <Stack.Screen
          name="Terms & Conditions"
          component={TermsConditions}
          options={{
            headerBackTitle: 'Back',
            headerTitle: () => (<HeaderBanner />),
            headerStyle: {height: 105},
            headerTitleAlign: 'center',
            headerShadowVisible: false,
          }}
        />
        <Stack.Screen
          name="Privacy Policy"
          component={PrivacyPolicy}
          options={{
            headerBackTitle: 'Back',
            headerTitle: () => (<HeaderBanner />),
            headerStyle: {height: 105},
            headerTitleAlign: 'center',
            headerShadowVisible: false,
          }}
        />
        <Stack.Screen
          name="Suggestions & Feedback"
          component={SuggestionsFeedback}
          options={{
            headerBackTitle: 'Back',
            headerTitle: () => (<HeaderBanner />),
            headerStyle: {height: 105},
            headerTitleAlign: 'center',
            headerShadowVisible: false,
          }}
        />


      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;

const styles = StyleSheet.create({
  image : {
      width: 180,
      height: 40,
      marginBottom: 10,
  },
});
