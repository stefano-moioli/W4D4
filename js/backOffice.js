const ENDPOINT = "https://striveschool-api.herokuapp.com/api/product/"
const KEY = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjA4MTdjMWViYzE5NzAwMTk4ZWQxM2MiLCJpYXQiOjE3MTE4MDY0MDEsImV4cCI6MTcxMzAxNjAwMX0.barFv73SIEyQx9V2AwLRiHeMA3UPuFZNBhVJTkZTJX8"

// Recuperiamo l'id dall'URL
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

        // Se l'id c'è, il titolo diventa "Edit"
        document.querySelector("h3").innerText = "Edit or Delete Product"

        // compilo il form
        document.getElementById("name").value = product.name
        document.getElementById("description").value = product.description
        document.getElementById("brand").value = product.brand
        document.getElementById("imageUrl").value = product.imageUrl
        document.getElementById("price").value = product.price
        
        //rimuovo i bottoni non necessari
        document.getElementById("createBtn").remove()
        
    } else{
        document.getElementById("editBtn").remove()
        document.getElementById("deleteBtn").remove()
    }
}

// Funzione per creare nuovo prodotto (metodo POST)
const createNew = async () => {
    const product = {
      name: document.querySelector("#name").value,
      description: document.querySelector("#description").value,
      brand: document.querySelector("#brand").value,
      imageUrl: document.querySelector("#imageUrl").value,
      price: document.querySelector("#price").value,
    }
    let response = await fetch(ENDPOINT, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: KEY,
      },
      body: JSON.stringify(product),
    })
    if (response.ok) {
      alert("Product created")
    }
    console.log(product);
  }

//Funzione per modificare prodotto (metodo PUT)
const editProduct = async () => {
    const product = {
        name: document.getElementById("name").value,
        description: document.getElementById("description").value,
        brand: document.getElementById("brand").value,
        imageUrl: document.getElementById("imageUrl").value,
        price: document.getElementById("price").value,
    }

    let response = await fetch(ENDPOINT + id, {
        method: "PUT",
        headers: {
            "content-type": "application/json",
            authorization: KEY,
        },
        body: JSON.stringify(product),
    })
    if (response.ok){
        alert("Product modified")
    }
}

//Funzione per eliminare prodotto (metodo DELETE)
const removeProduct = async () => {
    const product = {
        name: document.getElementById("name").value,
        description: document.getElementById("description").value,
        brand: document.getElementById("brand").value,
        imageUrl: document.getElementById("imageUrl").value,
        price: document.getElementById("price").value,
    }

    let response = await fetch(ENDPOINT + id, {
        method: "DELETE",
        headers: {
            "content-type": "application/json",
            authorization: KEY,
        },
        body: JSON.stringify(product),
    })
    if (response.ok){
        alert("Product removed")
    }
}

