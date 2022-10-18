import navbar from "../../pcomponents/nav.js"
import footer from "../../pcomponents/foot.js"
document.getElementById("onlynav").innerHTML=navbar();
document.getElementById("container-footer").innerHTML=footer();

document.getElementById("showwishimage").addEventListener("click" , () => {
    location.href ="../wishlistPagenew/wishlist.html";
})
document.getElementById("showcartimage").addEventListener("click" , () =>{
    location.href= "../../cartAndCheckout/cart.html";
})
localStorage.setItem('category',"")
localStorage.setItem('types',"")
 localStorage.setItem('color',"");
localStorage.setItem('size',"");
 localStorage.setItem('rating',"");


function checkforcolor(){
let a=0;    

   function checkcategory(){
    const category = localStorage.getItem('category');
    if(category!=""){
        a++;
        document.getElementById('categoryname').style.color='#42a2a2';
    }
   else{
        document.getElementById('categoryname').style.color="black";
    }
   }

   function checksize(){
   
    const size = localStorage.getItem('size');
    if(size!=""){
        a++;
        document.getElementById('sizename').style.color='#42a2a2';
    }
    else if(size===""){
        document.getElementById('sizename').style.color="black";
    }
   }
   function checkcolor(){
    const color = localStorage.getItem('color');
    if(color!=""){
        a++;
        document.getElementById('colorname').style.color='#42a2a2';
    }
    else{
        document.getElementById('colorname').style.color="black";
    }
   }
   function checktype(){
    const type = localStorage.getItem('types');
    if(type!=""){
        a++;
        document.getElementById('typename').style.color='#42a2a2';
    }
    else {
        document.getElementById('typename').style.color="black";
    }

   }
   function checkrating(){
    const rating = localStorage.getItem('rating');
    if(rating!=""){
        a++;
        document.getElementById('ratingname').style.color='#42a2a2';
    }
    else {
        document.getElementById('ratingname').style.color="black";
    }
   }
   checkcategory();
   checksize();
   checktype();
   checkrating();
   checkcolor();
   if(a>0){
    document.getElementById("clear").style.color="#42a2a2";
   }
   else{
    document.getElementById("clear").style.color='rgb(158 158 160)';
   }
}

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
    // showcartimage
    // document.getElementById("showcartimage").style.color="rgb(255,212,59)";
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



// https://bewakoof-clone-api.herokuapp.com/mens

const url="https://bewakoof-clone-api.herokuapp.com/mens";

