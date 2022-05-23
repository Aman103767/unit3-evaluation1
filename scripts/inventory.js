var dataArr = JSON.parse(localStorage.getItem("products"));

displaydata(dataArr);

function displaydata(dataArr){
    document.querySelector("#all_products").innerHTML = "";
    dataArr.forEach(function(elem,index){
        var card = document.createElement("div");
        var img = document.createElement("img");
       img.setAttribute("src",elem.image);
       var desc = document.createElement("p");
       desc.innerText = elem.desc;
       let type = document.createElement("h4");
       type.innerText = elem.type;
       let price = document.createElement("h3");
       price.innerText = "₹" +elem.price;
        let del =document.createElement("button");
        del.innerText= "Remove"
          del.setAttribute("id","remove_product")
          del.addEventListener("click",function(){
             dele(index);
          })
        card.append(img,desc,type,price,del)
        document.querySelector("#all_products").append(card)

    })

    function dele(index){
        dataArr.splice(index,1);
        localStorage.setItem("products",JSON.stringify(dataArr));
        displaydata(dataArr);
    }
}