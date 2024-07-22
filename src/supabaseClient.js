import {createClient} from '@supabase/supabase-js';

// Replace with your own Supabase URL and public API key
const supabaseUrl = 'https://your-supabase-url.supabase.co';
const supabaseKey = 'your-public-anon-key';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
