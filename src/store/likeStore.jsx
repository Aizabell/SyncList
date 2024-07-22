import {create} from 'zustand';
import {isExist} from '../utils';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useLikeSongs = create((set) => ({
  likedSongs: [],
  addToLiked: async (newSong) => {
    set((state) => {
      let isAlreadyExist = isExist(state.likedSongs, newSong);

      const updatedSongs = isAlreadyExist
        ? state.likedSongs.filter((item) => item.url !== newSong.url)
        : [newSong, ...state.likedSongs];
      AsyncStorage.setItem('likedSongs', JSON.stringify(updatedSongs));
      return {
        likedSongs: updatedSongs,
      };
    });
  },
  loadLikedSongs: async () => {
    try {
      const likedSongs = await AsyncStorage.getItem('likedSongs');
      if (likedSongs) {
        set({likedSongs: JSON.parse(likedSongs)});
      }
    } catch (error) {}
  },
}));

export default useLikeSongs;
