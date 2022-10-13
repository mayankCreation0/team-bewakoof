 document.getElementById("email").value = JSON.parse(localStorage.getItem("mobile-number")) ;




function checkotp(){
  let otpin=document.getElementById("otpinputnum").value;
  if(otpin == 5)
  {
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
      title: 'Signed Up successfully'
    });
    setTimeout(redirect, 2500);
  }
  else
  {
    alert("wrong");
  }
}
function redirect(){
  window.open("../../homePage/diwali-homepage/diwali-homepage.html","_self");
}