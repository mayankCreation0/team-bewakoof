const cartData = JSON.parse(localStorage.getItem("cart_products")) || [];

const emailData = (localStorage.getItem("useremail")) || "";

document.getElementById("showemail").innerText = emailData;

var wishListData = JSON.parse(localStorage.getItem("wishList")) || [];

var total = cartData.reduce(function (sum, el,) {
     return (sum + Number(el.price));
}, 0);
var total1 = total;
//  console.log("Total price "+total);



//implementation of Strike price 
var totalS = cartData.reduce(function (sum, el) {
     return (sum + Number(el.strikeOffPrice));
}, 0);
// console.log(totalS);


// document.querySelector("#discount").addEventListener("click",promoFun);
// function promoFun()
// {
//      var promo = document.querySelector("#promo").value;
//      total= (total*7)/10;
//      total.toFixed(2);//to fixed decimal up to 2 places in total price
//      // console.log("inside Promo",promo);
//      var count=0;
//      if(promo=="masai30" && count==0)
//      {
//           count++;
//           console.log(count);
//           document.querySelector("h1").innerText=`My Bag ${length} Item(s)`;
//           total1.toFixed(2);
//           document.querySelector("h2").innerText=`Total price is RS: ${total1}`;


//      }
// }
let tribeDiscount;
function checkdiscount(){
     let localDiscount=localStorage.getItem("discount");
     console.log(localDiscount);
     if(localDiscount=="first"){
          tribeDiscount=(cartData.length)*30;
          localStorage.setItem("discount","none");
          console.log(tribeDiscount);
     }
     else if(localDiscount=="second"){
          tribeDiscount=(cartData.length)*60;
          localStorage.setItem("discount","none");
          console.log(tribeDiscount);
     }
     else{
          tribeDiscount=0;
          console.log(tribeDiscount);
     }
}
//Here we implement the tribee function
function popuptribe() {
     document.getElementById("tribepopup").style.display = "block";
     console.log("hello");

}
document.querySelector("#dBtn").addEventListener("click", triBeFun);
function triBeFun() {

     alert("Please Buy the TriBe Membership");
}


document.getElementById("dis1").addEventListener("click", () => {
     localStorage.setItem("discount", "first");
     document.getElementById("tribepopup").style.display = "none";
     checkdiscount()
})
document.getElementById("dis2").addEventListener("click", () => {
     localStorage.setItem("discount", "second");
     document.getElementById("tribepopup").style.display = "none";
     checkdiscount()
})
document.getElementById("bag").addEventListener("click", () => {
     localStorage.setItem("discount", "none");
     document.getElementById("tribepopup").style.display = "none";
     checkdiscount()
})
var length = cartData.length;
// console.log("Total length "+length);
// `My Bag ${length} Item(s)`;
var h1D = document.createElement("div");
var hD1 = document.createElement("h1");
hD1.innerText = "My Bag"
var hD2 = document.createElement("h1");
hD2.setAttribute("id", "hD2")
hD2.innerText = `${length} Item(s)`
h1D.style.display = "flex";
h1D.style.marginLeft = "-40px";
h1D.append(hD1, hD2);
// document.querySelector("h1").innerText=`My Bag ${length} Item(s)`;
document.querySelector("h1").append(h1D)


