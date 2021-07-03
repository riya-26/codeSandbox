//アロー関数について
// 従来の宣言方法
const func1 = function (str) {
  return str;
};

console.log(func1("func1です"));

//アロー関数（引数が一つであれば引数用の括弧は不要
//処理が一行かつreturnのみであれば、波括弧とreturnは不要
const func2 = (str) => {
  return str;
};

console.log(func2("FUNC２"));

//複数の引数
const func3 = (num1, num2) => {
  return num1 + num2;
};

console.log(func3(10, 20));
