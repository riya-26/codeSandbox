/**
 * const , letについて
 *
 */
// var var1 = "test";
// console.log(var1);

// // var は　上書き可能
// var1 = "test2";
// console.log(var1);

// //var は　再宣言可能
// var var1 = "test3";
// console.log(var1);

// letについて
// let は再宣言不可能
// let var2 = "let変数";
// console.log(var2);

// var2 = "上書きした新しい文字列";
// console.log(var2);

//constは上書き、再宣言不可能な宣言方法
// ただし、constで定義されたオブジェクトのプロパティは変更可能
const val4 = {
  name: "name",
  age: 24
};
console.log(val4);

val4.age = 29;
console.log(val4);

const val5 = ["name", "age"];
console.log(val5);
