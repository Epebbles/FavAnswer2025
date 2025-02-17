import {Animated, FlatList, StyleSheet, View} from 'react-native';
import React, {useRef, useState} from 'react';

import IntroSlides from './IntroSlides';
import NextButton from './NextButton';
import Paginator from './Paginator';
import SlideItem from './SlideItem';

// Here is the link to the video tutorial I followed to build this FlatList/Carousel out, please reference the video in you would like to make any further custom changes:
// Part 1: https://www.youtube.com/watch?v=r2NJJye0XnM&t=1s
// Part 2: https://www.youtube.com/watch?v=Efy48Uoa4RM

const IntroCarousel = ({navigation}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);
  const viewableItemsChanged = useRef(({viewableItems}) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;

  const scrollTo = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <View style={{flex: 0.85}}>
        <FlatList
          data={IntroSlides}
          renderItem={({item}) => <SlideItem item={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          keyExtractor={item => item.id}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {
              useNativeDriver: false,
            },
          )}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slidesRef}
        />
      </View>

      <View style={styles.navigator}>
        <Paginator data={IntroSlides} scrollX={scrollX} />

        <NextButton
          title={currentIndex === 2 ? "Let's Get Started!" : 'Skip'}
          scrollTo={scrollTo}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECECEC',
    justifyContent: 'center',
  },
  navigator: {
    flex: 0.15,
    alignItems: 'center',
    marginTop: 30,
  },
});

export default IntroCarousel;
