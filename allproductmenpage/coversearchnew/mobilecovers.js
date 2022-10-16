import navbar from "../pcomponents/nav.js"
import footer from "../pcomponents/foot.js"
document.getElementById("onlynav").innerHTML=navbar();
document.getElementById("container-footer").innerHTML=footer();


const displaywish=()=>{
    let wishArr=JSON.parse(localStorage.getItem("wishes"))||[];
    if(wishArr.length>0){
      document.getElementById("showwishimage").innerHTML=`<i class="fa-solid fa-heart"></i>`;
  }
  else{
      document.getElementById("showwishimage").innerHTML=`<i class="fa-regular fa-heart"></i>`;
  }
  }
  let wishArr=JSON.parse(localStorage.getItem("wishes"))||[];
  displaywish();
  const displycar = ()=>{
      let cartArr=JSON.parse(localStorage.getItem("cart_products"))||[];  
      console.log(cartArr.length)
   if(cartArr.length>0){
      document.getElementById("showcartnumber").style.display="block";
      console.log(cartArr.length)
      document.getElementById("showcartnumber").innerText=cartArr.length;
  }
  else{
      console.log(cartArr.length)
      document.getElementById("showcartnumber").style.display="none";
  }
  }
  let cartArr=JSON.parse(localStorage.getItem("cart_products"))||[];
  displycar()

document.getElementById("selectB").addEventListener("change", ()=>{
    let searchModel =document.getElementById("selectB").value;
    if(searchModel==="Apple"){
        let model=document.getElementById("selectM");
        model.innerHTML=`<option value="Model">Select Model</option>
        <option value="Iphone SE">Iphone SE</option>
        <option value="Iphone X">Iphone X</option>
        <option value="Iphone XS">Iphone XS</option>
        <option value="Iphone 11">Iphone 11</option>
        <option value="Iphone 11 Pro">Iphone 11 Pro</option>
        <option value="Iphone 12">Iphone 12</option>
        <option value="Iphone 12 Pro">Iphone 12 Pro</option>
        <option value="Iphone 13 Pro">Iphone 13 Pro</option>
        <option value="Iphone 14 Pro">Iphone 14 Pro</option>
        <option value="Iphone 14 Pro max">Iphone 14 Pro Max</option>`
    }
   else if(searchModel==="Samsung"){
        let model=document.getElementById("selectM");
        model.innerHTML=`<option value="Model">Select Model</option>
        <option value="Samsung Galaxy A07">Samsung Galaxy A07</option>
        <option value="Samsung Galaxy A70">Samsung Galaxy A70</option>
        <option value="Samsung Galaxy A51">Samsung Galaxy A51</option>
        <option value="Iphone 11">Samsung Galaxy A50</option>
        <option value="Iphone 11 Pro">Samsung Galaxy Note 20</option>
        <option value="Iphone 12">Samsung Galaxy F12</option>
        <option value="Iphone 12 Pro">Samsung Galaxy M11</option>
        <option value="Iphone 13 Pro">Samsung Galaxy A21</option>
        <option value="Iphone 14 Pro">Samsung Galaxy M31s</option>
        <option value="Iphone 14 Pro max">Samsung Galaxy M31</option>`
    }
    else if(searchModel==="Vivo"){
        let model=document.getElementById("selectM");
        model.innerHTML=`<option value="Model">Select Model</option>
        <option value="Samsung Galaxy A07">Vivo V5s</option>
        <option value="Samsung Galaxy A70">Vivo V5</option>
        <option value="Samsung Galaxy A51">Vivo V17</option>
        <option value="Iphone 11">Vivo v19</option>
        <option value="Iphone 11 Pro">Vivo V20</option>
        <option value="Iphone 12">Vivo V21</option>
        <option value="Iphone 12 Pro">Vivo V5s</option>
        <option value="Iphone 13 Pro">Vivo X60</option>
        <option value="Iphone 14 Pro">Vivo Y20</option>
        <option value="Iphone 14 Pro max">Vivo V5s</option>`
    }
    else if(searchModel==="Xiaomi"){
        let model=document.getElementById("selectM");
        model.innerHTML=`<option value="Model">Select Model</option>
        <option value="Samsung Galaxy A07">Xiaomi Redmi 6 pro</option>
        <option value="Samsung Galaxy A70">Xiaomi Redmi note 6 pro</option>
        <option value="Samsung Galaxy A51">Xiaomi note 7 pro</option>
        <option value="Iphone 11">Xiaomi 8 pro</option>
        <option value="Iphone 11 Pro">Xiaomi Redmi note 8 pro</option>
        <option value="Iphone 12">Xiaomi Redmi 7 </option>
        <option value="Iphone 12 Pro">Xiaomi Redmi note 9 </option>
        <option value="Iphone 13 Pro">Xiaomi Redmi 9 prime</option>
        <option value="Iphone 14 Pro">Xiaomi Redmi 9A</option>
        <option value="Iphone 14 Pro max">Xiaomi Mi A3</option>`
    }
    else if(searchModel==="Oppo"){
        let model=document.getElementById("selectM");
        model.innerHTML=`<option value="Model">Select Model</option>
        <option value="Samsung Galaxy A07">Oppo A7</option>
        <option value="Samsung Galaxy A70">Oppo A5s</option>
        <option value="Samsung Galaxy A51">Oppo Reno 2</option>
        <option value="Iphone 11">Oppo A31</option>
        <option value="Iphone 11 Pro">Oppo A53</option>
        <option value="Iphone 12">Oppo F17</option>
        <option value="Iphone 12 Pro">Oppo F17 pro</option>
        <option value="Iphone 13 Pro">Oppo Reno 5 pro</option>
        <option value="Iphone 14 Pro">Oppo A74</option>
        <option value="Iphone 14 Pro max">Oppo Reno 3 pro</option>`
    }
})
document.getElementById("search").addEventListener("click",()=>{
    let searchModel =document.getElementById("selectB").value;
localStorage.setItem("search_cover",searchModel);
location.href="../phoneCoverPage/cover.html";
})
