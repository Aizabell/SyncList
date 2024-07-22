import supabase from '../supabaseClient';

export const fetchSongs = async () => {
  const {data, error} = await supabase.from('songs').select('*');

  if (error) {
    console.error('Error fetching songs:', error);
    return [];
  }

  return data;
};
