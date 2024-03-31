//Chiamata Fetch
const ENDPOINT = "https://striveschool-api.herokuapp.com/api/product/"
const KEY = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjA4MTdjMWViYzE5NzAwMTk4ZWQxM2MiLCJpYXQiOjE3MTE4MDY0MDEsImV4cCI6MTcxMzAxNjAwMX0.barFv73SIEyQx9V2AwLRiHeMA3UPuFZNBhVJTkZTJX8"

window.onload = async () => {
        const response = await fetch(ENDPOINT, {
        headers: { 
        authorization: KEY,
        },
    })
    const products = await response.json();
    const productsContainer = document.getElementById("productsContainer");
    products.forEach((product) => {
        productsContainer.innerHTML += `
        <div class="col-12 col-sm 6 col-md-3 col-lg-2">
        <a href="product.html?id=${product._id}"><img class="bookImg" src="${product.imageUrl}" class="card-img-top" alt="product image"></a>
        <h5 class="card-title">${product.name}</h5>
          <p class="card-text">${product.price} $</p>
          <p class="card-text">${product.description}</p>
          <a href="backOffice.html?id=${product._id}" class="btn btn-primary">Modify Product</a>
          </div>
          `
    })
    console.log(products);
    } 

/* //Visualizzo l'array nella console
getData().then(body => console.log(body))


// Visualizzo i prodotti dell'array sulla pagina
const productsContainer = document.getElementById("productsContainer");

function showProducts(product) {
    const productContainer = document.createElement("div");
    productContainer.setAttribute("class", "col-12 col-md-4 col-lg-3");
    productContainer.innerHTML = `<div class="card mb-3" style"width: 18rem;">
    <a href="product.html?id=${product._id}"><img class="bookImg" src="${product.imageUrl}" class="card-img-top" alt="product image"></a>
    <div class="card-body">
      <h5 class="card-title">${product.name}</h5>
      <p class="card-text">${product.price} $</p>
      <p class="card-text">${product.description}</p>
      <a href="newProduct.html?id=${product._id}" class="btn btn-primary">Modify Product</a>
      </div>
      </div>`
    productContainer.append(productsContainer);
}

getData().then(products => {
    products.map((product) => showProducts(product))
});*/
