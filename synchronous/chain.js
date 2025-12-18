// GET: データ取得
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => {
    console.log('レスポンス受信:', response);
    return response.json(); // JSONに変換
  })
  .then(data => {
    console.log('データ:', data);
    document.getElementById('result').textContent = data.title;
  })
  .catch(error => {
    console.error('エラー:', error);
    alert('通信エラーが発生しました');
  });

console.log('この行は先に実行される（非同期）');