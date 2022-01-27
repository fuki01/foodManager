// #body-mainの横幅を取得する
let bodyWidth = document.getElementById('body-main').clientWidth;

// #show_imgを取得する
let showImg = document.getElementById('show_img');

// showImgの横幅をbodyWidthに合わせる
showImg.style.width = bodyWidth + 'px';

// 画面サイズを変更したときの処理
window.addEventListener('resize', function() {
  // #body-mainの横幅を取得する
  let bodyWidth = document.getElementById('body-main').clientWidth;

  // #show_imgを取得する
  let showImg = document.getElementById('show_img');

  // showImgの横幅をbodyWidthに合わせる
  showImg.style.width = bodyWidth + 'px';
});
