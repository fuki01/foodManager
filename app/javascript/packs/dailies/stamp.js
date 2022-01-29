document.addEventListener('turbolinks:load', function() {
  // windowの横幅スマホのアクセスを禁止する
  const window_width = window.innerWidth;
  if(window_width < 600){
    // 現在urlを取得
    const url = window.location.href;
    // urlから/stampを削除
    const url_new = url.replace("/stamp", "");
    // urlを書き換える
    // アラート
    alert("スマホや横幅が狭いものでは使用できません。");
    window.location.href = url_new;
  }

  console.log("It works on each visit!");
  // load_funcが終わったら実行
  setTimeout(load_func, 500);
});

function load_func(){
  console.log("load_func");
  const tmp = document.getElementById('daily_image');
  // currentSrcを表示
  console.log(tmp.currentSrc);

  // #main-bodyの横幅を取得
  
  // 画像を読み込みます。
  // canvasに画像を貼り付ける
  var img = new Image();
  img.src = tmp.currentSrc;
  
  img.onload = function() {
    var canvas = document.getElementById('canvas');
    
    const main_body_width = document.getElementById('main-body').clientWidth;
    
    console.log("main_body_width: " + main_body_width);
    const orgWidth  = img.width;  // 元の横幅を保存
    const orgHeight = img.height; // 元の高さを保存
    console.log("orgWidth: " + orgWidth);
    console.log("orgHeight: " + orgHeight);
    
    img.width = main_body_width;  // 横幅を400pxにリサイズ
    img.height = orgHeight * (img.width / orgWidth); // 高さを横幅の変化割合に合わせる
    console.log(orgHeight+" "+ img.width + " " + orgWidth);
    var ctx = canvas.getContext('2d');
    // canvasのサイズを画像のサイズに合わせます。
    canvas.width = img.width;
    canvas.height = img.height;
    // canvasに画像を貼り付ける
    // 画像サイズをちいさくなるように拡大縮小
    ctx.drawImage(img, (canvas.width - canvas.width/1.2)/2, (canvas.height - canvas.height/1.2)/2, canvas.width/1.2, canvas.height/1.2);
    // load_idを削除
    document.getElementById('load_id').remove();
  };
  
}

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


// class save_linkが押された時に処理
document.getElementsByClassName('save_link')[0].addEventListener('click', (e) => {
  // canvasをpngに変換
  const canvas = document.getElementById('canvas');
  const dataURL = canvas.toDataURL('image/png');
  // Base64形式をデコードする
  const base64 = dataURL.replace(/^data:image\/png;base64,/, "");

  // ファイルを作成
  const blob = toBlob(base64);

  // blobをpostで送る
  const formData = new FormData();
  formData.append('image', blob, 'stamp.png');
  formData.append('daily_id', document.getElementById('daily_id').value);

  // ajaxでpostする
  const xhr = new XMLHttpRequest();
  xhr.open('POST', '/dailies/canvas');
  xhr.send(formData);

  // ページを変える
  // 5秒まつ
  setTimeout(() => {
  window.location.href = '/dailies/' + document.getElementById('daily_id').value;
  }, 5000);




});

function toBlob(base64) {
  var bin = atob(base64.replace(/^.*,/, ''));
  var buffer = new Uint8Array(bin.length);
  for (var i = 0; i < bin.length; i++) {
      buffer[i] = bin.charCodeAt(i);
  }
  // Blobを作成
  try{
      var blob = new Blob([buffer.buffer], {
          type: 'image/png'
      });
  }catch (e){
      return false;
  }
  return blob;
}