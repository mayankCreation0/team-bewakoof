 document.getElementById("email").value = JSON.parse(localStorage.getItem("mobile-number")) ;


 window.onload = function(){
  swal("otp sent!");
}


function checkotp(){
      let otpin=document.getElementById("otpinputnum").value;
      if(otpin == 5)
      {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        
        Toast.fire({
          icon: 'success',
          title: 'Signed in successfully'
        })
        console.log(otpin);
        setTimeout(redirect, 3000);
        // redirect();
      }
      else{
        alert("wrong");
      }
}
function redirect(){
  window.open("../../homePage/diwali-homepage/diwali-homepage.html","_self");
  // console.log("hey");
}