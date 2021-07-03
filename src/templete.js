// テンプレート文字列について
const name = "namae";
const age = "24";
// 私の名前は「」です。年齢は「」歳です。という文字列を出す。

// 従来の方法（長く、読みづらい）
// const message1 = "私の名前は" + name + "です。年齢は" + age + "歳です。";
// console.log(message1);

// テンプレート文字列を使用した方法
const message2 = `私の名前は${name}です。年齢は${age}歳です。`;
console.log(message2);
