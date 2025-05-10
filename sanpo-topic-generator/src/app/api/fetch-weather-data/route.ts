import { supabase } from '@/supabase/supabase';
import { NextResponse } from 'next/server';
import { Weather } from '@/types';

export async function GET() {
  try {
    const { data, error } = await supabase
      .from('weather_types')
      .select('*');

    if (error) {
      console.error('Error fetching weather data:', error);
      return NextResponse.json(
        { error: 'Failed to fetch weather data' },
        { status: 500 }
      );
    }

    return NextResponse.json(data as Weather[]);
  } catch (error) {
    console.error('Unexpected error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
