# fib_api

フィボナッチ数を返す API

`フィボナッチ数`とは？
最初の二項が 1 で、第三項以降の項がすべて直前の二項の和になっている数列です。例として次のように 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89…のような数列となります。

## deploy
-   AWS EC2

## modules

-   express
-   dotenv
-   supertest

## Versions

-   node 18.17.0

## Installation

`npm install` でプロジェクトの依存関係にあるライブラリ等を全てインストールする。

Type `npm install` into your console to install all necessary dependencies for this project.

## ユニットテスト

```
npx jest
```

## API 実行コマンド

```
curl -X GET "https://sunghwa.site/fib?n=11"
```

## Directories

```
.
├─ README.md
├─ app.js
├─ .env
├─ .gitignore
├─ package-lock.json
├─ package.json
├─ server.js
└─ src
│  ├─ controllers
│  │  └─ fibonacciController.js
│  ├─ services
│  │  └─ fibonacchiService.js
│  └─ tests
│     ├─ fibonacchiController.test.js
│     └─ fibonacchiService.test.js

```

## Git Rules

### Prefixes

```
fix: バグ等の修正
feat: 新機能
refactor: 動作に影響のないコード変更
docs: ドキュメントのみの変更
style: スタイルのみの変更
perf: パフォーマンス向上関連の変更
chore: ライブラリ等の変更
test: テスト関連の変更
**!: 破壊的変更
```

### Branch Name

```
ex) {your_name}/feat_***
```

### Commit Message

```
ex) feat: xxxx
```
