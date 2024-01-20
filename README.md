# 概要
dockerでPlaywrightの環境を立ち上げます。

ホスト側のブラウザでdocker側の仮想ディスプレイに接続し自動テストが動いている様子も見ることができます。

また、レポートもホスト側のブラウザからアクセスできるように設定しています。

# 前提
dockerをインストールし、実行してください。

https://www.docker.com/ja-jp/

また、このリポジトリをダウンロード(code→Download ZIP)するか、cloneしてください。


# 準備（1回だけ）
## イメージの作成
ターミナルなどで、ダウンロードしたデータの`docker-compose.yml`がある場所に移動してください。以下を実行するとイメージが作成されます。それで終わりです。

```docker-compose build```

# テストのファイルを置く場所
`mount`フォルダの中の`tests`フォルダにテストを入れてください。その中のテストが実行されるようにしています。

> docker起動時は`mount`フォルダがdockerコンテナと同期するようにしています。
>どのフォルダの中をテストするかは`playwright.config.ts`に記載しています。

# dockerコンテナの立ち上げとテスト実行準備
## 1. dockerコンテナを立ち上げる
以下でdockerコンテナを立ち上げます。

```docker-component up -d```

## 2.dockerコンテナの中に入る
以下でdockerコンテナの中に入ります。

```docker exec -it playwright bash```

## 3.仮想ディスプレイを立ち上げる
以下で仮想ディスプレイを立ち上げます。
```./start.sh```

## 4.ホスト側のブラウザで仮想ディスプレイを見る
ホスト側（dockerコンテナではなく、いつものパソコンのほう）のブラウザのアドレスに以下を入力しenterを押す。

```http://localhost:8010/vnc.html```

「noVNC connect」とでるので、connectをクリックする。真っ黒い画面が出たら成功です。

# テスト実行からレポート確認までの流れ
## 1.docker側でplaywrightを実行する
dockerコンテナのほうで、以下を入力すればplaywrightが実行されます。

このとき、実行の様子が4で開いたブラウザに表示されます。（--headedが実際にブラウザを表示する意味）

```npx playwright test --headed```

## 2.レポートを確認する
実行が完了したら、ホスト側のブラウザのアドレスに以下を入力しenterを推すとレポートが見れます。

```localhost:9323```

または、`mount`フォルダが同期しているので`playwright-report`フォルダの`index.html`を直接開いても結果を見ることができます。

# テストを修正する
ホスト側の`mount`フォルダとdockerコンテナ側の`/app`フォルダの中身は同期されているため、**dockerを起動している状態で、ホスト側でリアルタイムで修正できます。**

修正が終わったら、再度`npx playwright test --headed`を実行してください。（ブラウザを表示しなくていいときは`--headed`をとってください）


# dockerコンテナを終了する
## 1. dockerコンテナから抜ける
以下でdockerコンテナから抜けることができます。

```exit```

## 2. dockerコンテナを終了する
以下でdockerコンテナを終了させることができます。

```docker-compose down```

またdockerを立ち上げたいときは`dockerコンテナの立ち上げとテスト実行準備`から行ってください。