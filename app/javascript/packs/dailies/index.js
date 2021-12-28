containerWidth = 0
imageCount = 0;
imageWidth = 0;
oneImageWidth = 0;
// init

function image_resize(){
  // containerの横幅を取得
  containerWidth = document.querySelector('.container').offsetWidth;
  widthImage = 0
  // image_listの幅を.containerWidthに合わせる
  // image_list = document.querySelectorAll('.image_list');
  // image_list.forEach(function(image){
  //   image.style.width = containerWidth + 'px';
  //   widthImage += image.offsetWidth;
  // });
  // image_listの個数を取得
  for (let i = 0; i < document.querySelectorAll('.images_list').length; i++){
    for (let j = 0; j < document.querySelectorAll('.images_list')[i].querySelectorAll('img').length; j++){
      imageCount = imageCount + 1;
    }

    for (let j = 0; j < document.querySelectorAll('.images_list')[i].querySelectorAll('img').length; j++){
      document.querySelectorAll('.images_list')[i].querySelectorAll('img')[j].style.width = containerWidth/imageCount + 'px';
      document.querySelectorAll('.images_list')[i].querySelectorAll('img')[j].style.objectFit = 'cover';
    }
    imageCount = 0;
  }
}
function init(){
  image_resize();
}

function resizeWindow(){
  image_resize();
}

window.addEventListener('resize', resizeWindow);
window.onload = init;
