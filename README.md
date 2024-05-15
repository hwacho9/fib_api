# fib_api

## modules

-   express
-   dotenv
-   supertest

## Versions

-   node 18.17.0

## Installation

`npm install` でプロジェクトの依存関係にあるライブラリ等を全てインストールする。

Type `npm install` into your console to install all necessary dependencies for this project.

## API TEST

`curl -X GET "http://15.168.8.48:8080/fib?n="`

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
