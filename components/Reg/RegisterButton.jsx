import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';

const RegisterButton = ({
  image,
  text,
  handlePress,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={handlePress}
        style={styles.appButtonContainer}>
          <Image
            source={image}
            style={
              text === 'Email'
                ? styles.emailImage
                : styles.image
            }
          />
        <Text style={styles.appButtonText}>
          Sign up with {text}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',

  },
  appButtonContainer: {
    elevation: 8,
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: 16,
    flexDirection: 'row',
    borderColor: '#000000',
    borderWidth: 1,
    height: 50,
    backgroundColor: '#ffffff',
    marginTop: 10,
    marginBottom: 10,
  },
  image: {
    height: 30,
    width: 30,
    marginRight: 10,
  },
  emailImage: {
    height: 18,
    width: 24,
    marginRight: 10,

  },
  appButtonText: {
    fontSize: 20,
    alignSelf: 'center',
    marginLeft: 10,
  },
});
