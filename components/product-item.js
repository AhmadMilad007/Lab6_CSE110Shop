class ProductItem extends HTMLElement {
  constructor(id, image, title, price) {
    super();
    this.attachShadow({ mode: 'open' });
    const style = document.createElement('style');
    style.textContent = `
    .price {
      color: green;
      font-size: 1.8em;
      font-weight: bold;
      margin: 0;
    }
    
    .product {
      align-items: center;
      background-color: white;
      border-radius: 5px;
      display: grid;
      grid-template-areas: 
      'image'
      'title'
      'price'
      'add';
      grid-template-rows: 67% 11% 11% 11%;
      height: 450px;
      filter: drop-shadow(0px 0px 6px rgb(0,0,0,0.2));
      margin: 0 30px 30px 0;
      padding: 10px 20px;
      width: 200px;
    }
    
    .product > button {
      background-color: rgb(255, 208, 0);
      border: none;
      border-radius: 5px;
      color: black;
      justify-self: center;
      max-height: 35px;
      padding: 8px 20px;
      transition: 0.1s ease all;
    }
    
    .product > button:hover {
      background-color: rgb(255, 166, 0);
      cursor: pointer;
      transition: 0.1s ease all;
    }
    
    .product > img {
      align-self: center;
      justify-self: center;
      width: 100%;
    }
    
    .title {
      font-size: 1.1em;
      margin: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    
    .title:hover {
      font-size: 1.1em;
      margin: 0;
      white-space: wrap;
      overflow: auto;
      text-overflow: unset;
    }`;
    this.shadowRoot.appendChild(style);
    const custProduct = JSON.parse(localStorage.getItem('productList'));
    const listItems = document.createElement('li');
    listItems.setAttribute('class', 'product');
    const proImg = document.createElement('img');
    proImg.setAttribute('src', image);
    proImg.setAttribute('alt', title);
    proImg.setAttribute('width', "200" );
    const protitle = document.createElement('p');
    protitle.setAttribute('class', 'title');
    protitle.innerText= title;
    const proPrice = document.createElement('p');
    proPrice.setAttribute('class', 'price');
    proPrice.innerText= `$${price.toFixed(2)}`;;
    listItems.append(proImg);
    listItems.append(protitle);
    listItems.append(proPrice);
    const proButton = document.createElement('button');
    proButton.innerText = 'Add to Cart';
    
    proButton.onclick = () => {
     
      console.log("what");
      if (proButton.innerText == "Add to Cart"){
            alert('Added to Cart!');
            proButton.innerText = 'Remove From Cart';
            let x = document.getElementById('cart-count');
            let val = parseInt(x.innerText);
            val = val +1;
            x.innerText = val;
      }
      else {
            alert('Removed From Cart');
            proButton.innerText = 'Add to Cart';
            let x = document.getElementById('cart-count');
            let val = parseInt(x.innerText);
            val = val -1;
            x.innerText = val;
      }
    }

    listItems.append(proButton);
    this.shadowRoot.append(listItems);
  }
}
customElements.define('product-item', ProductItem);
