import 'react-native-gesture-handler';

import { Button, Image, StyleSheet, Text } from 'react-native';
import React, {useEffect, useState} from 'react';

//import Home from '../screens/Home';
import Intro from '../screens/AppIntro';
import Register from '../screens/Register';
import Signup from '../screens/Signup';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


const WelcomeStack = () => {
    const [isFirstLaunch, setIsFirstLaunch] = useState(null);
    let routeName;

    useEffect(() => {
        AsyncStorage.getItem('alreadyLaunched').then((value) => { //AsyncStorage removed from React Native
            if (value == null) {
                AsyncStorage.setItem('alreadyLaunched', 'true');
                setIsFirstLaunch(true);
            } else {
                setIsFirstLaunch(false);
            }
        });
    }, []);

    if (isFirstLaunch === null) {
        return null;
    } else if (isFirstLaunch == true) {
        routeName = 'Intro';
    } else {
        routeName = 'Home';
    }

    return (
        <Stack.Navigator initialRouteName="Home" id={undefined}>
            <Stack.Screen name="Intro"
                component={Intro}
                options={({navigation})=> ({
                    headerShadowVisible: false,
                    headerStyle: {
                        backgroundColor: '#fff',
                    },
                    headerTitle: '',
                    headerLeft: () => (<Button title="Skip" onPress={()=> navigation.navigate('Home')}/>),
            })}/>

            {/* <Stack.Screen
                name="Home"
                component={Home}
                options={{headerShown: false}}/> */}

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
                    headerShadowVisible: false,
                    headerStyle: {
                        backgroundColor: 'white',
                    },
                    headerTitle: () => (<Image style={styles.image}  source={require('../assets/Images/FavAnswerLogoTwo.png')}/>),
                    headerRight: () => (<Button title="Done" onPress={() => navigation.navigate('BottomNav')}/>),
                })}
            />
        </Stack.Navigator>
    );
};

export default WelcomeStack;

const styles = StyleSheet.create({
    image : {
        width: 180,
        height: 40,
        marginBottom: 10,
    },
});
