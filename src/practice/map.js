// マップやフィルターを使う配列の処理。
const nameArr = ["田中", "佐藤", "清水"];
// for文を使った従来のやり方
for (let index = 0; index < nameArr.length; index++) {
  console.log(nameArr[index]);
}

// 配列で使えるmap関数を使う。
// 中にはアロー関数が入り、引数には配列の中身が入る。
const nameArr2 = nameArr.map((name) => {
  return name;
});
console.log(nameArr2);

// 名前を順番に出す。
// for文を使わず一行で実現できる！
nameArr.map((name) => console.log(name));

// filter関数
const numArr = [1, 2, 3, 4, 5];
const newNumArr = numArr.filter((num) => {
  // 条件に合うものを返す（この倍は奇数のみ返す）
  return num % 2 === 1;
});
// indexを引数で渡せば順番の概念が使える
newNumArr.map((num, index) => console.log(`${index + 1}番目は${num}です`));

// 田中以外にはさん付けする。
const newNameArr = nameArr.map((name) => {
  if (name === "田中") {
    return name;
  } else {
    return `${name}さん`;
  }
});
console.log(newNameArr);
