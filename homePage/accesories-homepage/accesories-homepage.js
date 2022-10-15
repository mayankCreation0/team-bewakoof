function hoverfun(){
    event.preventDefault();
    console.log("hej");
    var img =document.querySelector(".tabNav:nth-child(4)");
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