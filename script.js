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

const pageIDs = [$("#header"), $("#body"), $("#footer")];
console.log(pageIDs)

$(function(){
    pageIDs.forEach(elem => {
        elem.mouseover(()=>{
            elem.children(".change").text("Hovering");
            elem.addClass("bordered");
        })
        elem.mouseout(()=>{
            elem.children(".change").text("Outside");
            elem.addClass("bordered");
        })
    })
});


//$("#header").mouseover(()=>{
//    $("#header").children($(".change")).text("Hovering");
//});
//$("#header").mouseout(()=>{
//    $("#header").children($(".change")).text("Outside");
//});
//$("#body").mouseover(()=>{
//    $("#body").children($(".change")).text("Hovering");
//});
//$("#body").mouseout(()=>{
//    $("#body").children($(".change")).text("Outside");
//});
//$("#footer").mouseover(()=>{
//    $("#footer").children($(".change")).text("Hovering");
//});
//$("#footer").mouseout(()=>{
//    $("#footer").children($(".change")).text("Outside");
//});