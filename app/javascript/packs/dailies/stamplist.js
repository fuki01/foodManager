// select
const select = document.getElementsByName('stamp')[0];
select.addEventListener('change', (e) => {
  // index_imgタグを非表示にする
  const index_img = document.getElementsByClassName('index_img');
  for(let i=0; i<index_img.length; i++){
    index_img[i].style.display = 'none';
  }

  // e.target.valueと同じタグを探す
  const stamp = document.getElementsByClassName(e.target.value);
  for(let i=0; i<stamp.length; i++){
    // stamp_sizeを取得
    stamp[i].style.display = 'block';
  }

  if(e.target.value == ""){
    // index_imgタグを表示する
    const index_img = document.getElementsByClassName('index_img');
    for(let i=0; i<index_img.length; i++){
      index_img[i].style.display = 'block';
    }
  }

});