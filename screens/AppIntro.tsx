import React from 'react';
import {StyleSheet, View} from 'react-native';
import IntroCarousel from '../components/AppIntro/IntroCarousel';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../components/types';

type IntroProps = StackScreenProps<RootStackParamList, 'Intro'>;

const Intro: React.FC<IntroProps> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <IntroCarousel navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECECEC',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Intro;
