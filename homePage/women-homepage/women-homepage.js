function hoverfun(){
    event.preventDefault();
    console.log("hej");
    var img =document.querySelector(".tabNav:nth-child(3)");
    img.setAttribute("style","font-weight: 700 ; border-bottom:  4px solid rgb(253, 216, 53) ");
    // border-bottom:  4px solid rgb(253, 216, 53);
    // font-weight: 700;
}