import React, {useEffect, useState} from 'react';
import {View, Text, Image, ActivityIndicator} from 'react-native';
import {fetchSongs} from '../utils/fetchSongs';

const songAPI = () => {
  const [songAPI, setSongsWithAPI] = useState([]);
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

      setSongsWithAPI(categories);
      setLoading(false);
    };

    loadSongs();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <View>
      {songAPI.map((category, index) => (
        <View key={index}>
          <Text>{category.title}</Text>
          {category.songs.map((song, songIndex) => (
            <View key={songIndex}>
              <Text>{song.title}</Text>
              <Text>{song.artist}</Text>
              <Image
                source={{uri: song.artwork}}
                style={{width: 100, height: 100}}
              />
            </View>
          ))}
        </View>
      ))}
    </View>
  );
};

export default songAPI;
