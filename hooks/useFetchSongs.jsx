// src/hooks/useFetchSongs.js
import {useState, useEffect} from 'react';
import {fetchSongs} from '../utils/fetchSongs';

const useFetchSongs = () => {
  const [songsWithCategory, setSongsWithCategory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadSongs = async () => {
      const recommendedSongs = await fetchSongs();

      const categories = [
        {
          title: 'Recommended for You',
          songs: recommendedSongs,
        },
        {
          title: 'New Releases',
          songs: recommendedSongs,
        },
        {
          title: 'Popular Songs',
          songs: recommendedSongs,
        },
      ];

      setSongsWithCategory(categories);
      setLoading(false);
    };

    loadSongs();
  }, []);

  return {songsWithCategory, loading};
};

export default useFetchSongs;
