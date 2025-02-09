import {StyleSheet, Text, View, Image, useWindowDimensions} from 'react-native';
import React from 'react';

const SlideItem = ({item}) => {
  const {width} = useWindowDimensions();

  return (
    <View style={[styles.container, {width}]}>
      <View
        style={[
          styles.details,
          item.id === '2' && {
            justifyContent: 'flex-end',
          },
        ]}>
        <Text style={[styles.title, {textAlign: item.styles.textAlign}]}>
          {item.title}
        </Text>

        <Text style={[styles.description, {textAlign: item.styles.textAlign}]}>
          {item.description}
        </Text>
      </View>

      <Image
        source={require('../../assets/Intro/AppIntroBlob.png')}
        style={{
          width,
          resizeMode: 'contain',
          position: item.styles.blobPosition.position,
          top: item.styles.blobPosition.top,
          left: item.styles.blobPosition.left,
        }}
      />

      <Image
        source={item.image}
        style={{
          resizeMode: 'contain',
          transform: item.styles.imagePosition.transform,
          position: item.styles.imagePosition.position,
          top: item.styles.imagePosition.top,
          left: item.styles.imagePosition.left,
          bottom: item.styles.imagePosition.bottom,
        }}
      />
    </View>
  );
};

export default SlideItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  details: {
    flex: 1,
    width: 315,
  },
  title: {
    fontWeight: '700',
    fontSize: 28,
    color: 'black',
    marginBottom: 10,
  },
  description: {
    fontWeight: '300',
    color: 'black',
  },
});
