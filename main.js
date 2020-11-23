let wrapper = document.querySelector("#wrapper");

document.onclick = activeScreen;
document.onmousemove = activeScreen;
document.onmouseover = activeScreen;
document.onmouseup = activeScreen;
document.onmousedown = activeScreen;
document.onmouseout = activeScreen;
document.onkeypress = activeScreen;
document.onkeyup = activeScreen;
document.onkeydown = activeScreen;
document.ontouchmove = activeScreen;

noActiveScreenTimer;
setInterval(function () {
  noActiveScreenTimer += 1;
}, 1000);
setInterval(function () {
  setupTimer();
}, 1000);
function activeScreen() {
  noActiveScreenTimer = 0;
}
function setupTimer() {
  if (noActiveScreenTimer >= noActiveScreenDelay) {
    if (noActiveScreenTimer % timeoutImage === 0)
      randomImgInRandPosTimer(false);
  } else randomImgInRandPosTimer(true);
}

function rand(img) {
  let rand = Math.floor(Math.random() * img.length);
  return img[rand];
}

function getRandomImg() {
  let randImg = rand(img);
  let result = `<img src="${randImg}" class="randomImgInRandPos"/>`;
  document.getElementById("result").innerHTML = result;
  picture = document.querySelector(".randomImgInRandPos");

  let wrapperWidth = wrapper.offsetWidth;
  let wrapperHeight = wrapper.offsetHeight;
  let wrapperCord = wrapper.getBoundingClientRect();
  spaceW = wrapperWidth - picture.width;
  spaceH = wrapperHeight - picture.height;
  randX = Math.round(Math.random() * spaceW);
  randY = Math.round(Math.random() * spaceH);

  let imgGetWidthHeight = new Image();
  imgGetWidthHeight.onload = function () {
    pictureBottom = randX + this.height;
    pictureRight = randY + this.width;
    picture.style.border = "5px solid green";

    if (randX < wrapperCord.top) {
      picture.style.border = "5px solid red";
    }
    if (randY < wrapperCord.left) {
      picture.style.border = "5px solid red";
    }
    if (pictureRight > wrapperCord.right) {
      picture.style.border = "5px solid red";
    }
    if (pictureBottom > wrapperCord.bottom) {
      picture.style.border = "5px solid red";
    }
  };

  imgGetWidthHeight.src = randImg;
  picture.style.top = randX + "px";
  picture.style.left = randY + "px";
  picture.style.display = "block";

  return picture;
}

function randomImgInRandPosTimer(status) {
  if (status) {
    document.getElementById("result").innerHTML = "";
  } else {
    getRandomImg();
  }
}
