import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
// import {colors} from '../constants/colors';
import {fontSize, iconSizes, spacing} from '../constants/dimensions';
import {
  GotoNextButton,
  GotoPreviousButton,
  PlayPauseButton,
} from './PlayerControls';
import {fontFamilies} from '../constants/fonts';
import {useSharedValue} from 'react-native-reanimated';
import {Slider} from 'react-native-awesome-slider';
import MovingText from './MovingText';
import {useNavigation, useTheme} from '@react-navigation/native';
import TrackPlayer, {
  useActiveTrack,
  useProgress,
} from 'react-native-track-player';

const imageUrl =
  'https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/001/685/325x325/feel-like-1716544854-pYxFtraNxA.jpg';

const FloatingPlayer = () => {
  const {colors} =useTheme();
  const activeTrack = useActiveTrack();
  const navigation = useNavigation();
  const progress = useSharedValue(0);
  const min = useSharedValue(0);
  const max = useSharedValue(1);
  // const {position, duration} = useTrackPlayerProgress();
  const {duration, position} = useProgress();

  const isSliding = useSharedValue(false);

  if (!isSliding.value) {
    progress.value = duration > 0 ? position / duration : 0;
  }

  const handleOpenPlayerScreen = () => {
    navigation.navigate('PLAYER_SCREEN');
  };
  if (!activeTrack) {
    return null;
  }
  return (
    <View>
      {/* Slider Component */}
      <View
        style={{
          zIndex: 1,
        }}
      >
        <Slider
          style={styles.container}
          progress={progress}
          minimumValue={min}
          maximumValue={max}
          theme={{
            // disableMinTrackTintColor: '#fff',
            maximumTrackTintColor: colors.maximumTintColor,
            minimumTrackTintColor: colors.minimumTintColor,
          }}
          containerStyle={{}}
          renderThumb={() => <View />}
          renderBubble={() => <View />}
          onSlidingStart={() => (isSliding.value = true)}
          onValueChange={async (value) => {
            await TrackPlayer.seekTo(value * duration);
          }}
          onSlidingComplete={async (value) => {
            if (!isSliding.value) {
              return;
            }
            isSliding.value = false;
            await TrackPlayer.seekTo(value * duration);
          }}
          // renderThumb={} //Slider icon changing
          // renderBubble={() => (
          //   <View>
          //3:21:22
          //     <Text>This is bubble rending text</Text>
          //   </View>
          // )}
        />
      </View>

      {/* Player Component */}
      <TouchableOpacity
        style={styles.container}
        activeOpacity={0.85}
        onPress={handleOpenPlayerScreen}
      >
        <Image
          source={{uri: activeTrack.artwork}}
          style={styles.coverImage}
        ></Image>
        <View style={styles.titleContainer}>
          <MovingText
            text={activeTrack.title}
            animationThreshold={15}
            style={[styles.title,{color: colors.textPrimary,}]}
          />
          {/* <Text style={styles.title}>Feel Like</Text> */}
          <Text style={[styles.subtitle,{color: colors.textSecondary,}]}>{activeTrack.artist}</Text>
        </View>
        <View style={styles.playerControlContainer}>
          <GotoPreviousButton size={iconSizes.md} />
          <PlayPauseButton size={iconSizes.md} />
          <GotoNextButton size={iconSizes.md} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default FloatingPlayer;

const styles = StyleSheet.create({
  container: {
    bottom: 0,
    left: 0,
    right: 0,
    height: 70,
    // backgroundColor: colors.background,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 0,
  },
  coverImage: {
    height: 70,
    width: 70,
    resizeMode: 'cover',
  },
  title: {
    // color: colors.textPrimary,
    fontSize: fontSize.lg,
    fontFamily: fontFamilies.medium,
  },
  subtitle: {
    // color: colors.textSecondary,
    fontSize: fontSize.md,
    fontFamily: fontFamilies.medium,
  },
  titleContainer: {
    flex: 1,
    paddingHorizontal: spacing.sm,
    overflow: 'hidden',
    marginLeft: spacing.sm,
    marginRight: spacing.lg,
  },
  playerControlContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: spacing.md,
    gap: 20,
  },
});