async function get(url){
    document.getElementById("loadingdiv").style.display="block";

   const res= await fetch(url);
   const data=await res.json();
   document.getElementById("loadingdiv").style.display="none";
   return data;
   
}
const Firstdisplay =async()=>{
    let data = await get('https://bewakoof-clone-api.herokuapp.com/mens');
    display(data);
}
Firstdisplay();

 const Applyfilter =async ()=>{
  checkforcolor();
   let category = localStorage.getItem('category')||"";
   let type = localStorage.getItem('types')||"";
   let color = localStorage.getItem('color')||"";
   let size = localStorage.getItem('size')||"";
   let rating = localStorage.getItem('rating')||"";
   if(category!=""){
    const url=`https://bewakoof-clone-api.herokuapp.com/mens?category=${category}`
    let data = await get(url);
    if(type!=""){
        data = data.filter((el)=>{
            return el.types===type;
        })
    }
     if(color!=""){
        data = data.filter((el)=>{
            return el.color===color;
        })
     }
     if(size!=""){
        data = data.filter((el)=>{
            return +(el.rating)>4.5;
        })
     }
     if(rating!=""){
        // const ratingurl= await get(`https://bewakoof-clone-api.herokuapp.com/mens`);
       if(rating==="highRating"){
        data = data.filter((el)=>{
            return el.rating>=4.5;
        })
       }
       else if(rating==="midRating"){
        data = data.filter((el)=>{
            return el.rating>=3
        })
       }
       else{
        data = data.filter((el)=>{
            return el.rating>=2
        })
       }
     }
    display(data);
     return ;
   }
   else if(type!==""){
    const url=`https://bewakoof-clone-api.herokuapp.com/mens?types=${type}`
    let data = await get(url);
    if(color!=""){
        data = data.filter((el)=>{
            return el.color===color;
        })
     }
     if(size!=""){
        data = data.filter((el)=>{
            return +(el.rating)>4.5;
        })
     }
     if(rating!=""){
        // const ratingurl= await get(`https://bewakoof-clone-api.herokuapp.com/mens`);
       if(rating==="highRating"){
        data = data.filter((el)=>{
            return el.rating>=4.5;
        })
       }
       else if(rating==="midRating"){
        data = data.filter((el)=>{
            return el.rating>=3
        })
       }
       else{
        data = data.filter((el)=>{
            return el.rating>=2
        })
       }
     }
    display(data);
    return;
   }
   else if(color!==""){
     console.log(color);
    const url=`https://bewakoof-clone-api.herokuapp.com/mens?color=${color}`
    let data = await get(url)
    console.log(data);
     if(size!=""){
        data = data.filter((el)=>{
            return +(el.rating)>4.5;
        })
     }
     if(rating!=""){
        // const ratingurl= await get(`https://bewakoof-clone-api.herokuapp.com/mens`);
       if(rating==="highRating"){
        data = data.filter((el)=>{
            return el.rating>=4.5;
        })
       }
       else if(rating==="midRating"){
        data = data.filter((el)=>{
            return el.rating>=3
        })
       }
       else{
        data = data.filter((el)=>{
            return el.rating>=2
        })
       }
     }
    display(data);
    return;
   }
   else if(size!==""){
    const url=`https://bewakoof-clone-api.herokuapp.com/mens?size=${size}`
    let data = await get(url);
     if(rating!=""){
        // const ratingurl= await get(`https://bewakoof-clone-api.herokuapp.com/mens`);
       if(rating==="highRating"){
        data = data.filter((el)=>{
            return el.rating>=4.5;
        })
       }
       else if(rating==="midRating"){
        data = data.filter((el)=>{
            return el.rating>=3
        })
       }
       else{
        data = data.filter((el)=>{
            return el.rating>=2
        })
       }
     }
    display(data);
    return;
   }
  else if(rating!=""){
    let data = await get('https://bewakoof-clone-api.herokuapp.com/mens');
 
        // const ratingurl= await get(`https://bewakoof-clone-api.herokuapp.com/mens`);
       if(rating==="highRating"){
        data = data.filter((el)=>{
            return el.rating>=4.5;
        })
       }
       else if(rating==="midRating"){
        data = data.filter((el)=>{
            return el.rating>=3
        })
       }
       else{
        data = data.filter((el)=>{
            return el.rating>=2
        })
       }
    display(data);
  }
  else{
    console.log("printDisplay");
    Firstdisplay();
  }
 }
