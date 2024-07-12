import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {iconSizes} from '../constants/dimensions';
import {colors} from '../constants/colors';
import {useTrackPlayerRepeatMode} from '../../hooks/useTrackPlayerRepeatMode';
import {RepeatMode} from 'react-native-track-player';

const repeatOrder = [RepeatMode.Off, RepeatMode.Track, RepeatMode.Queue];

const PlayerRepeatToggle = () => {
  const {repeatMode, changeRepeatMode} = useTrackPlayerRepeatMode();

  const toggleRepeatMode = () => {
    if (repeatMode == null) {
      return;
    }
    const currentIndex = repeatOrder.indexOf(repeatMode);
    const nextIndex = (currentIndex + 1) % repeatOrder.length;
    changeRepeatMode(nextIndex);
  };

  let iconName = 'repeat';

  switch (repeatMode) {
    case RepeatMode.Off:
      iconName = 'repeat-off';
      break;
    case RepeatMode.Queue:
      iconName = 'repeat';
      break;
    case RepeatMode.Track:
      iconName = 'repeat-once';
      break;
  }

  return (
    <TouchableOpacity onPress={toggleRepeatMode}>
      <MaterialCommunityIcons
        name={iconName}
        color={colors.iconSecondary}
        size={iconSizes.lg}
      />
    </TouchableOpacity>
  );
};

export default PlayerRepeatToggle;

const styles = StyleSheet.create({});