//const cartData = JSON.parse(localStorage.getItem("cart_products")) || [];
function displayCart(arr) {
     document.querySelector("#showcart").innerHTML="";
     arr.map(function (el, i) {
          // console.log(el,i);
          var box = document.createElement("div");

          var box1 = document.createElement("div");
          var image1 = document.createElement("img");
          image1.setAttribute("class", "crtImg")
          image1.src = el.image;
          box1.append(image1);

          var box2 = document.createElement("div")
          var name1 = document.createElement("p");
          name1.innerText = el.name;
          name1.style.fontWeight = 200;
          name1.style.fontSize = 14;
          name1.setAttribute("id", "prodName")
          name1.style.color = "#73675c";

          var box3 = document.createElement("div");
          var price1 = document.createElement("p");
          price1.innerText = "₹" + el.price;
          var strikeOffPrice1 = document.createElement("p");
          strikeOffPrice1.innerText = "₹" + el.strikeOffPrice;

          strikeOffPrice1.setAttribute("class", "strikPrice");

          box3.append(price1, strikeOffPrice1);
          box3.setAttribute("class", "price")

          var dis = document.createElement("h4");
          var x = Number(el.strikeOffPrice) - Number(el.price);
          // console.log(x);
          dis.innerText = `You saved ₹${x}!`
          dis.style.color = "green";
          dis.style.fontWeight = 400;


          //create size and quantity button 🔽
          var SQ = document.createElement("div");
          if (el.size != undefined) {
               var btnS = document.createElement("button");
               btnS.innerText = `Size: ${el.size}`;
               btnS.setAttribute("id", "btnS");
               var btnQ = document.createElement("button");
               btnQ.innerText = `Qty: ${el.Qty}`;
               // SQ.append(btnQ);

               btnQ.setAttribute("id", "btnQ");
               SQ.append(btnS, btnQ);
          }






          // Remove and move to wishlist button 

          var mainBtn = document.createElement("div");
          var btnR = document.createElement("button");
          btnR.innerText = "Remove";
          // var btnW = document.createElement("button");
          // btnW.innerText = "Move to Wishlist";
          mainBtn.append(btnR);
          btnR.setAttribute("id", "btnR");
          // btnW.setAttribute("id", "btnW")
          mainBtn.setAttribute("id", "mainBtn")

          box2.append(name1, box3, dis, SQ, mainBtn)

          box2.setAttribute("id", "box2")
          box.append(box2, box1);
          box.setAttribute("id", "mainBox1")
          box.setAttribute("class", "itmData1")
          document.querySelector("#showcart").append(box);


          // if we implement such kind of this then it will adding data multipl
          // // Here we basically implement the price details div 
          // var priceD=document.createElement("div");

          // var totalPrice=document.createElement("div");
          // var p1=document.createElement("p")
          // p1.innerText="Total MRP (Incl. of taxes) ";
          // var totalP=document.createElement("p");
          // totalP.innerText=total;
          // totalPrice.append(p1,totalP);

          // priceD.append(totalPrice);
          // document.querySelector("#priceDetails").append(priceD);





          btnR.addEventListener("click", function (el, i) {
               removeItem(el, i)
          });

          //Here we are implementing add to wishList Section

          // btnW.addEventListener("click", function () {
          //      addWishList(el, i);
          // });

     });
}
displayCart(cartData);
console.log(cartData);
// Here we basically implement the price details div 
var priceD = document.createElement("div");

var totalPrice = document.createElement("div");
var p1 = document.createElement("p")
p1.innerText = "Total MRP (Incl. of taxes) ";
var totalP = document.createElement("p");
totalP.innerText = "₹ " + totalS;
totalPrice.append(p1, totalP);



var dF = document.createElement("div");
var p2 = document.createElement("p");
p2.innerText = "Delivery Fee ";
var p3 = document.createElement("p");
if (length == 0) {
     p3.innerText = "Add item";
}
else if (total >= 500) {
     p3.innerText = "FREE";
}
else {
     p3.innerText = ("₹ 50");
}
dF.style.display = "flex";
dF.style.justifyContent = "space-between";
dF.style.padding = "0px 10px";
dF.append(p2, p3);


var discountP = document.createElement("div");
var dP1 = document.createElement("p");
dP1.innerText = "Bag Discount ";
var dP2 = document.createElement("p");
dP2.innerText = "- ₹" + (totalS - total );

//  console.log(dP2);
discountP.append(dP1, dP2);
discountP.style.display = "flex";
discountP.style.justifyContent = "space-between";
discountP.style.padding = "0px 10px";


// console.log("Total is ₹ "+total);
var subT = document.createElement("div");
var sT1 = document.createElement("p");
sT1.innerText = "Subtotal ";
var sT2 = document.createElement("p");
sT2.innerText = "₹ " + total;

subT.append(sT1, sT2);

subT.style.display = "flex";
subT.style.justifyContent = "space-between";
subT.style.padding = "0px 10px";


