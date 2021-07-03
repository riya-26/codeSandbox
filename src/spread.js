// スプレッド構文　ドットを三つ書く書き方
// いろんな使用方法がある。

// 配列の展開
const arr1 = [1, 2, 3];
console.log(arr1);
// 配列の中身を順番に展開してくれる。
console.log(...arr1);

// 数値を受け取って合計し、表示する関数
// 順番なので、引数の分だけ渡している
const sunFunc = (num1, num2) => console.log(num1 + num2);
sunFunc(...arr1);

// まとめる
// 配列をまとめて受け取るとき
const arr2 = [1, 2, 3, 4, 5];
const [num1, num2, ...num3] = arr2;
console.log(num1);
console.log(num2);
console.log(num3);

// 配列のコピー・結合
const arr3 = [10, 20];
const arr4 = [30, 40];
// コピー
const arr5 = [...arr3];
console.log(...arr5);

// 結合
const arr6 = [...arr3, ...arr4];
console.log(...arr6);
