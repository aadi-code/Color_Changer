// const bgChange = document.querySelector("button");
// const hero = document.querySelector("#hero-section");



// bgChange.addEventListener("click", () => {
//     changeColor();    
// });


// let co = 0;

// function changeColor() {
//     const colrs = ["red", "green", "blue"];

//     hero.style.backgroundColor = colrs[co] ;
//     // document.body.style.backgroundColor = colrs[co];

//     co += 1;
// }



const allElem = document.querySelectorAll("*");
const bgChnage = document.querySelector("button");

const kolors = ["red", "green", "blue", "pink", "black", "white", "yellow", "gold", "purple", "gray"];



bgChnage.addEventListener("click", () => {

    let index = kolors[Math.floor(Math.random() * kolors.length)];
    // console.log(index);
    



    // const navLinks = document.querySelector(".nav-links");

const heroSection = document.querySelector("#hero-section");

// const extract = window.getComputedStyle(navLinks).color;

const extract = window.getComputedStyle(heroSection).backgroundColor;

const rgbStr = extract.slice(4,-1);

const rgbArr = rgbStr.split(",");

const newRgb = rgbArr.map(Number);


const R = newRgb[0];
const G = newRgb[1];
const B = newRgb[2];


const luminance = 0.2126 * R + 0.7152 * G + 0.0722 * B;
console.log(luminance);


// if(luminance > 128){
//     console.log("Light Color");
// }else{
//     console.log("Dark Color");
// }

allElem.forEach((elem) => {
    elem.style.backgroundColor = index;

    if(luminance < 128){
        elem.style.color = "white";
    }
    else{
        elem.style.color = "black";
    }
    })


})


