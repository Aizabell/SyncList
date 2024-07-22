import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

import {fontFamilies} from '../constants/fonts';
import {fontSize, iconSizes, spacing} from '../constants/dimensions';

import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation, useTheme} from '@react-navigation/native';

const Footer = () => {
  const {colors} =useTheme();
  const navigation = useNavigation();

  const openHome = () => {
    navigation.navigate('HOME_SCREEN');
  };
  const openFavorite = () => {
    navigation.navigate('LIKE_SCREEN');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={openHome}>
        <View style={styles.menu}>
          {/* Icons */}
          <AntDesign
            name={'home'}
            color={colors.iconPrimary}
            size={iconSizes.lg}
          />
          <Text style={[styles.menuText,{color: colors.textPrimary,borderBottomColor: colors.textPrimary,}]}>Home</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={openFavorite}>
        <View style={styles.menu}>
          <MaterialIcons
            name={'favorite-border'}
            color={colors.iconPrimary}
            size={iconSizes.lg}
          />
          <Text style={[styles.menuText,{color: colors.textPrimary,borderBottomColor: colors.textPrimary,}]}>Favorite</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.menu}>
          <MaterialIcons
            name={'library-music'}
            color={colors.iconPrimary}
            size={iconSizes.lg}
          />
          <Text style={[styles.menuText,{color: colors.textPrimary,borderBottomColor: colors.textPrimary,}]}>Library</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.menu}>
          <AntDesign
            name={'setting'}
            color={colors.iconPrimary}
            size={iconSizes.lg}
          />
          <Text style={[styles.menuText,{color: colors.textPrimary,borderBottomColor: colors.textPrimary,}]}>Settings</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    flexDirection: 'row',

    height: 100,
  },
  menuText: {
    padding: 10,
    marginTop: -5,
    // color: colors.textPrimary,
    fontSize: fontSize.md,
    fontFamily: fontFamilies.bold,
    // borderBottomColor: colors.textPrimary,
    borderBottomWidth: 1,
  },

  menu: {
    alignItems: 'center',
    paddingTop: spacing.md,
  },
});
