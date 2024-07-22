import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';


//icons

import {fontSize, iconSizes, spacing} from '../constants/dimensions';
import Header from '../components/Header';
import {fontFamilies} from '../constants/fonts';
import SongCard from '../components/SongCard';
import CardFlexD from '../components/CardFlexD';
import FloatingPlayer from '../components/FloatingPlayer';
import Footer from '../components/Footer';
import {songsWithCategory} from '../../data/songWithCategory';
import { useTheme } from '@react-navigation/native';

const HomeScreen = () => {
  const {colors} =useTheme();
  return (
    <View style={[styles.container,{backgroundColor:colors.background}]}>
      <Header />
      <FlatList
        data={songsWithCategory}
        renderItem={({item}) => <CardFlexD item={item}/>}
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
    
    flex: 1,
  },
});