function display(data){
    document.getElementById("container").innerHTML="";
    if(data.length===0){
        document.getElementById("container")
       const div=document.createElement("div");
       div.setAttribute("id","sorry");
       const div1=document.createElement("div");
       div1.innerText="Sorry, We couldn't Find any matches!";
       const srybtn=document.createElement("div");
       srybtn.setAttribute("id","sorrybtn");
       srybtn.innerText="Clear Filters";
       srybtn.addEventListener("click",()=>{
        clearAllFilter();
       })
       div.append(div1,srybtn);
       document.getElementById("container").append(div);
        document.getElementById("container").style.display="block";
    }
    else{
        document.getElementById("container").style.display="grid";
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
            imgDiv.addEventListener('click',()=>{
                localStorage.setItem("details",JSON.stringify(el));
                localStorage.setItem("hidden","false");
                localStorage.setItem("page","men");
                location.href="../descriptionPagenew/description.html";
            })
            document.getElementById("container").append(card);
        })
    }
}
document.getElementById("tshirt").addEventListener("click",(e)=>{
    // let category = localStorage.getItem('category')||""
    let elid = localStorage.getItem('category')||""
    if(elid!=""){
        if(elid==='Shirt'){
            document.getElementById("shirt").style.color = 'rgb(158 158 160)'
        }
        else if(elid==='Hoodies'){
            document.getElementById("hoodies").style.color = 'rgb(158 158 160)'
        }
        else if(elid==='Jacket'){
            document.getElementById("jacket").style.color = 'rgb(158 158 160)'
        }
        else{
            localStorage.setItem('category',"");
            e.target.style.color = 'rgb(158 158 160)';
            Applyfilter();
            return
        }
    }
e.target.style.color = '#42a2a2'
    localStorage.setItem("category",'Tshirt');
   
    Applyfilter();
    })

    document.getElementById("shirt").addEventListener("click",(e)=>{
       
        let elid = localStorage.getItem('category')||""
        if(elid!=""){
            if(elid==='Tshirt'){
                document.getElementById("tshirt").style.color = 'rgb(158 158 160)'
            }
            else if(elid==='Hoodies'){
                document.getElementById("hoodies").style.color = 'rgb(158 158 160)'
            }
            else if(elid==='Jacket'){
                document.getElementById("jacket").style.color = 'rgb(158 158 160)'
            }
            else{
                localStorage.setItem('category',"");
                e.target.style.color = 'rgb(158 158 160)';
                Applyfilter();
                return
            }
        }
        e.target.style.color = '#42a2a2'
        localStorage.setItem("category",'Shirt');
        Applyfilter();
        
        }) 
 document.getElementById("hoodies").addEventListener("click",(e)=>{
            // const url="https://bewakoof-clone-api.herokuapp.com/mens?category=Hoodies"
            let elid = localStorage.getItem('category')||""
            if(elid!=""){
                if(elid==='Tshirt'){
                    document.getElementById("tshirt").style.color = 'rgb(158 158 160)'
                }
                else if(elid==='Shirt'){
                    document.getElementById("shirt").style.color = 'rgb(158 158 160)'
                }
                else if(elid==='Jacket'){
                    document.getElementById("jacket").style.color = 'rgb(158 158 160)'
                }
                else{
                    localStorage.setItem('category',"");
                    e.target.style.color = 'rgb(158 158 160)';
                    Applyfilter();
                    return
                }
            }
            e.target.style.color = '#42a2a2'
            localStorage.setItem("category",'Hoodies');
            Applyfilter();   
            })
   document.getElementById("jacket").addEventListener("click",(e)=>{
                // const url="https://bewakoof-clone-api.herokuapp.com/mens?category=Jacket"

                let elid = localStorage.getItem('category')||""
            if(elid!=""){
                if(elid==='Tshirt'){
                    document.getElementById("tshirt").style.color = 'rgb(158 158 160)'
                }
                else if(elid==='Shirt'){
                    document.getElementById("shirt").style.color = 'rgb(158 158 160)'
                }
                else if(elid==='Hoodies'){
                    document.getElementById("hoodies").style.color = 'rgb(158 158 160)'
                }
                else{
                    localStorage.setItem('category',"");
                    e.target.style.color = 'rgb(158 158 160)';
                    Applyfilter();
                    return
                }
            }
            e.target.style.color = '#42a2a2'
                localStorage.setItem("category",'Jacket');
            Applyfilter();   
                })

  

document.getElementById("bewakoof").addEventListener("click",(e)=>{
// const url="https://bewakoof-clone-api.herokuapp.com/mens?types=Bewakoof"
let elid = localStorage.getItem('types')||""
if(elid!=""){
    if(elid==='Campus Sutra'){
        document.getElementById("campus").style.color = 'rgb(158 158 160)'
    }
    else if(elid==='Mad Over Print'){
        document.getElementById("madOver").style.color = 'rgb(158 158 160)'
    }
    else if(elid==='Adro'){
        document.getElementById("adro").style.color = 'rgb(158 158 160)'
    }
    else {
        localStorage.setItem('types',"");
        e.target.style.color = 'rgb(158 158 160)';
        Applyfilter();
        return
    }
}
e.target.style.color = '#42a2a2'
localStorage.setItem("types",'Bewakoof');
Applyfilter();      
})

