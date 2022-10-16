import navbar from "../../pcomponents/nav.js"
import footer from "../../pcomponents/foot.js"
document.getElementById("onlynav").innerHTML=navbar();
document.getElementById("container-footer").innerHTML=footer();

let image = document.getElementById("large-img");
let small = document.getElementsByClassName("small-img");

small[0].onclick = () => {
  image.src = small[0].src;
};

small[1].onclick = () => {
  image.src = small[1].src;
};

small[2].onclick = () => {
  image.src = small[2].src;
};

small[3].onclick = () => {
  image.src = small[3].src;
};
if(localStorage.getItem("hidden")==="true"){
  document.getElementById("smallimg").style.visibility="hidden";
  document.getElementById("span_size").style.visibility="hidden";
  document.getElementById("selectsize").style.display="none";
 
}
else{
  document.getElementById("smallimg").style.visibility="visible";
  document.getElementById("span_size").style.visibility="visible";
  document.getElementById("selectsize").style.display="block";
  document.getElementById("selectsize").style.display="flex";
}

///page
if(localStorage.getItem("page")==="mobile"){
document.getElementById("relatedDivs").innerHTML=`
<div class="relmaindiv">
          <div class="relimagediv">
            <img src="https://images.bewakoof.com/t640/king-life-printed-designer-hard-cover-for-iphone-xr-impact-resistant-matte-finish-524654-1658837185-1.jpg" alt="">
          </div>
          <div class="reldetaildiv">
            <h3>Qrioh</h3>
            
            <div calss="relpricediv">₹<span>529</span></div>
          </div>
        </div>
        <div >
          <div class="relimagediv">
            <img src="https://images.bewakoof.com/t640/disturb-typography-premium-glass-cover-for-samsung-galaxy-m30s-impact-resistant-matte-finish-531727-1659531786-1.jpg" alt="">
          </div>
          <div class="reldetaildiv">
            <h3>Qrioh</h3>
           
            <div calss="relpricediv">₹<span>529</span></div>
          </div>
        </div>
        <div >
          <div class="relimagediv">
            <img src="https://images.bewakoof.com/t320/black-aura-printed-premium-glass-cover-for-vivo-z1-pro-483401-1648451340-1.jpg" alt="">
          </div>
          <div class="reldetaildiv">
            <h3>Qrioh</h3>
            
            <div calss="relpricediv">₹<span>529</span></div>
          </div>
        </div>
        <div >
          <div class="relimagediv">
            <img src="https://images.bewakoof.com/t640/royal-bike-typography-premium-glass-cover-for-oneplus-7-pro-impact-resistant-matte-finish-525831-1659101732-1.jpg" alt="">
          </div>
          <div class="reldetaildiv">
            <h3>Qrioh</h3>
            
            <div calss="relpricediv">₹<span>529</span></div>
          </div>
        </div>
`
}
else if(localStorage.getItem("page")==="men"){
  document.getElementById("relatedDivs").innerHTML=`
  <div class="relmaindiv">
          <div class="relimagediv">
            <img src="https://images.bewakoof.com/t640/gohan-half-sleeve-t-shirt-512884-1655993277-1.jpg" alt="">
          </div>
          <div class="reldetaildiv">
            <h3>Bewakoof</h3>
            
            <div calss="relpricediv">₹<span>589</span></div>
          </div>
        </div>
        <div >
          <div class="relimagediv">
            <img src="https://images.bewakoof.com/t640/men-s-blue-san-francisco-typography-oversized-t-shirt-539817-1662118761-1.jpg" alt="">
          </div>
          <div class="reldetaildiv">
            <h3>Bewakoof</h3>
           
            <div calss="relpricediv">₹<span>699</span></div>
          </div>
        </div>
        <div >
          <div class="relimagediv">
            <img src="https://images.bewakoof.com/t640/men-s-maroon-empire-typography-oversized-t-shirt-539820-1662119209-1.jpg" alt="">
          </div>
          <div class="reldetaildiv">
            <h3>Bewakoof</h3>
            
            <div calss="relpricediv">₹<span>849</span></div>
          </div>
        </div>
        <div >
          <div class="relimagediv">
            <img src="https://images.bewakoof.com/t1080/dope-bear-oversized-fit-t-shirt-547532-1665403983-1.jpg" alt="">
          </div>
          <div class="reldetaildiv">
            <h3>Bewakoof</h3>
            
            <div calss="relpricediv">₹<span>739</span></div>
          </div>
        </div>
  `
}
else if(localStorage.getItem("page")==="women"){
  document.getElementById("relatedDivs").innerHTML=`
  <div class="relmaindiv">
          <div class="relimagediv">
            <img src="https://images.bewakoof.com/t640/get-going-snoopy-boyfriend-t-shirt-516609-1657202693-1.jpg" alt="">
          </div>
          <div class="reldetaildiv">
            <h3>Bewakoof</h3>
            
            <div calss="relpricediv">₹<span>367</span></div>
          </div>
        </div>
        <div >
          <div class="relimagediv">
            <img src="https://images.bewakoof.com/t640/women-s-white-black-striped-t-shirt-539548-1662017564-1.jpg" alt="">
          </div>
          <div class="reldetaildiv">
            <h3>Clovia</h3>
           
            <div calss="relpricediv">₹<span>472</span></div>
          </div>
        </div>
        <div >
          <div class="relimagediv">
            <img src="https://images.bewakoof.com/t640/women-s-purple-new-typography-oversized-t-shirt-535883-1660216469-1.jpg" alt="">
          </div>
          <div class="reldetaildiv">
            <h3>Dillinger</h3>
            
            <div calss="relpricediv">₹<span>480</span></div>
          </div>
        </div>
        <div >
          <div class="relimagediv">
            <img src="https://images.bewakoof.com/t640/women-s-multicolor-abstract-printed-dress-536774-1660734515-1.jpg" alt="">
          </div>
          <div class="reldetaildiv">
            <h3>The Dry State</h3>
            
            <div calss="relpricediv">₹<span>791</span></div>
          </div>
        </div>
  `
}
// let small1=document.getElementById("small_img1").src;
// console.log(small1);
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

