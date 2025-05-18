import { supabase } from '@/supabase/supabase';
import { NextResponse } from 'next/server';
import { Database } from '@/../database.types';

type Topic = Database['public']['Tables']['topics']['Row'];

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const weatherId = searchParams.get('weatherId');

    if (!weatherId) {
      return NextResponse.json(
        { error: 'weatherId is required' },
        { status: 400 }
      );
    }

    // 天気に紐づくtopic_idをランダムに1件取得
    const { data: topicWeathers, error: topicWeatherError } = await supabase
      .from('topic_weathers')
      .select('topic_id')
      .eq('weather_id', weatherId);

    if (topicWeatherError || !topicWeathers || topicWeathers.length === 0) {
      // エラーハンドリング
      console.error('Error fetching topic_weathers:', topicWeatherError);
      return NextResponse.json({ error: 'Failed to fetch topic' }, { status: 500 });
    }

    // ランダムに1件選択
    const topicWeather = topicWeathers[Math.floor(Math.random() * topicWeathers.length)];

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