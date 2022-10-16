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
        <option value="Iphone 7">Iphone 7</option>
        <option value="Iphone XR">Iphone XR</option>
        <option value="Iphone XS">Iphone XS</option>
        <option value="Iphone 11">Iphone 11</option>
        <option value="Iphone 11 Pro">Iphone 11 Pro</option>
        <option value="Iphone 11 Pro Max">Iphone 11 Pro Max</option>`
    }
   else if(searchModel==="Samsung"){
        let model=document.getElementById("selectM");
        model.innerHTML=`<option value="Model">Select Model</option>
        <option value="Samsung Galaxy A50">Samsung Galaxy A50</option>
        <option value="Samsung Galaxy M30s">Samsung Galaxy M30s</option>
        <option value="Samsung Galaxy A30">Samsung Galaxy A30</option>
        <option value="Samsung Galaxy A51">Samsung Galaxy A51</option>
        <option value="Samsung Galaxy M31">Samsung Galaxy M31</option>
        <option value="Samsung Galaxy Note 10 Lite">Samsung Galaxy Note 10 Lite</option>
        <option value="Samsung Galaxy M11">Samsung Galaxy M11</option>  `
    }
    else if(searchModel==="Realme"){
        let model=document.getElementById("selectM");
        model.innerHTML=`<option value="Model">Select Model</option>
        <option value="Realme 8 Pro">Realme 8 Pro</option>
        <option value="Realme GT Neo 3">Realme GT Neo 3</option>
        <option value="Realme 9 5G">Realme 9 5G</option>
        <option value="Realme Narzo 50 I">Realme Narzo 50 I</option>
        <option value="Realme 9 pro">Realme 9 pro </option>
        `
    }
    else if(searchModel==="OnePlus"){
        let model=document.getElementById("selectM");
        model.innerHTML=`<option value="Model">Select Model</option>
        <option value="OnePlus 6">OnePlus 6</option>
        <option value="OnePlus 6T">OnePlus 6T</option>
        <option value="OnePlus 7">OnePlus 7</option>
        <option value="OnePlus 7 Pro">OnePlus 7 Pro</option>
        <option value="OnePlus Nord">OnePlus Nord</option>
        <option value="OnePlus 8 Pro">OnePlus 8 Pro</option>
        `
    }
    else if(searchModel==="Huawei"){
        let model=document.getElementById("selectM");
        model.innerHTML=`<option value="Model">Select Model</option>
        <option value="Huawei P30 Pro">Huawei P30 Pro</option>
        <option value="Huawei P40 Pro">Huawei P40 Pro</option>
        <option value="Huawei P30 Lite">Huawei P30 Lite</option>`
    }
})
document.getElementById("search").addEventListener("click",()=>{
    let searchBrand =document.getElementById("selectB").value;
    let searchModel = document.getElementById("selectM").value;
localStorage.setItem("search_cover",searchBrand);
localStorage.setItem("search_coverM",searchModel);
location.href="../phoneCoverPagenew/cover.html";
})
