# 本ブランチのプッシュ内容

*   各テーブルのプライマリーキーをINTEGER型からUUID型に変更しました。
*   `seed.sql` にテストデータをインサートするSQL文を作成しました。

## seed.sql

```sql
-- topicsテーブルにテストデータを挿入
INSERT INTO topics (id, title, created_at, is_deleted) VALUES
(1, '赤いものを探す', NOW(), FALSE),
(2, '面白い場所を見つける', NOW(), FALSE),
(3, '今日のラッキーカラーを探す', NOW(), FALSE);

-- weather_typesテーブルにテストデータを挿入
INSERT INTO weather_types (id, name) VALUES
(1, '晴れ'),
(2, '曇り'),
(3, '雨');

-- topic_weathersテーブルにテストデータを挿入
INSERT INTO topic_weathers (topic_id, weather_id) VALUES
(1, 1),
(2, 2),
(3, 3);
```