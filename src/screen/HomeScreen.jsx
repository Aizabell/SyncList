import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors} from '../constants/colors';

//icons

import {fontSize, iconSizes, spacing} from '../constants/dimensions';
import Header from '../components/Header';
import {fontFamilies} from '../constants/fonts';
import SongCard from '../components/SongCard';
import CardFlexD from '../components/CardFlexD';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <CardFlexD />
      <CardFlexD />

      {/* <SongCard /> */}
      {/* <SongCard />
      <SongCard />
      <SongCard /> */}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
  },
});
