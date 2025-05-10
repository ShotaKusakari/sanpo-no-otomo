# feature/add_fetch_apisブランチ計画

## 1. APIエンドポイントのディレクトリ構造:

```
src/app/api/
├── fetch-weather-data/  # 天気の種類を取得するAPI
│   └── route.ts
└── topic/               # 天気に紐づくお題を取得するAPI
    └── fetch/           # お題を取得するAPI
        └── route.ts
```

## 2. APIエンドポイント:

*   `/api/fetch-weather-data`: 天気の種類をすべて取得するAPI。
    *   メソッド: `GET`
    *   レスポンス:
        ```json
        [
          { "id": "uuid", "name": "晴れ" },
          { "id": "uuid", "name": "曇り" },
          { "id": "uuid", "name": "雨" },
          ...
        ]
        ```
*   `/api/topic/fetch`: 指定された天気に紐づくお題をランダムに1件取得するAPI。
    *   メソッド: `POST`
    *   リクエストボディ:
        ```json
        {
          "weatherId": "uuid",
          "categoryId": "uuid" // カテゴリが増えた場合はここに追加
        }
        ```
    *   レスポンス:
        ```json
        { "id": "uuid", "title": "公園でピクニックをする" }
        ```

## 3. TypeScriptの型定義:

```typescript
// src/types/index.ts
export type Weather = {
  id: string;
  name: string;
};

export type Topic = {
  id: string;
  title: string;
};
```

## 4. 処理内容:

### /api/fetch-weather-data

*   **処理詳細:**
    1.  Supabaseクライアントを使用して、`weather_types`テーブルからすべてのレコードを取得します。
    2.  取得したレコードをJSON形式でレスポンスとして返します。
*   **リクエスト:**
    *   メソッド: `GET`
    *   リクエストボディ: なし
*   **レスポンス:**
    *   ステータスコード: `200 OK`
    *   レスポンスボディ:
        ```json
        [
          { "id": "uuid", "name": "晴れ" },
          { "id": "uuid", "name": "曇り" },
          { "id": "uuid", "name": "雨" },
          ...
        ]
        ```

### /api/topic/fetch

*   **処理詳細:**
    1.  リクエストボディから`weatherId`パラメータを取得します。
    2.  Supabaseクライアントを使用して、`topic_weathers`テーブルから`weather_id`が`weatherId`と一致するレコードをランダムに1件取得します。
    3.  取得したレコードの`topic_id`を使用して、`topics`テーブルから対応するお題を取得します。
    4.  取得したお題をJSON形式でレスポンスとして返します。
*   **リクエスト:**
    *   メソッド: `POST`
    *   リクエストボディ:
        ```json
        {
          "weatherId": "uuid",
          "categoryId": "uuid" // カテゴリが増えた場合はここに追加
        }
        ```
*   **レスポンス:**
    *   ステータスコード: `200 OK`
    *   レスポンスボディ:
        ```json
        { "id": "uuid", "title": "公園でピクニックをする" }
        ```

## 5. エラーハンドリング:

*   Supabaseからのデータ取得に失敗した場合、エラーログを出力し、適切なエラーレスポンスを返します (例: HTTPステータスコード500)。
*   無効な`weatherId`が指定された場合、エラーレスポンスを返します (例: HTTPステータスコード400)。