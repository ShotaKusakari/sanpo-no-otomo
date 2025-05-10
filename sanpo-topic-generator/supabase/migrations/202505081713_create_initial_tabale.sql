CREATE TABLE topics (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT now(),
  is_deleted BOOLEAN DEFAULT FALSE
);

CREATE TABLE categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT UNIQUE NOT NULL
);

CREATE TABLE weather_types (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT UNIQUE NOT NULL
);

CREATE TABLE topic_categories (
  topic_id UUID,
  category_id UUID,
  PRIMARY KEY (topic_id, category_id),
  FOREIGN KEY (topic_id) REFERENCES topics(id),
  FOREIGN KEY (category_id) REFERENCES categories(id)
);

CREATE TABLE topic_weathers (
  topic_id UUID,
  weather_id UUID,
  PRIMARY KEY (topic_id, weather_id),
  FOREIGN KEY (topic_id) REFERENCES topics(id),
  FOREIGN KEY (weather_id) REFERENCES weather_types(id)
);