CREATE TABLE topics (
  id INTEGER PRIMARY KEY,
  title TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT now(),
  is_deleted BOOLEAN DEFAULT FALSE
);

CREATE TABLE categories (
  id INTEGER PRIMARY KEY,
  name TEXT UNIQUE NOT NULL
);

CREATE TABLE weather_types (
  id INTEGER PRIMARY KEY,
  name TEXT UNIQUE NOT NULL
);

CREATE TABLE topic_categories (
  topic_id INTEGER,
  category_id INTEGER,
  PRIMARY KEY (topic_id, category_id),
  FOREIGN KEY (topic_id) REFERENCES topics(id),
  FOREIGN KEY (category_id) REFERENCES categories(id)
);

CREATE TABLE topic_weathers (
  topic_id INTEGER,
  weather_id INTEGER,
  PRIMARY KEY (topic_id, weather_id),
  FOREIGN KEY (topic_id) REFERENCES topics(id),
  FOREIGN KEY (weather_id) REFERENCES weather_types(id)
);