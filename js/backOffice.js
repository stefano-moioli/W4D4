const ENDPOINT = "https://striveschool-api.herokuapp.com/api/product/"
const KEY = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjA4MTdjMWViYzE5NzAwMTk4ZWQxM2MiLCJpYXQiOjE3MTE4MDY0MDEsImV4cCI6MTcxMzAxNjAwMX0.barFv73SIEyQx9V2AwLRiHeMA3UPuFZNBhVJTkZTJX8"

// Recuperiamo l'id dall'URL
let searchParams = new URLSearchParams(window.location.search)
let id = searchParams.get("id")
// Se abbiamo un id (ovvero se id è truthy, allora siamo in modifica)
const isEdit = !!id

window.onload = async () => {
    if (id) {
        const response = await fetch(ENDPOINT + id, {
            headers: {
                authorization: KEY,
            },
        })
        const product = await response.json()

        // Se l'id c'è, il titolo diventa "Edit"
        document.querySelector("h1").innerText = "Edit Product"
        document.getElementsByTagName("button").innerHtml = "Modify"
        // compilo il form
        document.getElementById("name").value = product.name
        document.getElementById("description").value = product.description
        document.getElementById("brand").value = product.brand
        document.getElementById("image").value = product.image
        document.getElementById("price").value = product.price
        //rimuovo i bottoni non necessari
        document.getElementById("addProduct").remove()
    }
}

/*
const createNewProduct = async() => {
    const newProduct = {
        name: document.getElementById("name").value,
        description: document.getElementById("description").value,
        brand: document.getElementById("brand").value,
        image: document.getElementById("image").value,
        price: document.getElementById("price").value,
    }

   let response = await fetch(ENDPOINT, {
        method: "POST",
        headers: {
            "content-type": "application/json",
            authorization: KEY,
        },
        body: JSON.stringify(newProduct),
    })
    if (response.ok){
        alert("You have created a new product")
    }
    console.log(newProduct);
}*/


const createNew = async () => {
    const product = {
      name: document.querySelector("#name").value,
      description: document.querySelector("#description").value,
      brand: document.querySelector("#brand").value,
      imageUrl: document.querySelector("#imageUrl").value,
      price: document.querySelector("#price").value,
    }
    let res = await fetch(ENDPOINT, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: KEY,
      },
      body: JSON.stringify(product),
    })
    if (res.ok) {
      alert("Product created")
    }
    console.log(product);
  }

