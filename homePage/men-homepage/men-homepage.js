// var img1 = ["https://images.bewakoof.com/uploads/grid/app/mad-diwali-men-live-1665247831.jpg","https://images.bewakoof.com/uploads/grid/app/winter-men-new-1665158235.gif","https://images.bewakoof.com/uploads/grid/app/Static-1-1-Banner-Just-Arrived-Full-Tshirts-Men-1665410036.gif"];

// var index = 0;
// setInterval(function() {
//     if(index === img1.length){
//         index = 0;
//     }
//     document.getElementById("sliderImg1").src = img1[index];
//     index++;
// },2000);

function hoverfun(){
    event.preventDefault();
    console.log("hej");
    var img =document.querySelector(".tabNav:nth-child(2)");
    // img.style.border-bottom = '4px solid rgb(253, 216, 53)';

    // img.setAttribute("style","border-bottom:  4px solid rgb(253, 216, 53)","font-weight: 700");
    img.setAttribute("style","font-weight: 700 ; border-bottom:  4px solid rgb(253, 216, 53) ");
    // border-bottom:  4px solid rgb(253, 216, 53);
    // font-weight: 700;
}