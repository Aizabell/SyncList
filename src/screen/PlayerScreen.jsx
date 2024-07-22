import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
// import {colors} from '../constants/colors';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import {fontSize, iconSizes, spacing} from '../constants/dimensions';
import {fontFamilies} from '../constants/fonts';
import PlayerRepeatToggle from '../components/PlayerRepeatToggle';
import PlayerShuffleToggle from '../components/PlayerShuffleToggle';
import PlayerProgressBar from '../components/PlayerProgressBar';
import {
  GotoNextButton,
  GotoPreviousButton,
  PlayPauseButton,
} from '../components/PlayerControls';
import TrackPlayer, {useActiveTrack} from 'react-native-track-player';
import {useNavigation, useTheme} from '@react-navigation/native';
import useLikeSongs from '../store/likeStore';
import {isExist} from '../utils';

const PlayerScreen = () => {
  const {colors} =useTheme();
  const {likedSongs, addToLiked} = useLikeSongs();
  const navigation = useNavigation();
  const activeTrack = useActiveTrack();
  const isLiked = false;
  const [isMute, setIsMute] = useState(false);

  useEffect(() => {
    setVolume();
  }, []);

  const setVolume = async () => {
    const volume = await TrackPlayer.getVolume();
    setIsMute(volume === 0 ? true : false);
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  if (!activeTrack) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: colors.background,
        }}
      >
        <ActivityIndicator size={'large'} color={colors.iconPrimary} />
      </View>
    );
  }
  const handleToggleVolume = () => {
    TrackPlayer.setVolume(isMute ? 1 : 0);
    setIsMute(!isMute);
  };

  return (
  <View style={[styles.container,{backgroundColor: colors.background,}]}>
      {/* header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={handleGoBack}>
          <AntDesign
            name={'arrowleft'}
            color={colors.iconPrimary}
            size={iconSizes.md}
          />
        </TouchableOpacity>
        <Text style={[styles.headerText,{color: colors.textPrimary,}]}>Playing Now</Text>
      </View>
      {/* image */}
      <View style={styles.coverImageContainer}>
        <Image source={{uri: activeTrack.artwork}} style={styles.coverImage} />
      </View>
      {/* title */}
      <View style={styles.titleMainContainer}>
        <View style={styles.titleInfoContainer}>
          <Text style={[styles.title,{color: colors.textPrimary,}]}>{activeTrack.title}</Text>
          <Text style={[styles.artist,{color: colors.textSecondary,}]}>{activeTrack.artist}</Text>
        </View>
        {/* icon */}
        <TouchableOpacity onPress={() => addToLiked(activeTrack)}>
          <AntDesign
            name={isExist(likedSongs,activeTrack) ? 'heart' : 'hearto'}
            color={colors.iconSecondary}
            size={iconSizes.md}
          />
        </TouchableOpacity>
      </View>
      {/* player control */}
      <View style={styles.playerControlContainer}>
        <TouchableOpacity
          style={styles.volumeWrapper}
          onPress={handleToggleVolume}
        >
          <Feather
            name={isMute ? 'volume-x' : 'volume-1'}
            color={colors.iconSecondary}
            size={iconSizes.lg}
          />
        </TouchableOpacity>

        <View style={styles.queueOrderWrapper}>
          <PlayerRepeatToggle />
          <PlayerShuffleToggle />
        </View>
      </View>
      {/* ProgressBar */}
      <View style={styles.progressBarWrapper}>
        <PlayerProgressBar />
      </View>
      <View style={styles.playerContainer}>
        <GotoPreviousButton size={iconSizes.xl} />
        <PlayPauseButton size={iconSizes.xl} />
        <GotoNextButton size={iconSizes.xl} />
      </View>
    </View>
  );
};

export default PlayerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: colors.background,
    padding: spacing.lg,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  headerText: {
    flex: 1,
    // color: colors.textPrimary,
    textAlign: 'center',
    fontSize: fontSize.lg,
    fontFamily: fontFamilies.medium,
  },
  coverImageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: spacing.xl,
  },
  coverImage: {
    height: 300,
    width: 300,
    borderRadius: 10,
  },
  title: {
    fontSize: fontSize.xl,
    // color: colors.textPrimary,
    fontFamily: fontFamilies.medium,
  },
  artist: {
    fontSize: fontSize.lg,
    // color: colors.textSecondary,
    fontFamily: fontFamilies.medium,
  },
  titleMainContainer: {
    flexDirection: 'row',
    alignItems: 'center',

    marginVertical: spacing.md,
  },
  titleInfoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: spacing.md,
  },
  playerControlContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: spacing.lg,
  },
  volumeWrapper: {
    flex: 1,
  },
  queueOrderWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: spacing.md,
    marginHorizontal: spacing.md,
  },
  playerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: spacing.lg,
    gap: spacing.lg,
  },
});
