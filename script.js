//import Scrambler from 'scrambling-text';

console.log("Hello World");

for (let i = 0; i<10;i++){
    console.log("Bruh" + i);
}

//x.onclick = () => {
//    console.log("Clicked!")
//    let newtext = document.createElement("h1");
//    newtext.innerText = "Hello";
//    newtext.style.color = "red";
//    x.appendChild(newtext);
//};

//document.getElementById("header").addEventListener("mouseover", over("header"));
//document.getElementById("header").addEventListener("mouseout", out("header"));
//
//function over(elem){
//    document.getElementById(elem).style.backgroundColor = "grey";
//}
//
//function out(elem){
//    document.getElementById(elem).style.backgroundColor = "white";
//}

function textToHex(str) {
    var hex = '';
    for(var i=0;i<str.length;i++) {
        hex += ''+str.charCodeAt(i).toString(16);
    }
    return hex;
}

const textToBinary = (str = '') => {
    let res = '';
    res = str.split('').map(char => {
       return char.charCodeAt(0).toString(2);
    }).join(' ');
    return res;
 };

const texts = [
    "Header",
    "Lorem ipsum dolor sit amet",
    "Made by XPhaze"
]

const containers = $(".container");
const textelems = $(".textelem");
console.log(containers)

    // JQuery main function
$(function(){

    $(textelems).each((i,t) => {
        $(t).text(textToBinary(texts[i]));
    })

    $(containers).each((_i,t) => {
        $(t).mouseover(()=>{
            $(t).children(".textelem").removeClass("hide");
            $(t).addClass("bordered");
        })
        $(t).mouseout(()=>{
            $(t).children(".textelem").addClass("hide");
            $(t).removeClass("bordered");
        })
    })
});