import React, { useState, useRef } from 'react';
import { View, StyleSheet, Dimensions, SafeAreaView } from 'react-native';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import Video from 'react-native-video';
import BottomTabNavigator from '../components/BottomNavigator';

const { width, height } = Dimensions.get('window');
const BOTTOM_NAV_HEIGHT = 60; 

const videos = [
  require('../assets/videos/vid1.mp4'),
  require('../assets/videos/vid2.mp4'),
  require('../assets/videos/vid3.mp4'),
];

const InfoPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRefs = useRef(videos.map(() => React.createRef()));

  const handleSwipe = ({ index }) => {
    setCurrentIndex(index);
    
    videoRefs.current.forEach((ref, idx) => {
      if (ref.current) {
        if (idx === index) {
          ref.current.seek(0);
          ref.current.resume();
        } else {
          ref.current.seek(0);
          ref.current.pause();
        }
      }
    });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.mainContainer}>
        <View style={styles.videoContainer}>
          <SwiperFlatList
            autoplay={false}
            vertical
            showPagination={false}
            onChangeIndex={handleSwipe}
            data={videos}
            renderItem={({ item, index }) => (
              <View style={styles.slide}>
                <View style={styles.videoWrapper}>
                  <Video
                    ref={videoRefs.current[index]}
                    source={item}
                    style={styles.video}
                    resizeMode="stretch" // Changed to stretch to ensure full coverage
                    repeat={true}
                    paused={currentIndex !== index}
                    onError={(error) => console.log('Video Error:', error)}
                    onEnd={() => {
                      if (index === currentIndex && index < videos.length - 1) {
                        handleSwipe({ index: index + 1 });
                      }
                    }}
                  />
                </View>
              </View>
            )}
          />
        </View>
        <View style={styles.bottomNav}>
          <BottomTabNavigator />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#000',
  },
  mainContainer: {
    flex: 1,
    backgroundColor: '#000',
  },
  videoContainer: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: BOTTOM_NAV_HEIGHT, // Adjust space for bottom navigator
  },
  slide: {
    width,
    height: height - BOTTOM_NAV_HEIGHT,
    backgroundColor: '#1E1E1E',
  },
  videoWrapper: {
    flex: 1,
    overflow: 'hidden', // Ensures video stays within bounds
    backgroundColor: '#000',
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: BOTTOM_NAV_HEIGHT,
    backgroundColor: 'transparent',
  },
});

export default InfoPage;