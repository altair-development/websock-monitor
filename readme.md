# websock-monitor
WebSocketサーバーに配置されるWebSocket通信用クライアントモジュール。  
WebSocketサーバーモジュールはHTTPリクエストを処理しないため、代わりにロードバランサーに対するヘルスチェックエンドポイントを実装しlocalhost上のWebSocketサーバーと通信が確立していればステータスコード200を返す。

- npm socket.ioライブラリ

## How to use
まず最初に下記のコマンドを実行しwebsock-monitorレポジトリをクローンします。  
※下記手順を実施する前に[altair/websock](https://github.com/altair-development/websock)のリソースを使ってWebSocketサーバーが起動していることを確認してください。
```
git clone https://github.com/altair-development/websock-monitor.git
```
次にwebsock-monitorフォルダに移動します。
```
cd websock-monitor
```
モジュールの実行に必要なnpmライブラリをインストールします。
```
npm ci
```
下記コマンドを実行し`.env.local`ファイルを`.env`のファイル名でコピーします。
```
COPY .env.local .env
```
`.env`ファイルを開き各種環境変数の値を設定します。

下記コマンドを実行しWebSocketクライアントサーバーを起動します。
```
set PODIP=127.0.0.1
node index
```
正常に実行できればコマンドラインに下記のようなメッセージが出力されます。
```
server listening. PORT:8000
connect
socketio.connected true
```
`curl -LI localhost:8000 -o /dev/null -w '%{http_code}\n' -s`を実行し`200`の出力が得られれば正常に起動しています。
