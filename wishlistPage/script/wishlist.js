let wishArr=JSON.parse(localStorage.getItem("wishes"))||[];
if(wishArr.length==0){
    const card=document.createElement("div");
     const imgDiv=document.createElement("div");
     const img = document.createElement("img");
     img.src="https://images.bewakoof.com/web/group-3x-1509961969.png";
     imgDiv.append(img);
     
}