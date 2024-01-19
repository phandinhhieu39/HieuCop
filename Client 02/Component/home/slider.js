import React, { useRef, useEffect } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const SliderContainer = () => {
  const carouselRef = useRef(null);
  const slides = [
    {
      id: 1,
      image: require('../../assets/th.jpeg'),
    },
    {
      id: 2,
      image: require('../../assets/th1.jpeg'),
    },
    {
      id: 3,
      image: require('../../assets/th2.jpeg'),
    },
    // Add more slides as needed
  ];
  useEffect(() => {
    // Start autoplay when the component mounts
    startAutoplay();
  }, []);
  const startAutoplay = () => {
    carouselRef.current.startAutoplay();
  };
  const renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <Image source={item.image} style={styles.slideImage} />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Carousel
        ref={carouselRef} // Reference for controlling the carousel
        autoplay={true} // Enable autoplay
        autoplayInterval={3000} // Autoplay interval in milliseconds
        loop={true} // Enable infinite scrolling
        data={slides}
        renderItem={renderItem}
        sliderWidth={300}
        itemWidth={250}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    alignItems: 'center',
  },
  slide: {
    width: 250,
    height: 150,
    borderRadius: 10,
    overflow: 'hidden',
  },
  slideImage: {
    width: '100%',
    height: '100%',
  },
});

export default SliderContainer;