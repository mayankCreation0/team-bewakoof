
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

// http://localhost:3000/mens

const url="http://localhost:3000/mobile";
async function get(url){
    document.getElementById("loadingdiv").style.display="block";
   const res= await fetch(url);
   const data=await res.json();
   console.log(data);
   display(data);
   document.getElementById("loadingdiv").style.display="none";
}

get(url);


function display(data){
    document.getElementById("container").innerHTML="";
    data.map((el)=>{
        const card=document.createElement("div");
        const imgDiv=document.createElement("div");
        const img=document.createElement("img");
        img.src=el.image;
        imgDiv.append(img);
        const contentMainDiv = document.createElement("div");
        const contentdiv=document.createElement("div");
        const type=document.createElement("div");
        type.innerText=el.types;
        const name=document.createElement("div");
        name.innerText=el.name;
        const priceDiv=document.createElement("div");
        const price=document.createElement("div");
        price.innerText=`₹${el.price}`;
       
        const strikeOffPrice=document.createElement("div");
        strikeOffPrice.innerText=`₹${el.strikeOffPrice}`;
        priceDiv.append(price,strikeOffPrice);
        const tribeDiv=document.createElement("div");
        const tribePrice= +(el.price)-Math.floor((+(el.price)*15)/100);
        tribeDiv.innerText=`₹${tribePrice} For Tribe Members`
        const cart=document.createElement("div");
        cart.innerHTML=`<button><i class="fa-solid fa-bag-shopping"> Add to bag</i><button>`
        let check=false;
        for(let j=0;j<cartArr.length;j++){
            if(cartArr[j].id==el.id){
                check=true;
                console.log(cartArr[j].id,el.id);
                break;
            }
        }
        if(check){
            cart.innerHTML=`<button><i class="fa-solid fa-bag-shopping"> Added to bag</i><button>` 
        }
        else{
            cart.innerHTML=`<button><i class="fa-solid fa-bag-shopping"> Add to bag</i><button>` 
        }
        cart.addEventListener("click",()=>{
            sendCartdata(el,cart);
        })
        contentdiv.append(type,name,priceDiv);
        const wish=document.createElement("div"); 
        wish.innerHTML=`<i class="fa-regular fa-heart"></i>`
       
        let checkw=false;
    for(let j=0;j<wishArr.length;j++){
     if(wishArr[j].id==el.id){
         checkw=true;
         console.log(wishArr[j].id,el.id);
         break;
     }
 }
 if(checkw){
    wish.innerHTML=`<i class="fa-solid fa-heart"></i>`
 }
 else{
    wish.innerHTML=`<i class="fa-regular fa-heart"></i>`
 }
        wish.addEventListener("click",()=>{          
          showWishes(el,wish);
          if(wishArr.length>0){
            document.getElementById("showwishimage").innerHTML=`<i class="fa-solid fa-heart"></i>`;
        }
        else{
            document.getElementById("showwishimage").innerHTML=`<i class="fa-regular fa-heart"></i>`;
        }
        })
        
        contentMainDiv.append(contentdiv,wish)
        const rating=document.createElement("div");
        rating.innerHTML=`${el.rating}<i class="fa-solid fa-star"></i>`
        rating.setAttribute("id","ratediv");
        card.append(imgDiv,contentMainDiv,tribeDiv,cart,rating);
        card.addEventListener('click',()=>{
            localStorage.setItem("details",JSON.stringify(el));
        })
        document.getElementById("container").append(card);
    })
}



////sort
document.getElementById("sort_price").addEventListener("change",()=>{
    console.log(event.target.value);
    let curr=event.target.value;
   
   let url;
   if(curr==="highToLow"){
    url="http://localhost:3000/mobile?_sort=price&_order=desc";
   }
   else if(curr==="lowToHigh"){
    url="http://localhost:3000/mobile?_sort=price&_order=asc";
   }
   else{
    url="http://localhost:3000/mobile";
   }
   get(url);
})
function boxShow(data){
    document.getElementById("suggestions").innerHTML="";
    data.map((el)=>{
        const div=document.createElement("div");
        const p=document.createElement("p");
        p.innerText=el.name;
        div.append(p);
        div.addEventListener("click",()=>{
            const flag=el.category;
            const urlfl=`http://localhost:3000/mobile?q=${flag}`
            document.getElementById("suggestions").innerHTML="";
            get(urlfl);
        })
        document.getElementById("suggestions").append(div);
    })
}
let timerId;
function debounce(fn,delay){
  
  
       if(timerId) {
        clearTimeout(timerId)
       }
       timerId = setTimeout(() => {
        console.log('suggest')
                fn();
              },delay);

}
 async function show(){
    const search=document.getElementById("searchBox").value;
    // console.log(search);""
    if(search==""){
        console.log(search);
        document.getElementById("suggestions").innerHTML="";
       }
  else{
    const url=`http://localhost:3000/mobile?q=${search}&_limit=5`;
    const res=await fetch(url);
    const data= await res.json();
    boxShow(data);
   }
   
}
document.getElementById("searchBox").addEventListener("input",()=>{
    debounce(show,300);
})


function  sendCartdata(el,cart){
    cartArr=JSON.parse(localStorage.getItem("cart_products"))||[];
    
    let check=false;
    for(let i=0;i<cartArr.length;i++){
        if(el.id===cartArr[i].id){
            check=true;
            break;
        }
    }
    
   
    if(!check){
        cart.innerHTML=`<button><i class="fa-solid fa-bag-shopping">Added To Bag</i><button>`
        cartArr.push(el);
       localStorage.setItem("cart_products",JSON.stringify(cartArr));
    }
    else{
        cart.innerHTML=`<button><i class="fa-solid fa-bag-shopping">Added To Bag</i><button>`
    }
    // console.log('cart')
    displycar() 
    
}
let tempWish="true";
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
    wish.innerHTML=`<i class="fa-regular fa-heart"></i>`;
    wishArr = wishArr.filter((Element)=>{
        return el.id!==Element.id;
    })
    localStorage.setItem("wishes",JSON.stringify(wishArr));
    }
    else{
    
    wish.innerHTML=`<i class="fa-solid fa-heart"></i>`;
    wishArr.push(el);
    localStorage.setItem("wishes",JSON.stringify(wishArr));
    }
    displaywish();
}

show();


