/* const ENDPOINT = "https://striveschool-api.herokuapp.com/books/"

window.onload = () => {

const searchParams = new URLSearchParams(window.location.search)
const bookId = searchParams.get("id")

fetch(ENDPOINT + bookId)
.then(r => r.json())
.then(body =>{
    console.log(body)
    showBookData()
})
}


window.onload = () => {

    const searchParams = new URLSearchParams(window.location.search)
    const bookId = searchParams.get("id")

  async function getBookDetails(){
    const ENDPOINT = "https://striveschool-api.herokuapp.com/books/"
    try {
        const response = await fetch(ENDPOINT + bookId);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
  }
}

function showBookData(book){
    const productContainer = document.getElementById("productContainer")
    productContainer.innerHTML = `
    <h5>${book.title}</h5>
    <img src="${book.img}" alt="book image">
    <p>Price: ${book.price} $</p>
    <p>ASIN: ${book.asin}</p>
    <p>Category: ${book.category}</p>
`;

}*/

// Funzione per ottenere il parametro della query string dall'URL
function getQueryStringParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Chiamata API per ottenere i dettagli del libro
async function getProductDetails(id) {
    const ENDPOINT = `https://striveschool-api.herokuapp.com/books/${id}`;
    try {
        const response = await fetch(ENDPOINT);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

// Funzione per visualizzare i dettagli del libro sulla pagina
function showProductDetails(book) {
    const productContainer = document.getElementById("productContainer");
    productContainer.setAttribute("class", "d-flex flex-column align-items-center mt-3")
    productContainer.innerHTML = `
        <h5>${book.title}</h5>
        <img class="bookImg" src="${book.img}" alt="book image">
        <p>Price: ${book.price} $</p>
        <p>ASIN: ${book.asin}</p>
        <p>Category: ${book.category}</p>
    `;
}

// Recupera l'ID del libro dalla query string dell'URL
const bookId = getQueryStringParameter("id");

// Se l'ID del libro è presente nella query string, ottieni e visualizza i dettagli del libro
if (bookId) {
    getProductDetails(bookId)
        .then(book => showProductDetails(book))
        .catch(error => console.log(error));
} else {
    console.log("ID del libro non trovato nella query string dell'URL");
}

