import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {fontSize, spacing} from '../constants/dimensions';
import SongCard from './SongCard';

import {fontFamilies} from '../constants/fonts';
import TrackPlayer from 'react-native-track-player';
import {useTheme} from '@react-navigation/native';

const CardFlexD = ({item}) => {
  const {colors} = useTheme();
  const handlePlayTrack = async (selectedTrack, songs = item.songs) => {
    // console.log("selectedTrack: ", selectedTrack);
    // const songs = item.songs; //array of songs
    const trackIndex = songs.findIndex(
      track => track.url === selectedTrack.url,
    );
    if (trackIndex === -1) {
      return;
    }
    const beforeTracks = songs.slice(0, trackIndex);
    const afterTracks = songs.slice(trackIndex + 1);
    await TrackPlayer.reset();
    await TrackPlayer.add(selectedTrack);
    await TrackPlayer.add(afterTracks);
    await TrackPlayer.add(beforeTracks);

    await TrackPlayer.play();
  };
  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      <Text style={[styles.headingText, {color: colors.textPrimary}]}>
        {item.title}
      </Text>
      <FlatList
        data={item.songs}
        renderItem={({item}) => (
          <SongCard
            item={item}
            handlePlay={selectedTrack => {
              handlePlayTrack(selectedTrack);
            }}
          />
        )}
        horizontal={true}
        ItemSeparatorComponent={<View style={{marginHorizontal: spacing.sm}} />}
        contentContainerStyle={{
          paddingHorizontal: spacing.lg,
        }}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default CardFlexD;

const styles = StyleSheet.create({
  headingText: {
    fontSize: fontSize.xl,
    // color: colors.textPrimary,
    fontFamily: fontFamilies.bold,
    marginVertical: spacing.lg,
    paddingHorizontal: spacing.lg,
  },
  container: {
    flex: 1,
    // backgroundColor: colors.background,
    paddingHorizontal: spacing.lg,
  },
});
