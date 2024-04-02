//Chiamata Fetch
const ENDPOINT = "https://striveschool-api.herokuapp.com/api/product/"
const KEY = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjA4MTdjMWViYzE5NzAwMTk4ZWQxM2MiLCJpYXQiOjE3MTE4MDY0MDEsImV4cCI6MTcxMzAxNjAwMX0.barFv73SIEyQx9V2AwLRiHeMA3UPuFZNBhVJTkZTJX8"

window.onload = async () => {
    try {
        const response = await fetch(ENDPOINT, {
            headers: {
                authorization: KEY,
            },
        })
        const products = await response.json();
        const productsContainer = document.getElementById("productsContainer");
        products.map((product) => {
            productsContainer.innerHTML += `
            <div class="col-12 col-sm-6 col-md-4 col-lg-3 mt-4 productContainer">
            <a href="product.html?id=${product._id}"><img class="productImg" src="${product.imageUrl}" class="card-img-top" alt="product image"></a>
            <h5 class="card-title">${product.name}</h5>
              <p class="card-text">${product.brand}</p>
              <p class="card-text">${product.description}</p>
              <p class="card-text">${product.price} $</p>
              <a href="backOffice.html?id=${product._id}" class="btn btn-primary">Edit Product</a>
              </div>
              `
        })
        console.log(products);
        
    } catch (error) {
        console.log(error);
    }
}