document.getElementById("campus").addEventListener("click",(e)=>{
    let elid = localStorage.getItem('types')||""
    if(elid!=""){
        if(elid==='Bewakoof'){
            document.getElementById("bewakoof").style.color = 'rgb(158 158 160)'
        }
        else if(elid==='Mad Over Print'){
            document.getElementById("madOver").style.color = 'rgb(158 158 160)'
        }
        else if(elid==='Adro'){
            document.getElementById("adro").style.color = 'rgb(158 158 160)'
        }
        else{
            localStorage.setItem('types',"");
            e.target.style.color = 'rgb(158 158 160)';
            Applyfilter();
            return
        }
    }
    e.target.style.color = '#42a2a2';
    localStorage.setItem("types",'Campus Sutra');
Applyfilter();
    })
    document.getElementById("adro").addEventListener("click",(e)=>{
        let elid = localStorage.getItem('types')||""
        if(elid!=""){
            if(elid==='Bewakoof'){
                document.getElementById("bewakoof").style.color = 'rgb(158 158 160)'
            }
           else if(elid==='Mad Over Print'){
                document.getElementById("madOver").style.color = 'rgb(158 158 160)'
            }
            else if(elid==='Campus Sutra'){
                document.getElementById("campus").style.color = 'rgb(158 158 160)'
            }
            else{
                localStorage.setItem('types',"");
                e.target.style.color = 'rgb(158 158 160)';
                Applyfilter();
                return
            }
        }
    
        e.target.style.color = '#42a2a2';
        localStorage.setItem("types",'Adro');
    Applyfilter();
        })

        document.getElementById("madOver").addEventListener("click",(e)=>{
            let elid = localStorage.getItem('types')||""
            if(elid!=""){
                if(elid==='Bewakoof'){
                    document.getElementById("bewakoof").style.color = 'rgb(158 158 160)'
                }
               else if(elid==='Adro'){
                    document.getElementById("adro").style.color = 'rgb(158 158 160)'
                }
                else if(elid==='Campus Sutra'){
                    document.getElementById("campus").style.color = 'rgb(158 158 160)'
                }
                else{
                    localStorage.setItem('types',"");
                    e.target.style.color = 'rgb(158 158 160)';
                    Applyfilter();
                    return
                }
            }
        
            e.target.style.color = '#42a2a2';
            localStorage.setItem("types",'Mad Over Print');
        Applyfilter();
            })
