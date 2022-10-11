function display(){
    const h3=document.createElement("h3");
    h3.innerText="Bewakoof";
    const h4=document.createElement("h4");
    h4.innerText="Men's Blue Naruto Uzumaki Dattebayo Graphic Printed Oversized T-shirt"
    const priceDiv=document.createElement("div");
    const price=document.createElement("div");
    price.innerText=`₹449`
    const strikeoff=document.createElement("div");
    strikeoff.innerText=`₹1299`
    const discount=document.createElement("div");
    discount.innerText=`65%`
    const p=document.createElement("p");
    p.innerText="inclusive of all taxes";
  priceDiv.append(price,strikeoff,discount,p);
//   const tribeDiv=document.createElement("div");
//   tribeDiv.innerText="TriBe members get an extra discount of ₹30 and FREE shipping.Learn more"
  const cartdiv=document.createElement("div");
  const label=document.createElement("label");
  label.innerText="Size";
 const sizeDiv=document.createElement("div");
 const div1=document.createElement("div");
 div1.innerText="X";
 const div2=document.createElement("div");
 div2.innerText="XL";
 const div3=document.createElement("div");
 div3.innerText="2XL";
 sizeDiv.append(div1,div2,div3);
 const buttonDiv=document.createElement("div");
 const button1=document.createElement("div");
  button1.innerHTML=`<button><i class="fa-solid fa-bag-shopping"> Add to bag</i><button>`
 const button2=document.createElement("div");
 button2.innerHTML=`<i class="fa-regular fa-heart">WISHIST</i>`
 buttonDiv.append(button1,button2);
 cartdiv.append(label,sizeDiv,buttonDiv);
 const detailsDiv=document.createElement("div");
 const h5=document.createElement("h5");
 h5.innerText='PRODUCT DESCRIPTION';
 const pDetails=document.createElement("p");
 pDetails.innerText="Prove your worth as the hero of the Hidden Leaf with this Naruto Uzumaki Men's Dattebayo T-Shirt. Style this blue t-shirt with pyjamas and sliders for a laid-back look."
 detailsDiv.append(h5,pDetails);
document.getElementById("detailsContainer").append(h3,h4,priceDiv,cartdiv,detailsDiv);
}
display();