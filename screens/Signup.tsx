import {
  Animated,
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import { NavigationProp } from '@react-navigation/native';

import EmailRegister from '../components/Reg/EmailReg2';
import RegisterButton from '../components/Reg/RegisterButton';

// import Icon from 'react-native-vector-icons/FontAwesome'
// import { useAnimatedStyle, Animated } from 'react-native-reanimated'

type HomeProps = {
  navigation: NavigationProp<any>; // Replace `any` with your stack type for better safety
};

const Home: React.FC<HomeProps> = ({navigation}) => {
  const handleRegister = () => {
    navigation.navigate('Register');
  };

  const onPress = () => {
    navigation.navigate('Home');
  };

  // is able to auto adjust size of image based on phone dimenstions
  const {width} = useWindowDimensions();

  return (
    <View style={[styles.container, {width}]}>
      <View style={styles.header}>
        <Image
          source={require('../assets/Images/FavAnswerLogoTwo.png')}
          style={[styles.image, {resizeMode: 'contain'}]}
        />
      </View>
      {/* List of button components for each individual sign up method */}
      <View style={styles.main}>
        <EmailRegister handlePress={onPress} navigation={navigation} />
      </View>
      <View style={styles.footer}>
        <View style={styles.signIn}>
          <Text style={styles.signInText}>Already have an account? </Text>
          <TouchableOpacity
            activeOpacity={0.4}
            //   onPress={}
          >
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
      {/* Email registration popup */}
      {/* <EmailRegister visible={visible} disappear={() => setVisible(false)} navigation={navigation}/> */}
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
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  main: {
    width: '100%',
    flex: 17,
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
    alignItems: 'center',
    width: 200,
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
    fontSize: 18,
    fontWeight: '500',
    marginTop: 12,
    marginBottom: 12,
  },

});

export default Home;
