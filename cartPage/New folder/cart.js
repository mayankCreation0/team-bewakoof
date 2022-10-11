let total = document.getElementById("t5")
let promo = document.getElementById("t3")


let subtotal = document.getElementById("t4")


let cart = JSON.parse(localStorage.getItem("cart")) || [];
let container = document.getElementById("container");
var output = 0;
var count = 0;

let coupon = document.getElementById("coupon")
let submit = document.getElementById("submit")


console.log(cart)

cart.forEach(function (product, index) {
  count++


  let div = document.createElement("div");
  let box1 = document.createElement("div");
  let box2 = document.createElement("div");
  let box3 = document.createElement("div");

  let image = document.createElement("img");
  image.src = product.image;
  let product_name = document.createElement("p");
  product_name.textContent = product.name;


  let select = document.createElement("select")
  select.setAttribute("class", "select")
  select.addEventListener("change", show)
  let o1 = document.createElement("option")


  o1.textContent = "M"

  let o2 = document.createElement("option")
  o2.textContent = "L"

  let o3 = document.createElement("option")
  o3.textContent = "S"

  let remove = document.createElement("button")

  remove.innerText = "Remove"
  remove.addEventListener("click", function () {
    makeremove(index)
  })


  let product_size = document.createElement("p");
  product_size.setAttribute("class", "size")
  product_size.textContent =  product.size;


  let product_price = document.createElement("p");

  product_price.textContent = "₹"+ " " + product.price;
  output = output + Number(product.price)





  
  box2.append(product_name, product_price, product_size, select)
  box1.append(image )
  box3.append(remove);
  select.append(o1, o2, o3)
  div.append(box2, box1, box3);

  container.append(div);
});
total.textContent = output














if (localStorage.getItem("total") === null) {
  localStorage.setItem("total", JSON.stringify([]))
}
if (localStorage.getItem("MRP") === null) {
  localStorage.setItem("MRP", JSON.stringify([]))

}

var arr2 = JSON.parse(localStorage.getItem("MRP"))
console.log('arr2: ', arr2);
arr2.push(output)
localStorage.setItem("MRP", JSON.stringify(arr2))



if (localStorage.getItem("discount") === null) {
  localStorage.setItem("discount", JSON.stringify([]))
}


var counter = 0;

function discount() {

  var arr = JSON.parse(localStorage.getItem("total"))


  if (coupon.value == "NEW100" && counter < 1) {
    counter++
    subtotal.textContent = output - 100
    t3.textContent = 100
    var arr = JSON.parse(localStorage.getItem("total"))
    arr.push(output - 100)
    var arr1 = JSON.parse(localStorage.getItem("discount"))
    arr1.push(100)
    localStorage.setItem("discount", JSON.stringify(arr1))


  } else {
    arr.push(output)

  }

  localStorage.setItem("total", JSON.stringify(arr))



}
function show(e) {
  console.log(e.target.parentNode)
  let size = e.target.parentNode.querySelector(".size")

  let select = e.target.parentNode.querySelector(".select").value;
  console.log(select)
  size.textContent = "Size : " + select;
}


function makeremove(i) {
  console.log(i)
  let cart_arr = JSON.parse(localStorage.getItem("cart"))
  cart_arr.splice(i, 1)
  console.log(cart_arr)
  localStorage.setItem("cart", JSON.stringify(cart_arr))
  location.reload()

}

