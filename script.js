function stringToBinary (string) {
    let bin = "";
    for (let i in string){
        if (string[i] === " "){
            bin += " ";
        } else if (Math.random() < 0.5){
            bin += "0";
        } else{
            bin += "1";   
        }
    }
    return bin;
}

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
        $(t).text(texts[i]);

        $(t).mouseenter(()=>{
                /*setTimeout(() => {
                    $(t).text(texts[i]);
                },50); */
        })
        $(t).mouseout(()=>{
                /*setTimeout(() => {
                    $(t).text(stringToBinary(texts[i]));               
                }, 50);*/
        })
    })
});