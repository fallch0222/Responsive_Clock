const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const title = document.getElementById("Title");
const sizeSlider = document.getElementById("sizeSlider");
const sizeController = document.getElementsByClassName("size controller");

let fontSize = 50; 
const fontBase = canvas.width;                     

function getFont() {
     
    const ratio = fontSize / fontBase;   
    const size = canvas.width * ratio;   // get font size based on current width
    return `${size ?? 0}px Arial`; // set font
}

const fillZero = num => num.toString().padStart(2, '0'); //fill 0 if number is more than 10

const sizeSliderInput = (size) => {
    console.log(size);
    fontSize = size;
    updateText();
    return;
}

const currentTime = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const date = new Date();
    const hours = date.getHours();
    const minutes = fillZero(date.getMinutes());
    const seconds = fillZero(date.getSeconds());

    const time = `${hours}:${minutes}:${seconds}`;

    ctx.font = getFont();
    ctx.fillText(time, canvas.width / 2 - ctx.measureText(time).width /2, canvas.height / 2);
};

const updateSize = () => {
    canvas.width = screen.width;
    canvas.height = screen.height;
    
}

const resetSize = () => {
    fontSize = 50;
    updateText();
    sizeSlider.value = 50;
    sizeSlider.innerHTML = 50;
}

const upadteController = () => {
}

const updateText = () => {
    setTimeout(()=>{
      updateSize();
      currentTime();
      updateText();
      upadteController();
    }, 1000);
};

updateSize();
currentTime();
updateText();
upadteController();


 
