//DocumentからHTML要素を選択する：document.querySelector
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('ul');
//要素を作成する：document.createElement
const li =  document.createElement('li');
const deleteButton = document.createElement('button');
//li要素変数textContentまたは innerHTMLに入力値を 設定します。
li.textContent = input.ariaValue;
//ボタン textContent に ❌ を入力します。
deleteButton.textContent = '❌';
//追加
li.append(deleteButton);
li.append(li);


