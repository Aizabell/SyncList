import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {colors} from '../constants/colors';
import {fontSize, iconSizes, spacing} from '../constants/dimensions';
import {logos} from '../constants/logos';
import {fontFamilies} from '../constants/fonts';
import {useNavigation} from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();
  const toggleDrawer = () => {
    navigation.toggleDrawer();
  };
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.icon} onPress={toggleDrawer}>
        <FontAwesome5
          name={'grip-lines'}
          color={colors.iconPrimary}
          size={iconSizes.lg}
        />
      </TouchableOpacity>
      <View style={styles.logoWrapper}>
        <Image
          source={require('../../assets/logos/SyncListLogo.png')}
          style={styles.logoImage}
        />
        <Text style={styles.title}>SYNCLIST</Text>
      </View>

      <TouchableOpacity style={styles.icon}>
        <AntDesign
          name={'search1'}
          color={colors.iconPrimary}
          size={iconSizes.lg}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.lg,
  },
  logoImage: {
    marginTop: spacing.sm,
    height: 90,
    width: 90,
    resizeMode: 'contain',
    alignItems: 'center',
    marginRight: -8,
  },
  title: {
    color: colors.textPrimary,
    fontFamily: fontFamilies.bold,
    fontSize: fontSize.xl,
    paddingTop: spacing.sm,
    textAlign: 'center',
    marginLeft: -8,
  },
  logoWrapper: {
    flexDirection: 'row',
    marginLeft: -10,
    alignItems: 'center',
  },
});
