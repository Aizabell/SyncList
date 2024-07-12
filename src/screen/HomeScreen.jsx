import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors} from '../constants/colors';

//icons

import {fontSize, iconSizes, spacing} from '../constants/dimensions';
import Header from '../components/Header';
import {fontFamilies} from '../constants/fonts';
import SongCard from '../components/SongCard';
import CardFlexD from '../components/CardFlexD';
import FloatingPlayer from '../components/FloatingPlayer';
import Footer from '../components/Footer';
import {songsWithCategory} from '../../data/songWithCategory';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={songsWithCategory}
        renderItem={CardFlexD}
        contentContainerStyle={{paddingBottom: 400}}
      />
      <FloatingPlayer />
      <Footer />
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
