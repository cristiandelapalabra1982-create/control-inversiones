import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://gzgonuhiyoifsmcukjbu.supabase.co'

const supabaseKey = 'sb_publishable_NW7gfAwI1rWcyrX18o8uvA_AvVq5aEj'

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
)