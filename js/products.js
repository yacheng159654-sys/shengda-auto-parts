
fetch("products.json")
.then(res => res.json())
.then(products => {

const container =
document.getElementById("product-list");

products.forEach(product => {

container.innerHTML += `

<div class="card">

<img src="${product.image}">

<h3>${product.name}</h3>

<p>NT$${product.price}</p>

</div>

`;

});

});
