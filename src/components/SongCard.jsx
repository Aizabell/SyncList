import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import {fontSize, spacing} from "../constants/dimensions";
import {colors} from "../constants/colors";
import {fontFamilies} from "../constants/fonts";
import TrackPlayer from "react-native-track-player";

const imageUrl =
  "https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/001/705/325x325/stay-focused-1719273658-kf8QDsv02M.jpg";

const SongCard = ({item, containerStyle, imageStyle, handlePlay}) => {
  // const handlePlay = async (item) => {
  //   console.log("item: ", item);
  //   await TrackPlayer.add(item);
  //   await TrackPlayer.play();
  //   // try {
  //   //   console.log("item: ", item);
  //   //   await TrackPlayer.reset(); // Reset the player to ensure it's ready for a new track
  //   //   await TrackPlayer.add(item);
  //   //   await TrackPlayer.play();
  //   // } catch (error) {
  //   //   console.error("Error playing track:", error);
  //   // }
  // };
  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      onPress={() => handlePlay(item)}
    >
      <Image
        source={{uri: item.artwork}}
        style={[styles.coverImage, imageStyle]}
      />
      <Text style={styles.title} numberOfLines={1}>
        {item?.title}
      </Text>
      <Text style={styles.artist}>{item?.artist}</Text>
    </TouchableOpacity>
  );
};

export default SongCard;

const styles = StyleSheet.create({
  container: {
    height: 300,
    width: 250,
    alignItems: "center",
    marginVertical: spacing.lg,
  },
  coverImage: {
    width: 250,
    height: 250,
    borderRadius: 10,
    resizeMode: "cover",
  },
  title: {
    color: colors.textPrimary,
    fontFamilies: fontFamilies.medium,
    textAlign: "center",
    fontSize: fontSize.lg,
    padding: spacing.sm,
  },
  artist: {
    color: colors.textSecondary,
    fontFamilies: fontFamilies.regular,
    fontSize: fontSize.md,
    textAlign: "center",
  },
});
