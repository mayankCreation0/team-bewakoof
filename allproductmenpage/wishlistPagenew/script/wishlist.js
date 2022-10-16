import navbar from "../../pcomponents/nav.js"
// import footer from "../../pcomponents/foot.js"
document.getElementById("onlynav").innerHTML=navbar();
// document.getElementById("container-footer").innerHTML=footer();
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
function display(arr){
    document.getElementById("main").innerHTML="";
    arr.map((el,index)=>{
        const card=document.createElement("div");
        const imgDiv=document.createElement("div");
        const img=document.createElement("img");
        img.src=el.image;
        imgDiv.append(img);
        const details=document.createElement("div");
        const name=document.createElement("div");
        name.innerText=el.name;
        const flex=document.createElement("div");
        const flex1=document.createElement("div");
        flex1.innerHTML=`₹<span>${el.price}</span>`;
        const flex2=document.createElement("div");
        flex2.innerHTML=`₹${el.strikeOffPrice}`;
        const flex3=document.createElement("div");
        const discount=getDiscount(+(el.price),+(el.strikeOffPrice));
        flex3.innerText=`${discount}%`;
        flex.append(flex1,flex2,flex3);
        const tribeDiv=document.createElement("div");
        const tribePrice= +(el.price)-Math.floor((+(el.price)*15)/100);
        tribeDiv.innerText=`₹${tribePrice} For Tribe Members`
        details.append(name,flex,tribeDiv);
        const cross=document.createElement("div");
        cross.addEventListener("click",()=>{
            remove(el,index);
            check();
        })
        cross.innerHTML=`<i class="fa-regular fa-circle-xmark"></i>`
        cross.setAttribute("class","del");
        const cart=document.createElement("div");
        cart.innerHTML=`<i class= "fa-solid fa-bag-shopping">Add to bag</i>`;
        let check=false;
 for(let j=0;j<cartArr.length;j++){
     if(cartArr[j].id==el.id){
         check=true;
         console.log(cartArr[j].id,el.id);
         break;
     }
 }
 cart.innerHTML=`<i class= "fa-solid fa-bag-shopping">Add to bag</i>`
 
 if(check){
  cart.innerHTML=`<i class="fa-solid fa-bag-shopping"> Added to bag</i>` 
}
else{
  cart.innerHTML=`<i class="fa-solid fa-bag-shopping"> Add to bag</i>` 
}
 cart.addEventListener("click",()=>{
  sendCartdata(el,cart);
 })
        card.append(imgDiv,details,cross,cart);
        document.getElementById("main").append(card);
    })
}


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

function remove(el,index){
    wishArr.splice(index,1);
    localStorage.setItem("wishes",JSON.stringify(wishArr));
    display(wishArr);
    check(wishArr);
    displaywish();
}

const check=()=>{
    if(wishArr.length==0){
        const box=document.createElement("div");
        const card=document.createElement("div");
        box.setAttribute("id","card");
         const imgDiv=document.createElement("div");
         imgDiv.setAttribute("id","imgDiv");
         const img = document.createElement("img");
         img.src="https://images.bewakoof.com/web/group-3x-1509961969.png";
         imgDiv.append(img);
         const divempty=document.createElement("div");
         divempty.innerText="Your Wishlist is Empty !";
         divempty.setAttribute("id","divempty");
         const btndiv=document.createElement("div");
         btndiv.setAttribute("id","btndiv");
         
         btndiv.innerText="Continue Shopping";
        
        
         const card1=document.createElement("div");
         card1.setAttribute("id","card1");
         const divtry=document.createElement("div");
         divtry.setAttribute("id","divtry");
         divtry.innerText="You could try one of these categories:"
         const griddiv=document.createElement("div");
         griddiv.setAttribute("id","griddiv");
         const griddiv1=document.createElement("div");
         griddiv1.innerText="Men";
         const griddiv2=document.createElement("div");
         griddiv2.innerText="Women";
         griddiv.append(griddiv1,griddiv2);
         const agriddiv=document.createElement("div");
         agriddiv.setAttribute("id","agriddiv");
         agriddiv.innerText="Mobile Covers";
         card1.append(divtry,griddiv,agriddiv);
         card.append(imgDiv,divempty,btndiv);
         box.append(card,card1)
         document.getElementById("container").append(box);
        
    }
    else{
      
        display(wishArr);
    }
}
check();