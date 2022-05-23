//store the products array in localstorage as "products"
document.querySelector("form").addEventListener("submit",myfunction)
var arrdata = JSON.parse(localStorage.getItem("products"))||[];
function myfunction(){
  event.preventDefault();
  var type = products.type.value;
  var desc =products.desc.value;
  var price = products.price.value;
  var image = products.image.value;
  
  var p = new Product(type,desc,price,image)
  arrdata.push(p);
  localStorage.setItem("products",JSON.stringify(arrdata));
  event.target.reset();
  
}
function Product(type,desc,price,image){
    this.type = type;
    this.desc = desc;
    this.price = price;
    this.image = image;
}
console.log(arrdata);
