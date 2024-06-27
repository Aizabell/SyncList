import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {fontSize, spacing} from '../constants/dimensions';
import SongCard from './SongCard';
import {colors} from '../constants/colors';
import {fontFamilies} from '../constants/fonts';

const CardFlexD = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Recommended for You</Text>
      <FlatList
        data={[1, 2, 3, 4, 5]}
        renderItem={SongCard}
        horizontal={true}
        ItemSeparatorComponent={<View style={{marginHorizontal: spacing.sm}} />}
        contentContainerStyle={{
          paddingHorizontal: spacing.lg,
        }}
      />
    </View>
  );
};

export default CardFlexD;

const styles = StyleSheet.create({
  headingText: {
    fontSize: fontSize.xl,
    color: colors.textPrimary,
    fontFamily: fontFamilies.bold,
    marginVertical: spacing.lg,
    paddingHorizontal: spacing.lg,
  },
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: spacing.lg,
  },
});
