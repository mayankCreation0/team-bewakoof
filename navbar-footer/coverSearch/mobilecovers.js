document.getElementById("selectB").addEventListener("change", ()=>{
    let searchModel =document.getElementById("selectB").value;
    if(searchModel==="Apple"){
        let model=document.getElementById("selectM");
        model.innerHTML=`<option value="Model">Select Model</option>
        <option value="Iphone SE">Iphone SE</option>
        <option value="Iphone X">Iphone X</option>
        <option value="Iphone XS">Iphone XS</option>
        <option value="Iphone 11">Iphone 11</option>
        <option value="Iphone 11 Pro">Iphone 11 Pro</option>
        <option value="Iphone 12">Iphone 12</option>
        <option value="Iphone 12 Pro">Iphone 12 Pro</option>
        <option value="Iphone 13 Pro">Iphone 13 Pro</option>
        <option value="Iphone 14 Pro">Iphone 14 Pro</option>
        <option value="Iphone 14 Pro max">Iphone 14 Pro Max</option>`
    }
   else if(searchModel==="Samsung"){
        let model=document.getElementById("selectM");
        model.innerHTML=`<option value="Model">Select Model</option>
        <option value="Samsung Galaxy A07">Samsung Galaxy A07</option>
        <option value="Samsung Galaxy A70">Samsung Galaxy A70</option>
        <option value="Samsung Galaxy A51">Samsung Galaxy A51</option>
        <option value="Iphone 11">Samsung Galaxy A50</option>
        <option value="Iphone 11 Pro">Samsung Galaxy Note 20</option>
        <option value="Iphone 12">Samsung Galaxy F12</option>
        <option value="Iphone 12 Pro">Samsung Galaxy M11</option>
        <option value="Iphone 13 Pro">Samsung Galaxy A21</option>
        <option value="Iphone 14 Pro">Samsung Galaxy M31s</option>
        <option value="Iphone 14 Pro max">Samsung Galaxy M31</option>`
    }
    else if(searchModel==="Vivo"){
        let model=document.getElementById("selectM");
        model.innerHTML=`<option value="Model">Select Model</option>
        <option value="Samsung Galaxy A07">Vivo V5s</option>
        <option value="Samsung Galaxy A70">Vivo V5</option>
        <option value="Samsung Galaxy A51">Vivo V17</option>
        <option value="Iphone 11">Vivo V5s</option>
        <option value="Iphone 11 Pro">Vivo V5s</option>
        <option value="Iphone 12">Vivo V5s</option>
        <option value="Iphone 12 Pro">Vivo V5s</option>
        <option value="Iphone 13 Pro">Vivo V5s</option>
        <option value="Iphone 14 Pro">Vivo V5s</option>
        <option value="Iphone 14 Pro max">Vivo V5s</option>`
    }
})
document.getElementById("search").addEventListener("click",()=>{
    let searchModel =document.getElementById("selectB").value;
localStorage.setItem("search_cover",searchModel);
location.href="../phoneCoverPage./cover.html";
})
