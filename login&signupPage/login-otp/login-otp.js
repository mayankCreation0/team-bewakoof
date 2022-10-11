
 document.getElementById("email").value = JSON.parse(localStorage.getItem("mobile-number")) ;

function checkotp(){
      let otpin=document.getElementById("otpinputnum").value;
      if(otpin == 5){
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
        })
      }
      else{
        alert("wrong");
      }
      console.log(otpin);
      setTimeout(redirect, 3000);
}
function redirect(){
  location.href = "#";
  // console.log("hey");
}