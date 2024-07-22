import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {StyleSheet, Text, useColorScheme, View} from 'react-native';
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigator from './src/navigation/DrawerNavigator';
import TrackPlayer from 'react-native-track-player';
import {useSetupPlayer} from './hooks/useSetupTrackPlayer';
import useLikeSongs from './src/store/likeStore';
import { lightTheme } from './src/theme/lightTheme';
import { darkTheme } from './src/theme/darkTheme';
import { useThemeStore } from './src/store/themeStore';

const App = () => {
  const scheme = useColorScheme();
  const {isDarkMode,toggleTheme}= useThemeStore((state)=>state);
  
  const {loadLikedSongs} = useLikeSongs();

  useEffect(() => {
    loadLikedSongs();
    scheme==="light"?toggleTheme(false): toggleTheme(true);
  }, [scheme]);

  const onLoad = () => {
    console.log('trackplayer setupp');
    // loadLikedSongs();
  };
  useSetupPlayer({onLoad});
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer theme={isDarkMode? darkTheme:lightTheme}>
        {/* <StackNavigation /> */}
        
        <DrawerNavigator />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;

const styles = StyleSheet.create({});