//implementation of last discount div
var totalDiscount = document.createElement("div");
var tDP = document.createElement("p");
tDP.innerText = `You are saving ₹ ${totalS - total} on this order`;
totalDiscount.append(tDP);
totalDiscount.style.padding = "0px 10px";
totalDiscount.style.width = "90%";
totalDiscount.style.margin = "auto";
totalDiscount.style.borderRadius = "10px";
totalDiscount.style.backgroundColor = "#e8f3e5";
totalDiscount.style.color = "#72952d";
tDP.style.padding = "5px";





priceD.append(totalPrice);
document.querySelector("#priceDetails").append(priceD, dF, discountP, subT, totalDiscount);
totalPrice.style.display = "flex";
totalPrice.style.justifyContent = "space-between";
totalPrice.style.padding = "0px 10px";




var lBox = document.createElement("div");
var lBox1 = document.createElement("div");
var Total1 = document.createElement("p");
Total1.innerText = `Total ₹ ${total}`;
var cBtn = document.createElement("button");
cBtn.innerText = "ADD ADDRESS";
cBtn.style.marginTop = "15px";
cBtn.style.padding = "0px 70px";
lBox1.style.display = "flex";
lBox1.style.justifyContent = "space-between";
lBox.style.padding = "0px 10px";
cBtn.style.backgroundColor = "teal";
cBtn.style.border = "none";
cBtn.style.borderRadius = "5px";
cBtn.addEventListener("click", payFun);
function payFun() {
     window.open("address.html");
}



lBox1.append(Total1, cBtn);
lBox.append(lBox1);
document.querySelector("#payBtn").append(lBox);




//  Implementattion of  wishListData Selection      

// var mainWishList = document.createElement("h4");
// mainWishList.innerText = "My Wishlist"
// mainWishList.style.marginBottom = "10px";
// mainWishList.style.marginLeft = "-37px";
// document.querySelector("#itemData").append(mainWishList);

// //boxW is the parent div of wishList Data Section
// var boxW = document.createElement("div");
// wishListData.map(function (el, i, arr) {
//      // console.log(el);


//      var box1 = document.createElement("div");

//      var imgW = document.createElement("img");
//      imgW.src = el.image;
//      imgW.setAttribute("id", "imgWishList");

//      var nameW = document.createElement("h4");
//      nameW.innerText = el.name;
//      nameW.setAttribute("class", "nameW");

//      var pW = document.createElement("div");
//      pW.setAttribute("class", "priceW");
//      pW.style.display = "flex";
//      var p1 = document.createElement("p");
//      p1.innerText = "₹" + el.price;
//      var p2 = document.createElement("p");
//      p2.innerText = "₹" + el.strikeOffPrice;
//      p2.setAttribute("class", "strikeP");
//      pW.append(p1, p2);
//      p2.style.textDecoration = "line-through";
//      p2.style.marginLeft = "5px";

//      var triB = document.createElement("p");
//      triB.innerText = `₹${(el.price - 40)} For TriBe members`;
//      triB.setAttribute("class", "triBPrice");

//      var btnW = document.createElement("button");
//      btnW.innerText = "MOVE TO BAG";
//      btnW.setAttribute("class", "btnMoveToCart");
//      btnW.setAttribute("id", "moveToBag");


//      box1.append(imgW, nameW, pW, triB, btnW);
//      boxW.append(box1);
//      boxW.setAttribute("id", "myWishList");
//      document.querySelector("#itemData").append(boxW);

//      btnW.addEventListener("click", function () {
//           addToCart(el, i);
//      });

// });

// function addToCart(el, i) {
//      // console.log(el);
//      cartData.push(el);
//      localStorage.setItem("cart_products", JSON.stringify(cartData));
//      alert("item added to cart");

//      //Here we basically remove item from wishlist
//      // console.log(el,i);
//      var x = wishListData.splice(i, 1);
//      //     console.log(x);
//      localStorage.setItem("wishList", JSON.stringify(wishListData));
//      window.location.reload(); //iss sa remove karna k baad page refresh ho jaata hai aur content update ho jaata hai

// }













