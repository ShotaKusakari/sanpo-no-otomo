import { supabase } from '@/supabase/supabase';
import { NextResponse } from 'next/server';
import { Database } from '@/../database.types';

type Weather = Database['public']['Tables']['weather_types']['Row'];

export async function fetchWeatherData(): Promise<NextResponse> {
  try {
    const { data, error } = await supabase
      .from('weather_types')
      .select('*');

    if (error) {
      if (process.env.NODE_ENV !== 'production') {
        console.error('Error fetching weather data:', error.message);
      }
      return NextResponse.json({
        error: error.message,
        details: error,
        status: 500
      });
    }

    return NextResponse.json({
      data: data as Weather[],
      status: 200
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    if (process.env.NODE_ENV !== 'production') {
      console.error('Unexpected error:', errorMessage);
    }
    return NextResponse.json({
      error: errorMessage,
      status: 500
    });
  }
}
