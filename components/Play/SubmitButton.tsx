import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const SubmitButton = ({submit}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.appButtonContainer}
      onPress={submit}>
      <Text style={styles.appButtonText}>Submit FavAnswer</Text>
    </TouchableOpacity>
  );
};

export default SubmitButton;

const styles = StyleSheet.create({
  appButtonContainer: {
    elevation: 8,
    borderRadius: 30,
    justifyContent: 'center',
    paddingVertical: 15,
    backgroundColor: '#0d90fc',
  },
  appButtonText: {
    fontSize: 28,
    color: 'white',
    alignSelf: 'center',
  },
});
