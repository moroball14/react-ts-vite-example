# react-ts-vite-example

React + TypeScript + Vite のサンプルプロジェクトです。

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
