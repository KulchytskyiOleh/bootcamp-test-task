showAllImg.addEventListener("click", showImges, false)

randomImg.addEventListener("click", randomImgTimer, false)

randomImgPos.addEventListener("click", randomImgPosTimer, false)

randImgInRandPos.addEventListener("click", randomImgInRandPosTimer, false)

let wrapper = document.querySelector('#wrapper')

// let imagess = ["https://images.pexels.com/photos/1451074/pexels-photo-1451074.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=450&w=560"]

let img = [
    "https://images.pexels.com/photos/1275929/pexels-photo-1275929.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=9060",
    "https://images.pexels.com/photos/1451074/pexels-photo-1451074.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=450&w=560",
    "https://images.pexels.com/photos/1460880/pexels-photo-1460880.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=200",
    "https://images.pexels.com/photos/1437629/pexels-photo-1437629.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300&w=500",
    "https://images.pexels.com/photos/87284/ocean-seacoast-rocks-water-87284.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=426&w=400",
    "https://images.pexels.com/photos/885880/pexels-photo-885880.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150&w=1260",
    "https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
]

function showImges() {
    let output = img.map((item, index) => `<img src="${item}" id="${index}"/>`).join('')
    document.getElementById('output').innerHTML = output;
    return output;
}

/* 
wrapper.onmousedown = () => {
    setTimeout(getRandomImg, 3000)
}
 */

function randomImgTimer() {
    function getRandomImg() {
        let rand = (img) => {
            let rand = Math.floor(Math.random() * img.length);
            return img[rand];
        }
        let result = `<img src="${rand(img)}" id="image"/>`
        document.getElementById('result').innerHTML = result;
        return result;
    }
    setInterval(getRandomImg, 3000)
}

/* function randomImgPosTimer() {
    let rand = (img) => {
        let rand = Math.floor(Math.random() * img.length);
        return img[rand];
    }
    let result = `<img src="${rand(img)}" id="image"/>`
    document.getElementById('result').innerHTML = result;
    return result;
} */

function randomImgPosTimer() {

    picture = document.getElementById('image1');
    let wrapperWidth = wrapper.offsetWidth;
    let wrapperHeight = wrapper.offsetHeight;
    spaceW = wrapperWidth - picture.width;
    spaceH = wrapperHeight - picture.height;


    console.log(screen.width, screen.height, 'screen')
    console.log(wrapperWidth, wrapperHeight, 'wrapper')

    function moveImg() {
        picture.style.top = Math.round(Math.random() * spaceW) + "px";
        picture.style.left = Math.round(Math.random() * spaceH) + "px";
        picture.style.display = "block"
    }
    setInterval(moveImg, 1000);
}


function randomImgInRandPosTimer() {

    function getRandomImg() {
        let rand = (img) => {
            let rand = Math.floor(Math.random() * img.length);
            return img[rand];
        }
        let result = `<img src="${rand(img)}" id="image"/>`
        document.getElementById('result').innerHTML = result;

        console.log(result, 'result')
        picture = document.getElementById('image');
        console.log(picture, 'picture')

        spaceW = screen.width - picture.width;
        spaceH = screen.height - picture.height;

        console.log(screen.width, picture.width)
        console.log(screen.height, picture.height)

        picture.style.top = Math.round(Math.random() * spaceW) + "px";
        picture.style.left = Math.round(Math.random() * spaceH) + "px";
        picture.style.display = "block"
        return picture;
    }
    setInterval(getRandomImg, 1000);
}