
let wishArr=JSON.parse(localStorage.getItem("wishes"))||[];
if(wishArr.length>0){
    document.getElementById("showwishimage").innerHTML=`<i class="fa-solid fa-heart"></i>`;
}
else{
    document.getElementById("showwishimage").innerHTML=`<i class="fa-regular fa-heart"></i>`;
}
let cartArr=JSON.parse(localStorage.getItem("cart_products"))||[];
 if(cartArr.length>0){
    document.getElementById("showcartnumber").innerText=cartArr.length;
}
else{
    document.getElementById("showcartnumber").style.display="none";
}
let tempc="true";
document.getElementById("categorymenu").addEventListener("click", ()=>{
   if(tempc==="true"){
    document.getElementById("categorymenu").innerHTML=`<i class="fa-sharp fa-solid fa-angle-up"></i>`
    document.getElementById("categoryclass").style.height="auto";
    tempc="false";
   }
   else{
    document.getElementById("categorymenu").innerHTML=`<i class="fa-sharp fa-solid fa-angle-down"></i>`;
    document.getElementById("categoryclass").style.height="0px";
    tempc="true";
   }
    
})


let temps="true";
document.getElementById("sizemenu").addEventListener("click", ()=>{
   if(temps==="true"){
    document.getElementById("sizemenu").innerHTML=`<i class="fa-sharp fa-solid fa-angle-up"></i>`;
    document.getElementById("sizeclass").style.height="auto";
    temps="false";
   }
   else{
    document.getElementById("sizemenu").innerHTML=`<i class="fa-sharp fa-solid fa-angle-down"></i>`;
    document.getElementById("sizeclass").style.height="0px";
    temps="true";
   }
    
})


let tempco="true";
document.getElementById("colormenu").addEventListener("click", ()=>{  
   if(tempco==="true"){
    document.getElementById("colormenu").innerHTML=`<i class="fa-sharp fa-solid fa-angle-up"></i>`;
    document.getElementById("colordiv").style.height="auto";
    tempco="false";
   }
   else{
    document.getElementById("colormenu").innerHTML=`<i class="fa-sharp fa-solid fa-angle-down"></i>`;
    document.getElementById("colordiv").style.height="0px";
    tempco="true";
   }
    
})


let temptype="true";
document.getElementById("typemenu").addEventListener("click", ()=>{
   if(temptype==="true"){
    document.getElementById("typemenu").innerHTML=`<i class="fa-sharp fa-solid fa-angle-up"></i>`;
    document.getElementById("typeclass").style.height="auto";
    temptype="false";
   }
   else{
    document.getElementById("typemenu").innerHTML=`<i class="fa-sharp fa-solid fa-angle-down"></i>`;
    document.getElementById("typeclass").style.height="0px";
    temptype="true";
   }
    
})


let temprating="true";
document.getElementById("ratingmenu").addEventListener("click", ()=>{
    
   
   if(temprating==="true"){
    document.getElementById("ratingmenu").innerHTML=`<i class="fa-sharp fa-solid fa-angle-up"></i>`;
    document.getElementById("ratingclass").style.height="auto";
    temprating="false";
   }
   else{
    document.getElementById("ratingmenu").innerHTML=`<i class="fa-sharp fa-solid fa-angle-down"></i>`;
    document.getElementById("ratingclass").style.height="0px";
    temprating="true";
   }
    
})
// document.getElementById("searchBox").addEventListener("keypress",()=>{
// const key=document.getElementById("searchBox").value;
// console.log(key);
// // if(key==="Enter"){
// //     document.getElementById("searchBox").innerText="";
// //     document.getElementById("searchBox").innerHTML="";   
// // }
// })


// http://localhost:3000/mens

const url="http://localhost:3000/mens";
async function get(url){
    
   const res= await fetch(url);
   const data=await res.json();
   console.log(data);
   display(data);
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
        card.append(imgDiv,contentMainDiv,tribeDiv,cart);
        document.getElementById("container").append(card);
    })
}

document.getElementById("bewakoof").addEventListener("click",()=>{
const url="http://localhost:3000/mens?types=Bewakoof"
get(url);   
})

document.getElementById("campus").addEventListener("click",()=>{
    const url="http://localhost:3000/mens?types=Campus sutra"
    get(url);  
    })

    document.getElementById("colorRed").addEventListener("click",()=>{
        const url="http://localhost:3000/mens?color=red"
        get(url);  
        })

 document.getElementById("colorBlack").addEventListener("click",()=>{
        const url="http://localhost:3000/mens?color=black"
        get(url);  
        })
   document.getElementById("colorWhite").addEventListener("click",()=>{
            const url="http://localhost:3000/mens?color=white"
            get(url);  
   }) 
   document.getElementById("colorgrey").addEventListener("click",()=>{
    const url="http://localhost:3000/mens?color=grey"
    get(url);  
})      

document.getElementById("sixe_x").addEventListener("click",()=>{
    const url="http://localhost:3000/mens?size=X"
    get(url);  
})   
document.getElementById("sixe_xl").addEventListener("click",()=>{
    const url="http://localhost:3000/mens?size=XL"
    get(url);  
})   
document.getElementById("sixe_xxl").addEventListener("click",()=>{
    const url="http://localhost:3000/mens?size=XXL"
    get(url);  
})   
document.getElementById("sixe_xxl").addEventListener("click",()=>{
    const url="http://localhost:3000/mens?size=XXL"
    get(url);  
})  

document.getElementById("highrating").addEventListener("click",async ()=>{
    const res= await fetch("http://localhost:3000/mens");
    const data=await res.json();
   let filterArr=data.filter((el)=>{
    return +(el.rating)>4.5;
   })
   display(filterArr);
})  

document.getElementById("midrating").addEventListener("click",async ()=>{
    const res= await fetch("http://localhost:3000/mens");
    const data=await res.json();
   let filterArr=data.filter((el)=>{
    if(+(el.rating)>3 && +(el.rating)<4.5) {
        return el.rating;
    }
   })
   display(filterArr);
})  
document.getElementById("lowrating").addEventListener("click",async ()=>{
    const res= await fetch("http://localhost:3000/mens");
    const data=await res.json();
   let filterArr=data.filter((el)=>{
    if(+(el.rating)>2 && +(el.rating)<3) {
        return el.rating;
    }
   })
   display(filterArr);
})  
////sort
document.getElementById("sort_price").addEventListener("change",()=>{
    console.log(event.target.value);
    let curr=event.target.value;
   
   let url;
   if(curr==="highToLow"){
    url="http://localhost:3000/mens?_sort=price&_order=desc";
   }
   else if(curr==="lowToHigh"){
    url="http://localhost:3000/mens?_sort=price&_order=asc";
   }
   else{
    url="http://localhost:3000/mens";
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
            const urlfl=`http://localhost:3000/mens?q=${flag}`
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
    const url=`http://localhost:3000/mens?q=${search}&_limit=5`;
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
    if(cartArr.length>0){
        document.getElementById("showcartnumber").innerText=cartArr.length;
    }
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
}

show();


