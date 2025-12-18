// 同じ処理をasync/awaitで
async function getPosts() {
  try {
    console.log('通信開始');
    
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    console.log('レスポンス受信:', response);
    
    const data = await response.json();
    console.log('データ:', data);
    
    document.getElementById('result').textContent = data.title;
    
  } catch (error) {
    console.error('エラー:', error);
    alert('通信エラーが発生しました');
  }
}
// 関数を呼び出す
getPosts();
console.log('この行は先に実行される（非同期）');