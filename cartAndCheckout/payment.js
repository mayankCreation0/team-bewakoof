document.querySelector("form").addEventListener("submit", payFun);
function payFun() {
     event.preventDefault();
     let name = document.querySelector("#name").value;
     let cardNum = document.querySelector("#cardNum").value;
     let ccv = document.querySelector("#ccv").value;
     let expiry = document.querySelector("#expiry").value;
     // console.log(name,cardNum,ccv,expiry);
     let cardCheck = (cardNum.length === 16);
     let ccvCheck = (ccv.length === 3);



     if (name && cardCheck && ccvCheck && expiry) {
          alert("OTP send to your mobile")
          window.location.href = "otp.html";

     }
     else {
          alert("Enter correct information");
     }


     document.querySelector("#name").value = "";
     document.querySelector("#cardNum").value = "";
     document.querySelector("#ccv").value = "";
     document.querySelector("#expiry").value = "2022-02";
}











// implementation of Payment Details Section
let payData = JSON.parse(localStorage.getItem("cart")) || [];

let frstB = document.createElement("div");

let frstD1 = document.createElement("div");

// let frstB1=document.createElement("div");
// let order=document.createElement("p");
// order.innerText= "Delivering order to"
// order.style.color="gray";
// let userN=document.createElement("h5")
// userN.innerText="Mohim Thakre"
// userN.style.paddingLeft="10px";
// userN.style.marginTop="15px";
// frstB1.style.display="flex";
// frstB1.append(order,userN)




// // Delivery Adress details 
// let add="Lokmanya squre CRPF gate Nagpur"
// let hrD=document.createElement("hr");
// hrD.style.width="100%";
// frstD1.append(frstB1,add,hrD);
let Obj = JSON.parse(localStorage.getItem("address")) || {};

console.log(Obj)


function displayTable(el) {
     let div = document.createElement("div")
     div.style.marginLeft = "30px"
     div.setAttribute("id", "addresscss")

     let h2 = document.createElement("h")
     h2.innerText = ""
     h2.style.color = "teal"
     h2.style.marginBottom = "80px"
     h2.style.paddingBottom = "10px"

     let p = document.createElement("p");
     p.innerText = "Delivering order to " + el.name;
     p.style.marginLeft = "-30px";
     p.style.marginBottom = "-15px"

     let h4 = document.createElement("p");
     h4.innerText = ""
     console.log(h4);

     let div1 = document.createElement("div");
     div1.style.display = "flex"
     //div1.style.marginRight="3px"
     //div1.style.marginLeft="5px"

     let flat = document.createElement("p");
     flat.innerText = el.flat;
     flat.style.color = "black"

     let city = document.createElement("p");
     city.innerText = ", " + el.city;
     city.style.color = "black"
     city.setAttribute("id", "cityspace")

     let state = document.createElement("p");
     state.innerText = ", " + el.state;
     state.style.color = "black"

     let PIN = document.createElement("p");
     PIN.innerText = el.pincode;
     PIN.style.color = "black"


     div.append(h2, p, h4);
     div1.append(flat, city, state, PIN)

     document.querySelector("#paymentContainer").append(div, div1);
}

displayTable(Obj);


// frstD1.style.borderBottom="1px solid gray";
let payH = document.createElement("h3");
payH.innerText = "You are paying for these items"
payH.style.marginLeft = "-75px";
frstB.append(frstD1, payH)
document.querySelector("#paymentContainer").append(frstB);



//here we are wrintng the code for map function
let length = payData.length;
let total = payData.reduce(function (sum, el, i, arr) {
     return (sum + Number(el.price));
}, 0);
// let total1=total;
// console.log("Total"+total);


let totalS = payData.reduce(function (sum, el, i, arr) {
     return (sum + Number(el.strikeOffPrice));
}, 0);



