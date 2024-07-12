import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import {colors} from '../constants/colors';
import {fontSize, iconSizes, spacing} from '../constants/dimensions';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {fontFamilies} from '../constants/fonts';

const CustomDrawerContent = props => {
  const isDarkMode = true;
  const toggleDrawer = () => {
    props.navigation.toggleDrawer();
  };
  return (
    <DrawerContentScrollView style={styles.container}>
      {/* <DrawerItemList {...props} /> */}
      <View style={styles.headerIconContainer}>
        <TouchableOpacity onPress={toggleDrawer}>
          <AntDesign
            name={'close'}
            color={colors.iconSecondary}
            size={iconSizes.lg}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Octicons
            name={isDarkMode ? 'moon' : 'sun'}
            color={colors.iconPrimary}
            size={iconSizes.lg}
          />
        </TouchableOpacity>
      </View>
      {/* menu item container */}
      <View style={styles.drawerItemContainer}>
        <DrawerItem
          label={'Profile'}
          icon={() => (
            <FontAwesome
              name={'user'}
              color={colors.iconPrimary}
              size={iconSizes.md}
            />
          )}
          labelStyle={styles.labelStyle}
          style={styles.drawItem}
        />
        <DrawerItem
          label={'Favorite'}
          icon={() => (
            <FontAwesome
              name={'heart'}
              color={colors.iconPrimary}
              size={iconSizes.md}
            />
          )}
          labelStyle={styles.labelStyle}
          style={styles.drawItem}
          onPress={() => {
            props.navigation.navigate('LIKE_SCREEN');
          }}
        />
        <DrawerItem
          label={'Language'}
          icon={() => (
            <FontAwesome
              name={'language'}
              color={colors.iconPrimary}
              size={iconSizes.md}
            />
          )}
          labelStyle={styles.labelStyle}
          style={styles.drawItem}
          onPress={() => {
            props.navigation.navigate('LIKE_SCREEN');
          }}
        />
        <DrawerItem
          label={'Contact Us'}
          icon={() => (
            <FontAwesome
              name={'envelope-o'}
              color={colors.iconPrimary}
              size={iconSizes.md}
            />
          )}
          labelStyle={styles.labelStyle}
          style={styles.drawItem}
          onPress={() => {
            props.navigation.navigate('LIKE_SCREEN');
          }}
        />
        <DrawerItem
          label={'FAQ'}
          icon={() => (
            <FontAwesome
              name={'question-circle-o'}
              color={colors.iconPrimary}
              size={iconSizes.md}
            />
          )}
          labelStyle={styles.labelStyle}
          style={styles.drawItem}
          onPress={() => {
            props.navigation.navigate('LIKE_SCREEN');
          }}
        />
        <DrawerItem
          label={'Settings'}
          icon={() => (
            <FontAwesome
              name={'cog'}
              color={colors.iconPrimary}
              size={iconSizes.md}
            />
          )}
          labelStyle={styles.labelStyle}
          style={styles.drawItem}
          onPress={() => {
            props.navigation.navigate('LIKE_SCREEN');
          }}
        />
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    padding: spacing.lg,
  },
  headerIconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: spacing.md,
  },
  drawerItemContainer: {
    marginVertical: spacing.xl,
  },
  labelStyle: {
    fontSize: fontSize.md,
    color: colors.textPrimary,
    fontFamily: fontFamilies.medium,
  },
  drawItem: {
    marginVertical: spacing.sm,
  },
});
