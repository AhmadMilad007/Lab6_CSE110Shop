// Script.js

window.addEventListener('DOMContentLoaded', () => {
  // TODO
	let intial
	if (localStorage.getItem('dataArray')==null ) {

		fetch ('https://fakestoreapi.com/products')
		.then (response => response.json())	
		.then (data => localStorage.setItem('dataArray', JSON.stringify(data))); 
		
		loader();

	} 
	else 
	{

		loader();	
	}


});

function loader () {
		
		const item_list 	= document.querySelector ('#product-list');
		let product 		= JSON.parse(localStorage.getItem('dataArray'));
		for (let i = 0 ; i < product.length; i ++ ) {
			let childProduct = document.createElement ('child');
			childProduct.title = product[i].title;
			childProduct.img   = product[i].img;
			childProduct.price = product[i].price;
			childProduct.id    = product[i].id;
			item_list.appendChild (childProduct);
			console.log(childProduct.price);  //for testing- take it out before submission 
		} 	 
	
	}
