# Supabase 初期環境構築

## 目的

本ブランチでのトピック生成

## ディレクトリ構造

```
supabase/
├── supabase.ts  # Supabaseクライアント初期化ファイル
├── seed.sql     # 初期データ投入スクリプト
└── migrations/  # スキーマ定義ファイル (テーブル定義をmigrationsに移動)
```

## ファイルの役割

*   `supabase.ts`: Supabaseクライアントを初期化し、exportする
*   `migrations/`: データベースのスキーマ定義を管理
*   `seed.sql`: 初期データ投入

## テーブル定義

### topics: お題テーブル

| カラム名     | 型        | 制約       | 説明             |
| ----------- | --------- | --------- | ---------------- |
| id          | INTEGER   | PRIMARY KEY | お題のID         |
| title       | TEXT      | NOT NULL  | お題の内容       |
| created_at  | DATETIME  | DEFAULT now() | 登録日時         |
| is_deleted  | BOOLEAN   | DEFAULT FALSE | 論理削除フラグ   |

### categories: カテゴリーテーブル (ジャンル)

| カラム名   | 型        | 制約       | 説明         |
| -------- | --------- | --------- | ------------ |
| id       | INTEGER   | PRIMARY KEY | ジャンルのID   |
| name     | TEXT      | UNIQUE NOT NULL | ジャンル名     |

### weather_types: 天気テーブル

| カラム名   | 型        | 制約       | 説明       |
| -------- | --------- | --------- | ---------- |
| id       | INTEGER   | PRIMARY KEY | 天気のID   |
| name     | TEXT      | UNIQUE NOT NULL | 天気名     |

### topic_categories: 中間テーブル (お題 × カテゴリー)

| カラム名       | 型        | 制約       | 説明                   |
| ------------- | --------- | --------- | ---------------------- |
| topic_id      | INTEGER   | FOREIGN KEY | 対応するお題のID         |
| category_id   | INTEGER   | FOREIGN KEY | 対応するカテゴリーID     |
| PRIMARY KEY   |           |           | (topic_id, category_id) |

### topic_weathers: 中間テーブル (お題 × 天気)

| カラム名     | 型        | 制約       | 説明               |
| ----------- | --------- | --------- | ------------------ |
| topic_id    | INTEGER   | FOREIGN KEY | 対応するお題のID     |
| weather_id  | INTEGER   | FOREIGN KEY | 対応する天気のID   |
| PRIMARY KEY |           |           | (topic_id, weather_id) |