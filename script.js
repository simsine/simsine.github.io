function stringToBinary (string) {
    let stringArray = string.split("");
    console.log(stringArray);
    let bin = "";
    console.log(string.length)
    for (let i in stringArray){
        if (i == " "){
            bin += " ";
        } 
        else if (Math.random() < 0.5){
            bin += "0";
        } else{
            bin += "1";
        }
    }
    return bin;
}
console.log(stringToBinary("hello"));

const texts = [
    "Header",
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet doloribus vitae, nemo incidunt laborum aliquam, asperiores sit facere tenetur officia adipisci natus, nulla qui neque amet quia inventore sed omnis?",
    "Ut ipsum enim",
    "Etiam risus ex",
    "Made by XPhaze"
];

const containers = $(".container");
const textelems = $(".textelem");

    // JQuery main function
$(function(){

    $(textelems).each((i,t) => {
        $(t).text(stringToBinary(texts[i]));

        $(t).mouseenter(()=>{
            $(t).text(texts[i]);
        })
        $(t).mouseout(()=>{
            $(t).text(stringToBinary(texts[i]));
        })
    })

    //$(containers).each((_i,t) => {
    //    $(t).mouseover(()=>{
    //        $(t).children(".textelem").removeClass("hide");
    //        $(t).addClass("bordered");
    //    })
    //    $(t).mouseout(()=>{
    //        $(t).children(".textelem").addClass("hide");
    //        $(t).removeClass("bordered");
    //    })
    //})
});