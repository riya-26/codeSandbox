// デフォルト値について

const sayHello = (name) => console.log(`こんにちは、${name}さん`);
sayHello();
// 変数に何も入っていないと”undifined”になる。

// デフォルト値（初期値）を設定する。
const sayHello2 = (name = "ゲスト") => console.log(`こんにちは、${name}さん。`);
sayHello2();
