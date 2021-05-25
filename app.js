// The core Firebase JS SDK is always required and must be listed first




// const firebase = require("firebase");
// // Required for side-effects
// require("firebase/firestore");

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDmIsu72ZP8kdqmCiY-WR83bpInjgQJopQ",
  authDomain: "teamjs.firebaseapp.com",
  projectId: "teamjs",
  storageBucket: "teamjs.appspot.com",
  messagingSenderId: "917940201555",
  appId: "1:917940201555:web:646df5e5feb8104982fea6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// cloud firestoreの場所を定義 4人分
var db_f= firebase.firestore().collection('father')
var db_m = firebase.firestore().collection('mother')
var db_c1 = firebase.firestore().collection('child1')
var db_c2 = firebase.firestore().collection('child2')
firebase.analytics();


// 日時をいい感じの形式にする関数
function convertFromFirestoreTimestampToDatetime(timestamp) {
  const _d = timestamp ? new Date(timestamp * 1000) : new Date();
  const Y = _d.getFullYear();
  const m = (_d.getMonth() + 1).toString().padStart(2, '0');
  const d = _d.getDate().toString().padStart(2, '0');
  const H = _d.getHours().toString().padStart(2, '0');
  const i = _d.getMinutes().toString().padStart(2, '0');
  const s = _d.getSeconds().toString().padStart(2, '0');
  return `${Y}/${m}/${d} ${H}:${i}:${s}`;
}

// 送信ボタンを押したら、nameとtextとtimeの値をdbに入れる--------------------------
$('#send').on('click', function () {
  const data = {
    // nameはfirebaseのフィールド名
    name: $('#name').val(),
    text: $('#text').val(),
    time: firebase.firestore.FieldValue.serverTimestamp(),// 登録日時
  };
  // dbにデータを入れる
  db_m.add(data);
  // 空白にする
  $('#text').val('');
  alert('データを記録しました');

  // ドキュメントを取得する
  // 単一のドキュメントの内容を取得する
  // 降順で並べ替え、最後の 1 つのドキュメントを取得することもできます。
  const last_m = db_m.orderBy("time", "desc").limit(1);
  const dataArray = {
    // id→ドキュメント名（ランダム英数字のやつ）
    // data()の中には配列dataのname,text,timeのが入っている
    data: last_m.data.
  };
  console.log(dataArray);

  
  // var docRef = db_m.doc('last_m');

  // docRef.get().then((doc) => {
  //   if (doc.exists) {
  //     console.log("Document data:", doc.data());
  //   } else {
  //     // doc.data() will be undefined in this case
  //     console.log("No such document!");
  //   }
  // }).catch((error) => {
  //   console.log("Error getting document:", error);
  // });



});










