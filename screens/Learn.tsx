import {StyleSheet, Text, View} from 'react-native';
import LearnButton from '../components/Learn/LearnButton';
import React from 'react';

const Learn = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Learn</Text>
      </View>
      <View style={styles.main}>
        <View style={styles.links}>
          <View style={styles.hr} />
          <View style={styles.hr} />
          <View style={styles.link}>
            <LearnButton
              icon="home"
              color="#ff974e"
              text="About Us"
              navigation={navigation}
            />
          </View>
          <View style={styles.hr} />
          <View style={styles.link}>
            <LearnButton
              icon="envelope"
              color="#f36b26"
              text="Suggestions & Feedback"
              navigation={navigation}
            />
          </View>
          <View style={styles.hr} />
          <View style={styles.link}>
            <LearnButton
              icon="list-alt"
              color="#35a4d1"
              text="Terms & Conditions"
              navigation={navigation}
            />
          </View>
          <View style={styles.hr} />
          <View style={styles.link}>
            <LearnButton
              icon="shield"
              color="#ffc54b"
              text="Privacy Policy"
              navigation={navigation}
            />
          </View>
          <View style={styles.hr} />
          <View style={styles.hr} />
        </View>
      </View>
    </View>
  );
};

export default Learn;

const headerRatio = 1 / 23;
const mainRatio = 1 - headerRatio;
const linksRatio = 9 / 10;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  hr: {
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  header: {
    flex: headerRatio,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '500',
  },
  main: {
    flex: mainRatio,
    alignItems: 'center',
  },
  links: {
    marginTop: 32,
    flex: linksRatio / mainRatio,
  },
  link: {
    flex: 0.1,
    width: '100%',
  },
  space: {
    flex: 0.1,
  },
  icon: {  // ✅ Add this to fix the error
    marginRight: 5,  // Optional styling
  },

});
