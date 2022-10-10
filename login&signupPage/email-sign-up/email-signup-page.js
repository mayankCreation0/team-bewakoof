const togglePassword = document.querySelector("#togglePassword");
  const password = document.querySelector("#id_password");
  togglePassword.addEventListener("click", function (e) {
    const type =
      password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
    this.classList.toggle("fa-eye-slash");
  });
  
  function DataCreateforStudent(a,b, e, f) {
    this.name = a;
    this.lname=b;
    this.email = e;
    this.password = f;
    this.flag = "false";
  }
  
  document.querySelector("form").addEventListener("submit", collectdata);
  
  function collectdata() {
    console.log("afsgasg");
    event.preventDefault();
    let name = document.getElementById("fname").value || "";
    let lname = document.getElementById("lname").value || "";
    let email = document.getElementById("email").value || "";
    let password = document.getElementById("id_password").value || "";
      let newInstructor = new DataCreateforStudent(name, lname ,email, password);
      let AllInstructor =
        JSON.parse(localStorage.getItem("peopleRecord")) || [];
      AllInstructor.push(newInstructor);
      localStorage.setItem(
        "peopleRecord",
        JSON.stringify(AllInstructor)
      );
      let AllStudent =
        JSON.parse(localStorage.getItem("peopleRecord")) || [];
      localStorage.setItem("peopleRecord", JSON.stringify(AllStudent));
      alert("Signup successful!");
    window.open("../email-login-page/email-login-page.html", "_self");
  }