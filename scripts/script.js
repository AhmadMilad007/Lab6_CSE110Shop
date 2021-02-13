// Script.js
async function dataFetch(){
  let items = JSON.parse(localStorage.getItem('productList'));
  if (items.length == 0) {
    const response = await fetch('https://fakestoreapi.com/products');
    items =  await response.json();
  }
  return items;
}
window.addEventListener('DOMContentLoaded', () => {
 let itemList = document.querySelector('#product-list');
    dataFetch().then((products) => {
         localStorage.setItem('productList', JSON.stringify(products));
        for (let i = 0 ; i < products.length; i++){
          if (products[i]!=null){
          var prductObj = new ProductItem(products[i].id, products[i].image, products[i].title, products[i].price);
          itemList.appendChild(prductObj);
        }
      }
  });
});
