/*--------------------
*ボタン押したらユーザーをliに追加する
*loadと呼ばれるイベント使いWindowが読み込んだら処理-36-
*リファクタリングで整理
**カウントアウトしてないか？確認してみよう！！


const button = document.getElementById("addBtn");
const lists = document.getElementById("lists");

button.addEventListener('click', async function() {
//データのやり取り
  const res = await fetch("https://jsonplaceholder.typicode.com/users");   //function()とfetch("URL")で情報やり取り可
  const users = await res.json();           //awaitで取り出しやすく、resはjsonを使って
 
   
//DOM操作
for (let index = 0; index < users.length; index++) {
  const user = users[index];
  const list = document.createElement("li");  //createElementはhtml要素を生成する
  //list.innerText = "masu文字";   //＜li＞タグに文字を入れる
  list.innerText = user.name;      //実際にユーザー名10ヶ押すたび取り出せた
  //list.innerText = user.address.zipcode;      //実際〒番号10ヶ押すたび取り出せた
  lists.appendChild(list); 
}

 //users.forEach(function(user){       //各ユーザーの構文が取り出せた10回ループ
 // const list = document.createElement("li");  //createElementはhtml要素を生成する
 //list.innerText = "masu文字";   //＜li＞タグに文字を入れる
 //list.innerText = user.name;      //実際にユーザー名10ヶ押すたび取り出せた
 // list.innerText = user.address.zipcode;      //実際〒番号10ヶ押すたび取り出せた
 // lists.appendChild(list);

// });
});
window.addEventListener("load",function () {
 console.log(); 
})
 - - - -*/




/*--------------------
*ボタン押したらでなくページ読み込んだらユーザーをliに追加するhtml側のボタンタグを無くしてもいい
*リファクタリングで整理
*
 - - - -*/
//DOM
const button = document.getElementById("addBtn");
const lists = document.getElementById("lists");


//関数（メソッド）
function addList(user){       //各ユーザーの構文が取り出せた10回ループ
 
   const list = document.createElement("li"); //createElementはhtml要素を生成する
  //list.innerText = "masu文字";   //＜li＞タグに文字を入れる
  list.innerText = user.name;   //実際にユーザー名10ヶ押すたび取り出せた
  //list.innerText = user.address.zipcode; //実際〒番号10ヶ押すたび取り出せた
  lists.appendChild(list);
 }

async function getUsers(){        //function()とfetch("URL")で情報やり取り可
  const res = await fetch("https://jsonplaceholder.typicode.com/users");   
  const users = await res.json();
  return users;
}
async function listUsers() {
  const users = await getUsers();//awaitで取り出しやすく、resはjsonを使って
  users.forEach(addList);
}
//イベント
window.addEventListener("load", listUsers); 
button.addEventListener("click", listUsers);

