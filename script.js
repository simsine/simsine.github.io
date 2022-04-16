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

const siteElems = $(".siteElem");
console.log(siteElems)

    // JQuery main function
$(function(){
    $(siteElems).each((_i,t) => {
        $(t).mouseover(()=>{
            $(t).children(".change").removeClass("hide");
            $(t).addClass("bordered");
        })
        $(t).mouseout(()=>{
            $(t).children(".change").addClass("hide");
            $(t).removeClass("bordered");
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