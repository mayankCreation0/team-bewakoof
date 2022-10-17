const togglePassword = document.querySelector("#togglePassword");
    const password = document.querySelector("#id_password");
    togglePassword.addEventListener("click", function (e) {
  const type =
    password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);
  this.classList.toggle("fa-eye-slash");
});
////
document.querySelector("form").addEventListener("submit", checkdata);
function checkdata() {
  event.preventDefault();
  ///
  let newemail = document.getElementById("email").value;
  let newpasswords = document.getElementById("id_password").value;
  let Alldata =
    JSON.parse(localStorage.getItem("peopleRecord")) || [];
  let flag = "false";
  let loginflag = false;
  let useremail = "";
  Alldata.forEach((element) => {
    if (element.email == newemail && element.password == newpasswords) {
      loginflag = true;
      useremail = element.email;
      if (element.flag == "true") {
        flag = "true";
      } else if (element.flag == "false") {
        flag = "false";
      }
      localStorage.setItem("isLogined","true");  
      localStorage.setItem("userName",element.name);
    }
  });
  if (flag == "true") {
    localStorage.setItem("flag", "true");
  } else if (flag == "false") {
    localStorage.setItem("flag", "false");
  }

  if (loginflag) {
    localStorage.setItem("useremail", useremail);
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    
    Toast.fire({
      icon: 'success',
      title: 'Signed in successfully'
    });



    setTimeout(redirect, 2500);
    // location.href="../../homePage/diwali-homepage/diwali-homepage.html";
  } else if (!loginflag) {
    swal("Oops!", "Wrong credintials!", "error");
  }
}
function redirect(){
  window.open("../../homePage/diwali-homepage/index.html","_self");
  // console.log("hey");
}