import {newReleases, popularSongs, recommendedSongs} from './songs';

export const songsWithCategory = [
  {
    // Database Password=> Sync@List123
    title: 'Recommended for You',
    songs: recommendedSongs,
  },
  {
    // Database Password=> Sync@List123
    title: 'New Releases',
    songs: newReleases,
  },
  {
    // Database Password=> Sync@List123
    title: 'Popular Songs',
    songs: popularSongs,
  },
];