function getDiscount(no,old){
  const diff=Math.abs(old-no);
  const division =diff/old;
  const ans=division*100;
  return Math.floor(ans);
}
const obj=JSON.parse(localStorage.getItem("details"))||{};



function display(el){
  document.getElementById("btns").innerHTML = ""
  console.log(el);
  const image=document.getElementById("large-img");
  image.src=el.image;
  const small1 = document.getElementsByClassName("small-img");
  small1[0].src =el.image;
  small1[1].src =el.image1;
  small1[2].src =el.image2;
  small1[3].src =el.image3;
  document.getElementById("brand").innerText=el.types;
  document.getElementById("title").innerText=el.name;
  document.getElementById("price1").innerHTML=`₹<span>${el.price}</span>`;
  document.getElementById("price2").innerText=`₹${el.strikeOffPrice}`
  const discount=getDiscount(+(el.price),+(el.strikeOffPrice));
 document.getElementById("price3").innerText=`${discount}%`;
const detail=document.getElementById("product_details");
detail.innerText=el.details;

 const cart=document.createElement("div");
 let btn1 = document.createElement("button");

 let check=false;
 for(let j=0;j<cartArr.length;j++){
     if(cartArr[j].id==el.id){
         check=true;
         console.log(cartArr[j].id,el.id);
         break;
     }
 }

//wishlisted or not
let checkw=false;
 for(let j=0;j<wishArr.length;j++){
     if(wishArr[j].id==el.id){
         checkw=true;
         console.log(wishArr[j].id,el.id);
         break;
     }
 }

 let btn2 = document.createElement("button");
 btn1.innerHTML=`<i class= "fa-solid fa-bag-shopping">Add to bag</i>`
 cart.append(btn1);
 if(check){
  btn1.innerHTML=`<i class="fa-solid fa-bag-shopping"> Added to bag</i>` 
}
else{
  btn1.innerHTML=`<i class="fa-solid fa-bag-shopping"> Add to bag</i>` 
}
 cart.addEventListener("click",()=>{
  sendCartdata(el,btn1);
 })
 const wish=document.createElement("div"); 
 btn2.innerHTML=`<i class="fa-regular fa-heart"> Wishlist</i>`
 wish.append(btn2)
 if(checkw){
  btn2.innerHTML=`<i class="fa-solid fa-heart"> Wishlisted</i>` 
}
else{
  btn2.innerHTML=`<i class="fa-regular fa-heart"> Wishlist</i>` 
}
 wish.addEventListener("click",()=>{
  showWishes(el,btn2);
 })
        document.getElementById("btns").append(cart,wish);
}
display(obj);


