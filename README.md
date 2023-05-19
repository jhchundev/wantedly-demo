# WantedlyTest

## 動作写真
![image](https://github.com/jhchundev/wantedly/assets/118123321/20fe2f52-d924-4982-bd1d-28c6504ddee0)


## 工夫した点
- LazyLoadを使用し、多数のデータを表示してもパフォーマンスを落とさないようにしました。
- Layoutを使用し、共通の部分をまとめました。
- Leftbarを区分するようにしました。
- Descriptionの一部のみを表示するようにしました。
- データの整形はDBで行うのが望ましいので、フロントでの一括処理はしませんでした。(DBのコマンドを使用）
- 検索はDBに用意されているfilterを使用しました。

## 使い方
- リポジトリをクローン
- `npm install`
- 3000ポートで確認可能
