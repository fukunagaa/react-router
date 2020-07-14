# react-router-training
react-routerの基礎を学ぶプロジェクト

## プロジェクト作成
- ディレクトリ作成
```
$ mkdir react-basic
$ cd react-basic
```
- 初期化
```
$ npm init -y
```
- webpackに関するインストール(今回はbabelもインストール)
```
$ npm install --save-dev webpack webpack-cli webpack-dev-server
$ npm install --save webpack webpack-cli
$ npm install --save-dev @babel/core @babel/preset-env @babel/preset-react babel-loader
$ npm install --save-dev react react-dom
```

- react-routerをインストールする(**今回のメイン**)
```
$ npm install --save-dev react-router react-router-dom
```

- babel-plugin-react-html-attrsをインストールする(JSXではclassNamesを使うところ、classを使えるようにする)
```
$ npm install --save-dev babel-plugin-react-html-attrs
```

- @types/react-domが必要と言われたので、、、
```
$ npm install @types/react-dom
```

- @types/react-router-domが必要と言われたので、、、
```
$ npm install @types/react-router-dom
```

- babelでbind()を省略する際の記法で必要となったため、@babel/plugin-proposal-class-propertiesをインストール(.bind(this)関数の省略について)
```
$  npm install --save-dev @babel/plugin-proposal-class-properties
```