///////color filter
    document.getElementById("colorRed").addEventListener("click",(e)=>{
        // const url="https://bewakoof-clone-api.herokuapp.com/mens?color=red"
        let elid = localStorage.getItem('color')||""
        if(elid!=""){
            if(elid==='Black'){
                document.getElementById("colorBlack").style.border = '2px solid white'
            }
            else if(elid==='White'){
                document.getElementById("colorWhite").style.border = '2px solid grey'
            }
            else if(elid==='Grey'){
                document.getElementById("colorgrey").style.border = '2px solid white'
            }
            else if(elid==='Blue'){
                document.getElementById("colorblue").style.border = '2px solid white'
            }
            else if(elid==='Yellow'){
                document.getElementById("coloryellow").style.border = '2px solid white'
            }
            else{
                localStorage.setItem('color',"");
                e.target.style.border = '2px solid white';
                Applyfilter();
                return
            }
        }
e.target.style.border = '2px solid #42a2a2'
        localStorage.setItem("color","Red");
        Applyfilter();
        })

 document.getElementById("colorBlack").addEventListener("click",(e)=>{
        // const url="https://bewakoof-clone-api.herokuapp.com/mens?color=black"
        let elid = localStorage.getItem('color')||""
        if(elid!=""){
            if(elid==='Red'){
                document.getElementById("colorRed").style.border = '2px solid white'
            }
            else if(elid==='White'){
                document.getElementById("colorWhite").style.border = '2px solid grey'
            }
            else if(elid==='Grey'){
                document.getElementById("colorgrey").style.border = '2px solid white'
            }
            else if(elid==='Blue'){
                document.getElementById("colorblue").style.border = '2px solid white'
            }
            else if(elid==='Yellow'){
                document.getElementById("coloryellow").style.border = '2px solid white'
            }
            else{
                localStorage.setItem('color',"");
                e.target.style.border = '2px solid white';
                Applyfilter();
                return
            }
        }
e.target.style.border = '2px solid  #42a2a2'
        localStorage.setItem("color",'Black');
        Applyfilter();  
        })
   document.getElementById("colorWhite").addEventListener("click",(e)=>{
            // const url="https://bewakoof-clone-api.herokuapp.com/mens?color=white"
            let elid = localStorage.getItem('color')||""
        if(elid!=""){
            if(elid==='Red'){
                document.getElementById("colorRed").style.border = '2px solid white'
            }
            else if(elid==='Black'){
                document.getElementById("colorBlack").style.border = '2px solid white'
            }
            else if(elid==='Grey'){
                document.getElementById("colorgrey").style.border = '2px solid white'
            }
            else if(elid==='Blue'){
                document.getElementById("colorblue").style.border = '2px solid white'
            }
            else if(elid==='Yellow'){
                document.getElementById("coloryellow").style.border = '2px solid white'
            }
            else{
                localStorage.setItem('color',"");
                e.target.style.color = '2px solid grey';
                Applyfilter();
                return
            }
        }
e.target.style.border = '2px solid  #42a2a2'
            localStorage.setItem("color",'White');
        Applyfilter();   
   }) 
   document.getElementById("colorgrey").addEventListener("click",(e)=>{
    // const url="https://bewakoof-clone-api.herokuapp.com/mens?color=grey"
    let elid = localStorage.getItem('color')||""
    if(elid!=""){
        if(elid==='Red'){
            document.getElementById("colorRed").style.border = '2px solid white'
        }
        else if(elid==='Black'){
            document.getElementById("colorBlack").style.border = '2px solid white'
        }
        else if(elid==='White'){
            document.getElementById("colorWhite").style.border = '2px solid grey'
        }
        else if(elid==='Blue'){
            document.getElementById("colorblue").style.border = '2px solid white'
        }
        else if(elid==='Yellow'){
            document.getElementById("coloryellow").style.border = '2px solid white'
        }
        else{
            localStorage.setItem('color',"");
            e.target.style.border = '2px solid white';
            Applyfilter();
            return
        }
    }
e.target.style.border = '2px solid  #42a2a2'

    localStorage.setItem("color",'Grey');
    Applyfilter();    
})      
document.getElementById("coloryellow").addEventListener("click",(e)=>{
    // const url="https://bewakoof-clone-api.herokuapp.com/mens?color=grey"
    let elid = localStorage.getItem('color')||""
    if(elid!=""){
        if(elid==='Red'){
            document.getElementById("colorRed").style.border = '2px solid white'
        }
        else if(elid==='Black'){
            document.getElementById("colorBlack").style.border = '2px solid white'
        }
        else if(elid==='White'){
            document.getElementById("colorWhite").style.border = '2px solid grey'
        }
        else if(elid==='Grey'){
            document.getElementById("colorgrey").style.border = '2px solid white'
        }
        else if(elid==='Blue'){
            document.getElementById("colorblue").style.border = '2px solid white'
        }
        else{
            localStorage.setItem('color',"");
            e.target.style.border = '2px solid white';
            Applyfilter();
            return
        }
    }
e.target.style.border = '2px solid  #42a2a2'

    localStorage.setItem("color",'Yellow');
    Applyfilter();    
}) 
document.getElementById("colorblue").addEventListener("click",(e)=>{
    // const url="https://bewakoof-clone-api.herokuapp.com/mens?color=grey"
    let elid = localStorage.getItem('color')||""
    if(elid!=""){
        if(elid==='Red'){
            document.getElementById("colorRed").style.border = '2px solid white'
        }
        else if(elid==='Black'){
            document.getElementById("colorBlack").style.border = '2px solid white'
        }
        else if(elid==='White'){
            document.getElementById("colorWhite").style.border = '2px solid grey'
        }
        else if(elid==='Grey'){
            document.getElementById("colorgrey").style.border = '2px solid white'
        }
        else if(elid==='Yellow'){
            document.getElementById("coloryellow").style.border = '2px solid white'
        }
        else{
            localStorage.setItem('color',"");
            e.target.style.border = '2px solid white';
            Applyfilter();
            return
        }
    }
e.target.style.border = '2px solid  #42a2a2'

    localStorage.setItem("color",'Blue');
    Applyfilter();    
}) 
//// size filter
document.getElementById("sixe_x").addEventListener("click",(e)=>{
    // const url="https://bewakoof-clone-api.herokuapp.com/mens?size=X"
    let elid = localStorage.getItem('size')||""
    if(elid!=""){
        if(elid==='XL'){
            document.getElementById("sixe_xl").style.color = 'rgb(158 158 160)'
        }
        else if(elid==='XXL'){
            document.getElementById("sixe_xxl").style.color = 'rgb(158 158 160)'
        }
        else{
            localStorage.setItem('size',"");
            e.target.style.color = 'rgb(158 158 160)';
            Applyfilter();
            return
        }
    }
    e.target.style.color = '#42a2a2'
    localStorage.setItem("size",'X');
    Applyfilter();     
})   
document.getElementById("sixe_xl").addEventListener("click",(e)=>{
    // const url="https://bewakoof-clone-api.herokuapp.com/mens?size=XL"
    let elid = localStorage.getItem('size')||""
    if(elid!=""){
        if(elid==='X'){
            document.getElementById("sixe_x").style.color = 'rgb(158 158 160)'
        }
        else if(elid==='XXL'){
            document.getElementById("sixe_xxl").style.color = 'rgb(158 158 160)'
        }
        else{
            localStorage.setItem('size',"");
            e.target.style.color = 'rgb(158 158 160)';
            Applyfilter();
            return
        }
    }
    e.target.style.color = '#42a2a2'
    localStorage.setItem("size",'XL');
    Applyfilter();       
})     
document.getElementById("sixe_xxl").addEventListener("click",(e)=>{
    // const url="https://bewakoof-clone-api.herokuapp.com/mens?size=XXL"

    let elid = localStorage.getItem('size')||""
    if(elid!=""){
        if(elid==='X'){
            document.getElementById("sixe_x").style.color = 'rgb(158 158 160)'
        }
        else if(elid==='XL'){
            document.getElementById("sixe_xl").style.color = 'rgb(158 158 160)'
        }
        else{
            localStorage.setItem('size',"");
            e.target.style.color = 'rgb(158 158 160)';
            Applyfilter();
            return
        }
    }
    e.target.style.color = '#42a2a2'
    localStorage.setItem("size",'XXL');
    Applyfilter();   
})  
/////////////////////       srating filter
document.getElementById("highrating").addEventListener("click", (e)=>{
    let elid = localStorage.getItem('rating')||""
    if(elid!=""){
        if(elid==='midRating'){
            document.getElementById("midrating").style.color = 'rgb(158 158 160)'
        }
        else if(elid==='lowRating'){
            document.getElementById("lowrating").style.color = 'rgb(158 158 160)'
        }
        else{
            localStorage.setItem('rating',"");
            e.target.style.color = 'rgb(158 158 160)';
            Applyfilter();
            return
        }
    }
    e.target.style.color = '#42a2a2'
localStorage.setItem("rating",'highRating');
    Applyfilter();   
})  
/////////////////////
document.getElementById("midrating").addEventListener("click", (e)=>{

    let elid = localStorage.getItem('rating')||""
    if(elid!=""){
        if(elid==='highRating'){
            document.getElementById("highrating").style.color = 'rgb(158 158 160)'
        }
        else if(elid==='lowRating'){
            document.getElementById("lowrating").style.color = 'rgb(158 158 160)'
        }
        else{
            localStorage.setItem('rating',"");
            e.target.style.color = 'rgb(158 158 160)';
            Applyfilter();
            return
        }
    }
    e.target.style.color = '#42a2a2'
localStorage.setItem("rating",'midRating');
    Applyfilter();   
})  
document.getElementById("lowrating").addEventListener("click", (e)=>{
    let elid = localStorage.getItem('rating')||""
    if(elid!=""){
        if(elid==='highRating'){
            document.getElementById("highrating").style.color = 'rgb(158 158 160)'
        }
        else if(elid==='midRating'){
            document.getElementById("midrating").style.color = 'rgb(158 158 160)'
        }
        else{
            localStorage.setItem('rating',"");
            e.target.style.color = 'rgb(158 158 160)';
            Applyfilter();
            return
        }
    }
    e.target.style.color = '#42a2a2'

localStorage.setItem("rating",'lowRating');
    Applyfilter();   
})  
////sort
document.getElementById("sort_price").addEventListener("change",async()=>{
    console.log(event.target.value);
    let curr=event.target.value;
   
   let url="https://bewakoof-clone-api.herokuapp.com/mens"
   let data = await get(url);
   if(curr==="highToLow"){
    // url="https://bewakoof-clone-api.herokuapp.com/mens?_sort=price&_order=desc";
    data.sort((a,b)=>{
        return +(b.price)-(+(a.price))
    })
   }
   else if(curr==="lowToHigh"){
    // url="https://bewakoof-clone-api.herokuapp.com/mens?_sort=price&_order=asc";
    data.sort((a,b)=>{
        return +(a.price)-(+(b.price))
    })
   }
   else{
    // url="https://bewakoof-clone-api.herokuapp.com/mens";
    data.sort((a,b)=>{
        return 1;
    })
   }
  
   display(data);
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
            const urlfl=`https://bewakoof-clone-api.herokuapp.com/mens?q=${flag}`
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
    const search=document.getElementById("search_product").value;
    // console.log(search);""
    if(search==""){
        console.log(search);
        document.getElementById("suggestions").innerHTML="";
       }
  else{
    const url=`https://bewakoof-clone-api.herokuapp.com/mens?q=${search}&_limit=5`;
    const res=await fetch(url);
    const data= await res.json();
    boxShow(data);
   }
   
}
document.getElementById("search_product").addEventListener("input",()=>{
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

document.getElementById("clear").addEventListener("click",()=>{
    localStorage.setItem('category',"")
    localStorage.setItem('types',"")
     localStorage.setItem('color',"");
    localStorage.setItem('size',"");
     localStorage.setItem('rating',"");
     document.getElementById("shirt").style.color = 'rgb(158 158 160)'
     document.getElementById("hoodies").style.color = 'rgb(158 158 160)'
     document.getElementById("jacket").style.color = 'rgb(158 158 160)'
     document.getElementById("tshirt").style.color = 'rgb(158 158 160)'
     document.getElementById("campus").style.color = 'rgb(158 158 160)'
     document.getElementById("bewakoof").style.color = 'rgb(158 158 160)'
     document.getElementById("adro").style.color = 'rgb(158 158 160)'
     document.getElementById("madOver").style.color = 'rgb(158 158 160)'
     document.getElementById("colorBlack").style.border = '2px solid white'
     document.getElementById("colorWhite").style.border = '2px solid grey'
     document.getElementById("colorgrey").style.border = '2px solid white'
     document.getElementById("colorRed").style.border = '2px solid white'
     document.getElementById("colorblue").style.border = '2px solid white'
     document.getElementById("coloryellow").style.border = '2px solid white'
     document.getElementById("sixe_xl").style.color = 'rgb(158 158 160)'
     document.getElementById("sixe_xxl").style.color = 'rgb(158 158 160)'
     document.getElementById("sixe_x").style.color = 'rgb(158 158 160)'
     document.getElementById("highrating").style.color = 'rgb(158 158 160)'
     document.getElementById("midrating").style.color = 'rgb(158 158 160)'
     document.getElementById("lowrating").style.color = 'rgb(158 158 160)'
     Applyfilter();
})
function clearAllFilter(){
    localStorage.setItem('category',"")
    localStorage.setItem('types',"")
     localStorage.setItem('color',"");
    localStorage.setItem('size',"");
     localStorage.setItem('rating',"");
     document.getElementById("shirt").style.color = 'rgb(158 158 160)'
     document.getElementById("hoodies").style.color = 'rgb(158 158 160)'
     document.getElementById("jacket").style.color = 'rgb(158 158 160)'
     document.getElementById("tshirt").style.color = 'rgb(158 158 160)'
     document.getElementById("campus").style.color = 'rgb(158 158 160)'
     document.getElementById("bewakoof").style.color = 'rgb(158 158 160)'
     document.getElementById("adro").style.color = 'rgb(158 158 160)'
     document.getElementById("madOver").style.color = 'rgb(158 158 160)'
     document.getElementById("colorBlack").style.border = '2px solid white'
     document.getElementById("colorWhite").style.border = '2px solid grey'
     document.getElementById("colorgrey").style.border = '2px solid white'
     document.getElementById("colorRed").style.border = '2px solid white'
     document.getElementById("colorblue").style.border = '2px solid white'
     document.getElementById("coloryellow").style.border = '2px solid white'
     document.getElementById("sixe_xl").style.color = 'rgb(158 158 160)'
     document.getElementById("sixe_xxl").style.color = 'rgb(158 158 160)'
     document.getElementById("sixe_x").style.color = 'rgb(158 158 160)'
     document.getElementById("highrating").style.color = 'rgb(158 158 160)'
     document.getElementById("midrating").style.color = 'rgb(158 158 160)'
     document.getElementById("lowrating").style.color = 'rgb(158 158 160)'
     Applyfilter();
}
