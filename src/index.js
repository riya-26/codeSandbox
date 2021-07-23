import "./styles.css";

// 未完了のtodoを「追加」ボタンから追加する。
const onClickAdd = () => {
  // texrBoxの価を取得し初期化
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

// 未完了リストから指定の要素を削除する。
const deleteFromIncompleteList = (target) => {
  const parentList = target.parentNode;
  document.getElementById("incomplete-list").removeChild(parentList);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());

// 未完了リストに作成する関数。
const createIncompleteList = (text) => {
  // li作成
  const li = document.createElement("li");
  li.className = "todo-list";

  // div作成
  const div = document.createElement("div");
  div.className = "list-row";

  // p作成
  const p = document.createElement("p");
  p.innerText = text;

  //button(完了)追加
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";

  //button（完了）押下時、完了ボタンに紐づく要素を「完了したtodo」に移動し、
  // 「未完了のtodo」から削除する。
  completeButton.addEventListener("click", () => {
    // 「未完了のtodo」から要素を削除
    deleteFromIncompleteList(completeButton.parentNode);

    // 押された完了ボタンに紐づく要素を取得
    const addTarget = completeButton.parentElement;

    // todoの内容（pタグ）を取得
    const text = addTarget.firstElementChild.innerText;
    console.log(text);

    // 押された完了ボタンに紐づく要素を初期化
    addTarget.textContent = null;

    // 完了したtodo用の要素作成
    const p = document.createElement("p");
    p.innerText = text;
    // 戻るボタンの作成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      // 押された戻るボタンの親を消す
      const deleteTarget = backButton.parentNode.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      const textFromComplete =
        deleteTarget.firstElementChild.firstElementChild.textContent;

      createIncompleteList(textFromComplete);
    });
    // divにtodo内容とボタンを子要素として追加
    addTarget.appendChild(p);
    addTarget.appendChild(backButton);

    // 「完了したtodo」のli（リスト）を作成
    const completeLi = document.createElement("li");
    completeLi.className = "complete-todo";
    completeLi.appendChild(addTarget);

    document.getElementById("complete-list").appendChild(completeLi);
  });

  //button(削除)と削除機能の追加
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親listを削除
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  //divの子要素にpを追加
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  li.appendChild(div);
  document.getElementById("incomplete-list").appendChild(li);
};
