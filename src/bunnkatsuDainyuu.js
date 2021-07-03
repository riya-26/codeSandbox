// 代入分割
//テンプレート文字列との組み合わせ。
// const myProfile = {
//   name: "name",
//   age: 28
// };

// const message1 = `私の名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(message1);

// 分割代入をしてみる。
// const { name, age } = myProfile;
// 上記と同様テンプレート文字列を使用
// いちいちmyProfileを書かなくていい。
// const message2 = `私の名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

const myProfile = ["Name", 28];
const [name, age] = myProfile;
const message3 = `私の名前は${name}です。年齢は${age}歳です。`;
console.log(message3);
