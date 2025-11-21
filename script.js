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
const nav = document.querySelector("nav");
const logo = document.querySelector(".logo");
const footer = document.querySelector("footer");

// const kolors = ["red", "green", "blue", "pink", "black", "white", "yellow", "gold", "purple", "gray"];
const cssColors = ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","DarkOrange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","RebeccaPurple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen"];






bgChnage.addEventListener("click", () => {

    let index = cssColors[Math.floor(Math.random() * cssColors.length)];

    // //++++++++++++++++++++++++++++++++This is the First and Unoptimized code +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // const heroSection = document.querySelector("#hero-section");
    // const extract = window.getComputedStyle(heroSection).backgroundColor;
    // const rgbStr = extract.slice(4,-1);
    // const rgbArr = rgbStr.split(",");
    // const newRgb = rgbArr.map(Number);

    // const R = newRgb[0];
    // const G = newRgb[1];
    // const B = newRgb[2];

    // const luminance = 0.2126 * R + 0.7152 * G + 0.0722 * B;
    // // console.log(luminance);


    // // if(luminance > 128){
    // //     console.log("Light Color");
    // // }else{
    // //     console.log("Dark Color");
    // // }

    // allElem.forEach((elem) => {
    //     elem.style.backgroundColor = index;

    //     if(luminance < 128){
    //         elem.style.color = "white";
    //     }
    //     else{
    //         elem.style.color = "black";
    //     }
    // })


    //+++++++++++++++++++++++++++++   This is the Optimized code   +++++++++++++++++++++++++++++++++++++++++++++++++++

    const temp = document.createElement("div");
    temp.style.color = index;
    temp.style.display = "none";
    document.body.appendChild(temp);

    const rgb = window.getComputedStyle(temp).color;

    document.body.removeChild(temp);

    const [R, G, B] = rgb.match(/\d+/g).map(Number);

    const luminance = 0.2126 * R + 0.7152 * G + 0.0722 * B;

    if(luminance < 128){
        document.body.style.color = "white";
        nav.style.borderColor = "white";
        logo.style.borderColor = "white";
        footer.style.borderColor = "white";
    }else{
        document.body.style.color = "black";
        nav.style.borderColor = "black";
        logo.style.borderColor = "black";
        footer.style.borderColor = "black";
    }

    document.body.style.backgroundColor = index;

})


