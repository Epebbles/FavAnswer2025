import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import React from 'react';

const NextButton = ({title, scrollTo}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.8} onPress={scrollTo}>
        <Text style={styles.appButtonText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NextButton;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  appButtonText: {
    fontSize: 18,
    color: '#f36b26',
    alignSelf: 'center',
  },
});
