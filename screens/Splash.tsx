import React from 'react';
import { StyleSheet, View, Image } from 'react-native';


const Splash = () => {
  return (
    <View style={[styles.container]}>
      <Image
        source={require('../assets/Images/FavAnswerLogo.png')}
        style={[
          styles.image,
          {
            resizeMode: 'contain',
            transform: [{translateY: -65}],
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    justifyContent: 'center',
    width: 300,
  },
});

export default Splash;