function  sendCartdata(el,btn1){
  cartArr=JSON.parse(localStorage.getItem("cart_products"))||[];
  
  let check=false;
  for(let i=0;i<cartArr.length;i++){
      if(el.id===cartArr[i].id){
          check=true;
          break;
      }
  }
  if(!check){
      btn1.innerHTML=`<i class="fa-solid fa-bag-shopping">Added To Bag</i>`
      cartArr.push(el);
     localStorage.setItem("cart_products",JSON.stringify(cartArr));
  }
  else{
      btn1.innerHTML=`<i class="fa-solid fa-bag-shopping">Added To Bag</i>`
  }
  // console.log('cart')
  displycar() 
  
}

function showWishes(el,wish){
  wishArr=JSON.parse(localStorage.getItem("wishes"))||[];         
  let length=wishArr.length;
  if(length>0){
     document.getElementById("showwishimage").innerHTML=`<i class="fa-solid fa-heart"></i>`;
  }
  else{
     document.getElementById("showwishimage").innerHTML=`<i class="fa-regular fa-heart"></i>`;
  }
  let check=false;
  for(let i=0;i<length;i++){
      if(el.id===wishArr[i].id){
          check=true;
          break;
      }
  }
  if(check){
  wish.innerHTML=`<i class="fa-regular fa-heart">Wishlist</i>`;
  wishArr = wishArr.filter((Element)=>{
      return el.id!==Element.id;
  })
  localStorage.setItem("wishes",JSON.stringify(wishArr));
  }
  else{
  
  wish.innerHTML=`<i class="fa-solid fa-heart">Wishlisted</i>`;
  wishArr.push(el);
  localStorage.setItem("wishes",JSON.stringify(wishArr));
  }
  displaywish();
}

let checkSize=0;
document.getElementById("sizex").addEventListener("click",()=>{
  document.getElementById("sizex").style.backgroundColor="black";
  document.getElementById("sizex").style.color="white";
  document.getElementById("sizexxl").style.backgroundColor="white";
  document.getElementById("sizexxl").style.color="black";
  document.getElementById("sizexl").style.backgroundColor="white";
  document.getElementById("sizexl").style.color="black";
})
document.getElementById("sizexl").addEventListener("click",()=>{
  document.getElementById("sizexl").style.backgroundColor="black";
  document.getElementById("sizexl").style.color="white";
  document.getElementById("sizexxl").style.backgroundColor="white";
  document.getElementById("sizexxl").style.color="black";
  document.getElementById("sizex").style.backgroundColor="white";
  document.getElementById("sizex").style.color="black";
})
document.getElementById("sizexxl").addEventListener("click",()=>{
  document.getElementById("sizexxl").style.backgroundColor="black";
  document.getElementById("sizexxl").style.color="white";
  document.getElementById("sizex").style.backgroundColor="white";
  document.getElementById("sizex").style.color="black";
  document.getElementById("sizexl").style.backgroundColor="white";
  document.getElementById("sizexl").style.color="black";
})

