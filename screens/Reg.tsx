// fix placement of logo to match on home screen

import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import React, {useEffect} from 'react';

import RegisterButton from '../components/Reg/RegisterButton';
import {useAuthStore} from '../store';
import {useProfileStore} from '../store';

// import Icon from 'react-native-vector-icons/FontAwesome'
// import { useAnimatedStyle, Animated } from 'react-native-reanimated'

const Home = ({navigation}) => {
  const {
    onGoogleButtonPress,
    onAppleButtonPress,
    onFacebookButtonPress,
    user,
    signOut,
    subscribe,
  } = useAuthStore();
  const {setEmail, setFName, setLName, setAge, setProfilePic, fName, lName} =
    useProfileStore();

  const updateProfile = (userData, isNewUser) => {
    if (!userData) {return null;}
    if (!isNewUser) {
      navigation.navigate('BottomNav');
    } else {
      userData.email && setEmail(userData.email);
      userData.given_name && setFName(userData.given_name);
      userData.family_name && setLName(userData.family_name);
      userData.picture && setProfilePic(userData.picture);
      navigation.navigate('Register');
    }
  };
  const handleRegister = () => {
    navigation.navigate('Register');
  };
  const onGooglePress = () => {
    onGoogleButtonPress().then(u => {
      updateProfile(
        u.additionalUserInfo.profile,
        u.additionalUserInfo.isNewUser,
      );
    });
  };
  const onApplePress = () => {
    onAppleButtonPress().then(u => {
      updateProfile(
        u.additionalUserInfo.profile,
        u.additionalUserInfo.isNewUser,
      );
    });
  };
  const onFBPress = () => {
    onFacebookButtonPress().then(u => {
      updateProfile(
        u.additionalUserInfo.profile,
        u.additionalUserInfo.isNewUser,
      );
    });
  };
  const onPress = () => {
    navigation.navigate('Sign up');
  };

  const SignupButtons = [
    {
      image: require('../assets/Home/Google.png'),
      text: 'Google',
      handlePress: onGooglePress,
    },
    {
      image: require('../assets/Home/apple.png'),
      text: 'Apple',
      handlePress: onApplePress,
    },
    {
      image: require('../assets/Home/instagram.png'),
      text: 'Instagram',
      handlePress: onFBPress,
    },
    {
      image: require('../assets/Home/tiktok2.png'),
      text: 'TikTok',
      handlePress: handleRegister,
    },
  ];

  useEffect(() => {
    subscribe();
  }, []);

  // is able to auto adjust size of image based on phone dimenstions
  const {width} = useWindowDimensions();
  // if (initializing) return null
  return (
    <View style={[styles.container, {width}]}>
      <View style={styles.header}>
        <Image
          source={require('../assets/Images/FavAnswerLogoNew.png')}
          style={[styles.image, {resizeMode: 'contain'}]}
        />
        {/* <Text style={styles.logoTagline}>Vote for fun, play to win!</Text> */}
      </View>
      {/* List of button components for each individual sign up method */}
      <View style={styles.main}>
        {SignupButtons.map(({image, text, handlePress}) => {
          return (
            <View style={styles.buttons} key={text}>
              <RegisterButton
                image={image}
                text={text}
                handlePress={handlePress}
              />
            </View>
          );
        })}
        <View style={styles.or}>
          <View style={styles.hr} />
          <Text style={styles.label}> OR </Text>
          <View style={styles.hr} />
        </View>
        <View style={styles.buttons}>
          <RegisterButton
            image={require('../assets/Home/Email.png')}
            text="Email"
            handlePress={onPress}
          />
        </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.signIn}>
          <Text style={styles.signInText}>Already have an account? </Text>
          <TouchableOpacity activeOpacity={0.4} >
          {/* deleted  onPress={() => signin()} from TouchableOpacity since no signIn function has been defined as of yet */}
            <Text style={[styles.link, styles.signInText]}>Sign In</Text>
          </TouchableOpacity>
        </View>
        <View>
          <View style={styles.textContainer}>
            <Text style={styles.disclaimer}>
              By signing up, you agree to our
            </Text>
          </View>
          <View style={styles.textContainer}>
            <TouchableOpacity
              activeOpacity={0.4}
              onPress={() => navigation.navigate('Terms & Conditions')}>
              <Text style={[styles.link, styles.disclaimer]}>
                Terms & Conditions
              </Text>
            </TouchableOpacity>
            <Text style={styles.disclaimer}> and </Text>
            <TouchableOpacity
              activeOpacity={0.4}
              onPress={() => navigation.navigate('Privacy Policy')}>
              <Text style={[styles.link, styles.disclaimer]}>
                Privacy Policy
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  header: {
    flex: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  main: {
    width: '100%',
    flex: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 5,
    justifyContent: 'center',
    width: '100%',
  },
  image: {
    justifyContent: 'center',
    width: 300,
  },
  logoTagline: {
    fontSize: 20,
    marginTop: -20,
    marginLeft: 65,
  },
  buttons: {
    flex: 0.25,
    alignSelf: 'stretch',
    marginBottom: 5,
  },
  emailRegContainer: {
    flex: 0.4,
    alignSelf: 'stretch',
  },
  emailButton: {
    marginTop: 25,
  },

  signIn: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 25,
    width: '100%',
  },
  signInText: {
    fontSize: 16,
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  disclaimer: {
    fontSize: 16,
  },
  linkContainer: {},
  link: {
    color: '#0d90fc',
  },
  label: {
    justifyContent: 'center',
    textAlign: 'center',
    // flex: 2,
    fontSize: 18,
    fontWeight: '500',
    marginTop: 12,
    marginBottom: 12,
  },
  or: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },
  hr: {
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
    // marginTop: -10,
    width: '40%',
  },
});

export default Home;
