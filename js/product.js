const ENDPOINT = "https://striveschool-api.herokuapp.com/api/product/"
const KEY = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjA4MTdjMWViYzE5NzAwMTk4ZWQxM2MiLCJpYXQiOjE3MTE4MDY0MDEsImV4cCI6MTcxMzAxNjAwMX0.barFv73SIEyQx9V2AwLRiHeMA3UPuFZNBhVJTkZTJX8"


let searchParams = new URLSearchParams(window.location.search)
let id = searchParams.get("id")

window.onload = async () => {
    if (id) {
        const response = await fetch(ENDPOINT + id, {
            headers: {
                authorization: KEY,
            },
        })
        const product = await response.json()
        const productContainer = document.getElementById("productContainer");
    productContainer.setAttribute("class", "d-flex flex-column align-items-center mt-3")
    productContainer.innerHTML = `
    <div class="col-12 col-sm 6 col-md-4 col-lg-3 productContainer">
    <a href="product.html?id=${product._id}"><img class="productImg" src="${product.imageUrl}" class="card-img-top" alt="product image"></a>
    <h5 class="card-title">${product.name}</h5>
      <p class="card-text">${product.brand}</p>
      <p class="card-text">${product.description}</p>
      <p class="card-text">${product.price} $</p>
      <a href="backOffice.html?id=${product._id}" class="btn btn-primary">Modify Product</a>
      </div>
      `
    }}
