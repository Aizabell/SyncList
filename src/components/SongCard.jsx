import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {fontSize, spacing} from '../constants/dimensions';
import {colors} from '../constants/colors';
import {fontFamilies} from '../constants/fonts';

const imageUrl =
  'https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/001/705/325x325/stay-focused-1719273658-kf8QDsv02M.jpg';

const SongCard = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={{uri: imageUrl}} style={styles.coverImage} />
      <Text style={styles.title}>Stay Focused</Text>
      <Text style={styles.artist}>Artino, Jesse</Text>
    </TouchableOpacity>
  );
};

export default SongCard;

const styles = StyleSheet.create({
  container: {
    height: 250,
    width: 250,
    alignItems: 'center',

    marginVertical: spacing.lg,
  },
  coverImage: {
    width: 250,
    height: 250,
    borderRadius: 10,
  },
  title: {
    color: colors.textPrimary,
    fontFamilies: fontFamilies.medium,
    textAlign: 'center',
    fontSize: fontSize.lg,
    padding: spacing.sm,
  },
  artist: {
    color: colors.textSecondary,
    fontFamilies: fontFamilies.regular,
    fontSize: fontSize.md,
    textAlign: 'center',
  },
});
