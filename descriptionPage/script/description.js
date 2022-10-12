

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


let wishArr=JSON.parse(localStorage.getItem("wishes"))||[];
if(wishArr.length>0){
    document.getElementById("showwishimage").innerHTML=`<i class="fa-solid fa-heart"></i>`;
}
else{
    document.getElementById("showwishimage").innerHTML=`<i class="fa-regular fa-heart"></i>`;
}
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
  console.log(el);
  image.src=obj.image;
  document.getElementById("brand").innerText=el.types;
  document.getElementById("title").innerText=el.name;
  document.getElementById("price1").innerHTML=`₹<span>${el.price}</span>`;
  document.getElementById("price2").innerText=`₹${el.strikeOffPrice}`
  const discount=getDiscount(+(el.price),+(el.strikeOffPrice));
 document.getElementById("price3").innerText=`${discount}%`;


 const cart=document.createElement("div");
 cart.innerHTML=`<button class="button1"><i class= "fa-solid fa-bag-shopping">Add to bag</i><button>`

 const wish=document.createElement("div"); 
        wish.innerHTML=`<button class="button2"><i class="fa-regular fa-heart"> Wishlist</i><button>`
        document.getElementById("btns").append(cart,wish);
}
display(obj);






