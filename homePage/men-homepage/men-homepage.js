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


document.getElementById("toggleBtn").addEventListener("click", showNavbar);
let flag = true;
function showNavbar(){
    if(flag){
        document.getElementById("sideNavbar").style.display = "none";
        flag = false;
    }else{
        document.getElementById("sideNavbar").style.display = "block";
        document.getElementById("spectsPic").style.display = "none";
        document.getElementById("toggleBtn").style.display = "none";
        flag = true;
    }
}
document.getElementById("closeSideNavbar").addEventListener("click", closeSideNavbar);
function closeSideNavbar(){
    document.getElementById("sideNavbar").style.display = "none";   
    document.getElementById("spectsPic").style.display = "block";
    document.getElementById("toggleBtn").style.display = "block";
}

// let slideIndex = 1;
// showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

let slideIndex1 = 0;
showSlides1();

function showSlides1() {
  let i1;
  let slides1 = document.getElementsByClassName("mySlides1");
  for (i1 = 0; i1 < slides1.length; i1++) {
    slides1[i1].style.display = "none";
  }
  slideIndex1++;
  if (slideIndex1 > slides1.length) {slideIndex1 = 1}
  slides1[slideIndex1-1].style.display = "block";
  setTimeout(showSlides1, 2000); // Change image every 2 seconds
}