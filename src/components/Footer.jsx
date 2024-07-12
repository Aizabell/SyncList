import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors} from '../constants/colors';
import {fontFamilies} from '../constants/fonts';
import {fontSize, iconSizes, spacing} from '../constants/dimensions';

import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Footer = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <View style={styles.menu}>
          {/* Icons */}
          <AntDesign
            name={'home'}
            color={colors.iconPrimary}
            size={iconSizes.lg}
          />
          <Text style={styles.menuText}>Home</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.menu}>
          <MaterialIcons
            name={'favorite-border'}
            color={colors.iconPrimary}
            size={iconSizes.lg}
          />
          <Text style={styles.menuText}>Favorite</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.menu}>
          <MaterialIcons
            name={'library-music'}
            color={colors.iconPrimary}
            size={iconSizes.lg}
          />
          <Text style={styles.menuText}>Library</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.menu}>
          <AntDesign
            name={'setting'}
            color={colors.iconPrimary}
            size={iconSizes.lg}
          />
          <Text style={styles.menuText}>Settings</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    flexDirection: 'row',

    height: 100,
  },
  menuText: {
    padding: 10,
    marginTop: -5,
    color: colors.textPrimary,
    fontSize: fontSize.md,
    fontFamily: fontFamilies.bold,
    borderBottomColor: colors.textPrimary,
    borderBottomWidth: 1,
  },

  menu: {
    alignItems: 'center',
    paddingTop: spacing.md,
  },
});
