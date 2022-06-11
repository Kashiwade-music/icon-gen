# icon-gen
実行時にconfig.jsonを渡すことで、`inputDirPath`以下のsvgファイルを`outputDirPath`以下にicoとして出力します。

## config
config_base.jsonを元に編集してください
```json
{
  "inputDirPath": "c:\\your\\svg\\icon\\folder",
  "outputDirPath": "c:\\your\\ico\\folder"
}
```

## run
引数としてconfig.jsonのパスを渡します。
```sh
node .\main.js .\config_base.json
```