payData.map(function (el) {
     //  console.log(el);
     let box = document.createElement("div");

     let box1 = document.createElement("div");
     box1.setAttribute("id", "cartData")

     let img = document.createElement("img");
     img.src = el.image;
     img.style.height = "50px";
     img.style.width = "40px";





     let box2 = document.createElement("div");
     let name = document.createElement("p");
     name.innerText = el.name;
     name.setAttribute("id", "itemName");

     name.style.color = "gray";








     let deliveryDate = document.createElement("div");
     let date = document.createElement("p");
     date.innerText = "Estimated delivery by ";
     let dateE = document.createElement("p");
     dateE.innerText = "14 April 2022";
     dateE.style.fontSize = "15px";
     dateE.style.marginTop = "-15px";
     deliveryDate.append(date, dateE);
     deliveryDate.style.display = "flex";
     dateE.style.color = "green";
     date.style.color = "gray";
     date.style.fontSize = "15px";
     date.style.marginTop = "-15px";
     box2.style.marginLeft = "20px";
     box2.style.marginTop = "-15px";
     name.setAttribute("class", "name");

     let hrD1 = document.createElement("hr");
     hrD1.style.width = "100%";
     box2.append(name, deliveryDate, hrD1);

     box1.append(img, box2);

     box1.style.display = "flex";



     box.append(box1)

     document.querySelector("#paymentContainer").append(box);

});

let priceSummary = document.createElement("h3");
priceSummary.innerText = "Price Summary";

document.querySelector("#paymentContainer").append(priceSummary);

let totalPrice = document.createElement("div");
let p1 = document.createElement("p")
p1.innerText = "Total MRP (Incl. of taxes) ";
let totalP = document.createElement("p");
totalP.innerText = "₹" + totalS;
totalPrice.style.display = "flex";
totalPrice.style.justifyContent = "space-between";
totalPrice.append(p1, totalP);


let dF = document.createElement("div");
let p2 = document.createElement("p");
p2.innerText = "Delivery Fee ";
let p3 = document.createElement("p");
if (length == 0) {
     p3.innerText = "Add item";
     p3.style.color = "red";
}
else if (total >= 500) {
     p3.innerText = "FREE";
     p3.style.color = "green";
}
else {
     p3.innerText = ("₹ 50");
}
dF.style.display = "flex";
dF.style.justifyContent = "space-between";
dF.style.padding = "0px 10px";
dF.append(p2, p3);


let discountP = document.createElement("div");
let dP1 = document.createElement("p");
dP1.innerText = "Bag Discount ";
let dP2 = document.createElement("p");
dP2.innerText = "- ₹" + (totalS - total);
console.log(dP2);
discountP.append(dP1, dP2);
discountP.style.display = "flex";
discountP.style.justifyContent = "space-between";
discountP.style.padding = "0px 10px";

let hrD2 = document.createElement("hr");
hrD2.style.width = "100%";



let subT = document.createElement("div");
let sT1 = document.createElement("h5");
sT1.innerText = "Final amount ";
let sT2 = document.createElement("p");
sT2.innerText = "₹ " + total;

subT.append(sT1, sT2);

subT.style.display = "flex";
subT.style.justifyContent = "space-between";
subT.style.marginTop = "-15px"

document.querySelector("#paymentContainer").append(totalPrice, dF, discountP, hrD2, subT);








/*
     let ArrayOfObj = JSON.parse(localStorage.getItem("address")) || [];



     displayTable (ArrayOfObj);

     function    displayTable (ArrayOfObj){
        console.log(ArrayOfObj)
        for(let i=ArrayOfObj.length-1;i>=0;i--){
            let div=document.createElement("div")
            div.style.marginLeft="30px"

            let h2=document.createElement("h2")
            h2.innerText="ADDRESS"
            h2.style.color="teal"
            h2.style.marginLeft=" 150px"
            h2.style.marginBottom="40px"

            let p=document.createElement("p");
            p.innerText="Delivering order to";

            let h4=document.createElement("h4");
            h4.innerText=el.name

            let div1=document.createElement("div");
            div1.style.display="flex"
            div1.style.marginRight="3px"
            div1.style.marginLeft="30px"

            let flat=document.createElement("p");
            flat.innerText=ArrayOfObj[i].flat;
            flat.style.color="black"

            let city=document.createElement("p");
            city.innerText=ArrayOfObj[i].city;
            city.style.color="black"

            let state=document.createElement("p");
            state.innerText=ArrayOfObj[i].state;
            state.style.color="black"

            let PIN=document.createElement("p");
            PIN.innerText=ArrayOfObj[i].pincode;
            PIN.style.color="black"


            div.append(h2,p,h4);
            div1.append(flat,city,state,PIN)

            document.querySelector("#adrs").append(div,div1);

        }
*/



// city
// :
// "tirora"
// flat
// :
// "at shivaji ward"
// name
// :
// "mohim thakre"
// pincode
// :
// "441911"
// state
// :
// "maharastra"