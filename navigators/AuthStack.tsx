import 'react-native-gesture-handler';

import {Image, StyleSheet, Text} from 'react-native';

import AboutUs from '../components/Learn/AboutUs';
import BottomNav from '../components/BottomNav';
import DailyLeaderboard from '../components/LeaderAll/DailyLeaderboard2';
import HowToPlay from '../components/Learn/HowToPlay';
import PrivacyPolicy from '../components/Learn/PrivacyPolicy';
import React from 'react';
import SuggestionsFeedback from '../components/Learn/SuggestionsFeedback';
import TermsConditions from '../components/Learn/TermsConditions';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const today = new Date();

const options = {
    'year':'numeric',
    'month' : 'short',
    'day' : 'numeric',
};

const AuthStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="BottomNav" component={BottomNav} options={{headerShown: false}}/>
            <Stack.Screen
                name="Today"
                component={DailyLeaderboard}
                options={{
                    headerStyle: {
                        backgroundColor: 'white',
                    },
                    headerTitle: `${today.toLocaleString('en-US')}`,
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
                    headerTitle: () => (<Image style={styles.image}  source={require('../assets/Images/FavAnswerLogoTwo.png')}/>),
                }}
            />
            <Stack.Screen
                name="About Us"
                component={AboutUs}
                options={{
                    headerStyle: {
                        backgroundColor: 'white',
                    },
                    headerShadowVisible: false,
                    headerTitle: () => (<Image style={styles.image}  source={require('../assets/Images/FavAnswerLogoTwo.png')}/>),
                }}
            />
            <Stack.Screen
                name="Terms & Conditions"
                component={TermsConditions}
                options={{
                    headerStyle: {
                        backgroundColor: 'white',
                    },
                    headerShadowVisible: false,
                    headerTitle: () => (<Image style={styles.image}  source={require('../assets/Images/FavAnswerLogoTwo.png')}/>),
                }}
            />
            <Stack.Screen
                name="Privacy Policy"
                component={PrivacyPolicy}
                options={{
                    headerStyle: {
                        backgroundColor: 'white',
                    },
                    headerShadowVisible: false,
                    headerTitle: () => (<Image style={styles.image}  source={require('../assets/Images/FavAnswerLogoTwo.png')}/>),
                }}
            />
            <Stack.Screen
                name="Suggestions & Feedback"
                component={SuggestionsFeedback}
                options={{
                    headerStyle: {
                        backgroundColor: 'white',
                    },
                    headerShadowVisible: false,
                    headerTitle: () => (<Image style={styles.image}  source={require('../assets/Images/FavAnswerLogoTwo.png')}/>),
                }}
            />
        </Stack.Navigator>
    );
};
export default AuthStack;

const styles = StyleSheet.create({
    image : {
        width: 180,
        height: 40,
        marginBottom: 10,
    },
});
