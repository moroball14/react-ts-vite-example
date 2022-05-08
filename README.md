# react-ts-vite-example

React + TypeScript + Vite のサンプルプロジェクトです。

# セットアップ

```
yarn
```

# テスト実施

```
yarn test
```

# アプリ起動(開発環境)

```
yarn dev
```

# ディレクトリ構成

```
src
├── App.css
├── App.tsx
├── db: databaseに関する情報
├── driver: 外部リソースへのアクセス
├── entity: ドメインに関係するモデル群
├── favicon.svg
├── index.css
├── logo.svg
├── main.tsx
├── presenter: viewに必要な情報を生成
│   └── hooks: presenterの役割を果たすためのhooks
├── repository: 外部リソースのデータとentity間のマッピング処理
├── use-case: アプリケーションロジック
├── view: 表示ロジック
│   ├── components: コンポーネント群
│   │   └── features
│   └── routes: ルーティングに関連する情報
└── vite-env.d.ts
```

# 参考

- [フロントエンドで Clean Architecture を適用してみる(+サンプルコード)](https://qiita.com/ttiger55/items/50d88e9dbf3039d7ab66)
- [Clean Architecture 　達人に学ぶソフトウェアの構造と設計](https://www.kadokawa.co.jp/product/301806000678/)

# 関連記事

- [React × TypeScript × Vite× ESLint × Prettier × Jest × GitHub Actions な環境を構築した](https://qiita.com/mball/items/224804386f671edf6cbc)
