import { supabase } from '@/supabase/supabase';
import { NextResponse } from 'next/server';
import { Topic } from '@/types';

export async function POST(request: Request) {
  try {
    const { weatherId } = await request.json();

    if (!weatherId) {
      return NextResponse.json(
        { error: 'weatherId is required' },
        { status: 400 }
      );
    }

    // 天気に紐づくtopic_idをランダムに1件取得
    const { data: topicWeather, error: topicWeatherError } = await supabase
      .from('topic_weathers')
      .select('topic_id')
      .eq('weather_id', weatherId)
      .order('random()')
      .limit(1)
      .single();

    if (topicWeatherError) {
      console.error('Error fetching topic_weather:', topicWeatherError);
      return NextResponse.json(
        { error: 'Failed to fetch topic' },
        { status: 500 }
      );
    }

    // 対応するお題を取得
    const { data: topic, error: topicError } = await supabase
      .from('topics')
      .select('*')
      .eq('id', topicWeather.topic_id)
      .single();

    if (topicError) {
      console.error('Error fetching topic:', topicError);
      return NextResponse.json(
        { error: 'Failed to fetch topic' },
        { status: 500 }
      );
    }

    return NextResponse.json(topic as Topic);
  } catch (error) {
    console.error('Unexpected error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
