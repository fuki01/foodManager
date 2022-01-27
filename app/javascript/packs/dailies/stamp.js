
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
  const canvas_viewr = document.getElementById('canvas');
  const size = document.getElementsByName('size')[0].value;
  const x = e.offsetX;
  const y = e.offsetY;
  console.log(x, y);
  genuine_puts_stamp(canvas_viewr, size, x ,y);
});


function genuine_puts_stamp(output_canvas, size, x ,y){
  const canvas_viewr = document.getElementById('stamp_viewr');
  const ctx = canvas_viewr.getContext('2d');
  const text = document.getElementsByName('textarea')[0].value;
  // サイズを書く
  // リセットする
  
  
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
  const w = canvas_viewr.width*(size/100)
  const h = canvas_viewr.height*(size/100)
  
  const ctx_c = output_canvas.getContext('2d');
  
  stamp.onload = function() {
    // x,y,w,hの中心座標
    // 長方形を描写
    ctx_c.strokeRect(x-250, y-250, 500, 500);
    // スタンプ位置を長方形の真ん中にする
    ctx_c.drawImage(stamp, x-(w/2), y-(h/2), w, h);
  }
  
  // カラーピッカーの値を描画
  ctx.fillStyle = document.getElementsByName('color')[0].value;
  // テキストを描画
  const text_width = ctx.measureText(text).width;
  // テキストサイズを変更
  ctx_c.font = "60px 'ＭＳ Ｐゴシック'";
  ctx_c.fillText(text, x-(text_width/2), y+h/2);
}


// サイズを変化させるときの処理
const size = document.getElementsByName('size')[0];
size.addEventListener('change', (e) => {
  const canvas_viewr = document.getElementById('stamp_viewr');
  puts_stamp(canvas_viewr, e.target.value);
});

// ラジオボックスのチェックしたときの処理
const radio = document.getElementsByName('stamp');
for (let i = 0; i < radio.length; i++) {
  radio[i].addEventListener('change', (e) => {
    // stamp_sizeを取得
    const size = document.getElementsByName('size')[0].value;
    const canvas_viewr = document.getElementById('stamp_viewr');
    puts_stamp(canvas_viewr,size);
  });
}

// textareaに変化があったときの処理
const textarea = document.getElementsByName('textarea')[0];
textarea.addEventListener('change', (e) => {
  // stamp_sizeを取得
  const size = document.getElementsByName('size')[0].value;
  const canvas_viewr = document.getElementById('stamp_viewr');
  puts_stamp(canvas_viewr,size);
});

// カラーピッカーに変更があったときの処理
const color = document.getElementsByName('color')[0];
color.addEventListener('change', (e) => {
  // stamp_sizeを取得
  const size = document.getElementsByName('size')[0].value;
  const canvas_viewr = document.getElementById('stamp_viewr');
  puts_stamp(canvas_viewr,size);
});


function puts_stamp(output_canvas, size){
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
  const ctx_c = output_canvas.getContext('2d');

  stamp.onload = function() {
    ctx_c.drawImage(stamp, x, y, w, h);
  }

  // カラーピッカーの値を描画
  ctx.fillStyle = document.getElementsByName('color')[0].value;
  // テキストを描画
  const text_width = ctx.measureText(text).width;
  ctx_c.fillText(text, x+(w/2)-(text_width/2), y+h);
}
