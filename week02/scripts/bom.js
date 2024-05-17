// DocumentからHTML要素を選択する：document.querySelector
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('ul');

// Add Chapterボタンのイベントリスナーを作成
button.addEventListener('click', function() {
    if (input.value.trim() !== '') {
        // 入力が空でない場合に実行するコード

        // リストアイテムを作成
        let li = document.createElement('li');
        li.textContent = input.value;

        // 削除ボタンを作成
        let deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';

        // リストアイテムに削除ボタンを追加
        li.appendChild(deleteButton);
        list.appendChild(li);

        // 削除ボタンにイベントリスナーを追加
        deleteButton.addEventListener('click', function() {
            list.removeChild(li);
            input.focus();
        });

        // 入力フィールドをクリア
        input.value = '';
    } else {
        // 空の入力を処理
        alert('Please enter the book and chapter.');
        input.focus();
    }

    // 入力フィールドにフォーカスを設定
    input.focus();
});
