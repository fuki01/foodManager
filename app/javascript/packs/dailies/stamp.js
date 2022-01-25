
// 画像を読み込みます。
// canvasに画像を貼り付ける
var img = new Image();
var image_path = document.getElementById("image_path").innerHTML;
img.src = "/dailies/"+image_path;
var canvas = document.getElementById('canvas');
img.onload = function() {
  var ctx = canvas.getContext('2d');
  // canvasのサイズを画像のサイズに合わせます。
  canvas.width = img.width;
  canvas.height = img.height;
  // canvasに画像を貼り付ける
  // 画像サイズをちいさくなるように拡大縮小
  ctx.drawImage(img, (canvas.width - canvas.width/1.2)/2, (canvas.height - canvas.height/1.2)/2, canvas.width/1.2, canvas.height/1.2);
};

canvas.addEventListener("click", (e) => {
  let rect = e.target.getBoundingClientRect();
  let ctx = canvas.getContext('2d');
  // e.clientX(Y)がwindow左上からのクリックされた座標
  // rect.left(top)がwindow左上からのcanvasの座標
  x = e.clientX - rect.left;
  y = e.clientY - rect.top;
  const stamp = new Image();
  // チェックボックスがチェックされているかどうか
  if (document.getElementById('stamp1').checked) {
    stamp.src = "/assets/stamp1.png";
  } else if (document.getElementById('stamp2').checked) {
    stamp.src = "/assets/stamp2.png";
  } else if (document.getElementById('stamp3').checked) {
    stamp.src = "/assets/stamp3.png";
  }
  stamp.onload = function() {
    ctx.drawImage(stamp, x-stamp.width/2, y-stamp.height/2, stamp.width, stamp.height);
  };

  // テキストエリアの値を取得
  const text = document.getElementsByName('textarea')[0].value;
  // テキストを描画
  ctx.fillStyle = "black";
  // カラーピッカーを取得する
  const color = document.getElementsByName('color')[0].value;
  // スタンプサイズを取得する
  // カラーピッカーの値を描画
  ctx.fillStyle = color;
  // テキストを描画
  ctx.font = "30px 'ＭＳ Ｐゴシック'";
  ctx.fillText(text, x-230, y+200);
});

const size = document.getElementsByName('size')[0];
size.addEventListener('change', (e) => {
  puts_stamp(e.target.value);
});

function puts_stamp(size){
  const canvas_viewr = document.getElementById('stamp_viewr');
  const ctx = canvas_viewr.getContext('2d');
  const text = document.getElementsByName('textarea')[0].value;
  // サイズを書く
  // リセットする
  ctx.clearRect(0, 0, canvas_viewr.width, canvas_viewr.height);
  ctx.font = "30px 'ＭＳ Ｐゴシック'";
  ctx.fillStyle = "black";

  
  // 画像を貼り付ける
  const stamp = new Image();
  // チェックボックスがチェックされているかどうか
  if (document.getElementById('stamp1').checked) {
    stamp.src = "/assets/stamp1.png";
  }
  if (document.getElementById('stamp2').checked) {
    stamp.src = "/assets/stamp2.png";
  }
  if (document.getElementById('stamp3').checked) {
    stamp.src = "/assets/stamp3.png";
  }
  const x = canvas_viewr.width/2-(canvas_viewr.width*(size/100))/2
  const y = canvas_viewr.height/2-(canvas_viewr.height*(size/100))/2
  const w = canvas_viewr.width*(size/100)
  const h = canvas_viewr.height*(size/100)
  stamp.onload = function() {
    ctx.drawImage(stamp, x, y, w, h);
  }

  // カラーピッカーの値を描画
  ctx.fillStyle = document.getElementsByName('color')[0].value;
  // テキストを描画
  const text_width = ctx.measureText(text).width;
  ctx.fillText(text, x+(w/2)-(text_width/2), y+h);
}

function stamp_viewr(num){
  var canvas_viewr = document.getElementById('stamp_viewr');
  var ctx = canvas_viewr.getContext('2d');
  var img = new Image();
  img.src = "/assets/stamp" + num + ".png";
  img.onload = function() {
    canvas_viewr.width = img.width;
    canvas_viewr.height = img.height;
    ctx.drawImage(img, 0, 0);
  };
}


window.addEventListener( "DOMContentLoaded" , ()=> {
  document.getElementsByName("scales").forEach(
    r => r.addEventListener("change" ,
      e => stamp_viewr(e.target.value)
    )
  );
});

window.addEventListener('DOMContentLoaded', function(){
  // input要素を取得
  var input_name = document.getElementById("context");

  // イベントリスナーでイベント「change」を登録
  input_name.addEventListener("change",function(){
    console.log(this.value);
    drawText(this.value);
  });
});

// 文字を描画する関数
function drawText(text) {
  canvas_viewr = document.getElementById('stamp_viewr');
  ctx = canvas_viewr.getContext('2d');
  ctx.font = "30px 'ＭＳ Ｐゴシック'";
  ctx.fillStyle = "black";
  // 白色の四角形を描画
  ctx.fillStyle = "white";
  ctx.fillRect(0, canvas_viewr.height-60, canvas_viewr.width, canvas_viewr.height);
  
  // カラーピッカーの値を描画
  const color = document.getElementsByName('color')[0].value;
  ctx.fillStyle = color;
  ctx.fillText(text, 0, canvas_viewr.height-30);
}