//implementation of Like Section
var likeData = [
     {
          mainImg:
               "https://images.bewakoof.com/t540/marvel-s-moon-knight-half-sleeve-t-shirt-483825-1648618830-2.jpg",
          name: "Men's Black Marvel Moon Knight Graphic Printed T-shirt",
          price: "1170",
          strikeOffPrice: "2599",
     },
     {
          mainImg:
               "https://images.bewakoof.com/t540/true-love-iphone-13-mobile-cover-470662-1643961727-1.jpg ",
          name: "True Love iPhone 13 Graphic Printed Mobile Cover",
          price: 699,
          strikeOffPrice: 999,
     },
     {
          mainImg:
               "https://images.bewakoof.com/t540/friends-logo-boyfriend-t-shirt-frl-234669-1637843380-1.jpg",
          name: "Women's Black Friends Typography Boyfriend T-shirt ",
          price: 1620,
          strikeOffPrice: 3599,
     },
];


var youMayLike = document.createElement("h4");

youMayLike.innerText = "You may also like"
youMayLike.style.marginBottom = "10px";
youMayLike.style.marginLeft = "-37px";
document.querySelector("#itemData").append(youMayLike);

var boxL = document.createElement("div");
likeData.map(function (el, i, arr) {
     // console.log("This is Liked Datae"+el);
     var boxL1 = document.createElement("div");

     var imgL = document.createElement("img");
     imgL.src = el.mainImg
     imgL.setAttribute("id", "imgYouMayLike");

     var nameL = document.createElement("h4");
     nameL.innerText = el.name;
     nameL.setAttribute("class", "nameW")

     var priceLike = document.createElement("div");
     priceLike.setAttribute("class", "priceW");
     var priceL1 = document.createElement("p");
     priceL1.innerText = "₹" + el.price;
     var priceL2 = document.createElement("p");
     priceL2.innerText = el.strikeOffPrice;
     priceL2.setAttribute("class", "strikeP");
     priceLike.append(priceL1, priceL2);
     priceLike.style.display = "flex";
     priceL2.style.textDecoration = "line-through";
     priceL2.style.marginLeft = "10px";

     // var btnL = document.createElement("button");
     // btnL.innerText = "ADD TO BAG";
     // btnL.setAttribute("class", "btnMoveToCart");




     boxL1.append(imgL, nameL, priceLike);
     boxL.setAttribute("id", "youMayLike");
     boxL.append(boxL1);
     document.querySelector("#itemData").append(boxL);

     // btnL.addEventListener("click", function () {
     //      // youMayLike(el,i);
     //      futureBuying(el, i);

     // });


});
function futureBuying(el, i) {
     // logic for add item in cart
     cartData.push(el);
     localStorage.setItem("cart_products", JSON.stringify(cartData));
     alert("item added to cart");


     //Here we basically remove item from wishlist

     var x = wishListData.splice(i, 1);
     window.location.reload(); //iss sa remove karna k baad page refresh ho jaata hai aur content update ho jaata hai

}





function removeItem(el, i) {
     //     console.log(el,i);
     var x = cartData.splice(i, 1);
     //     console.log(x);
     localStorage.setItem("cart_products", JSON.stringify(cartData));
     window.location.reload(); //iss sa remove karna k baad page refresh ho jaata hai aur content update ho jaata hai
}

//implementation of move to wishList functionality
// function addWishList(el, i) {
//      //logic for moving the data in wishList Section
//      //console.log(el);
//      wishListData.push(el);
//      localStorage.setItem("wishList", JSON.stringify(wishListData))
//      alert("Item Moved in WishList");
//      //removing the data from cart section

//      //     console.log(el,i);
//      var x = cartData.splice(i, 1);
//      //     console.log(x);
//      localStorage.setItem("cart_products", JSON.stringify(cartData));
//      window.location.reload(); //iss sa remove karna k baad page refresh ho jaata hai aur content update ho jaata hai



// }



//Implementation of footer section
var imgFooter = document.createElement("img");
imgFooter.src = "https://images.bewakoof.com/web/secure-payments-image.png"
document.querySelector("#itemData").append(imgFooter);
imgFooter.setAttribute("id", "imgFooter");


