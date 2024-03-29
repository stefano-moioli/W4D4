//Chiamata API
const ENDPOINT = "https://striveschool-api.herokuapp.com/books";

async function getData() {
    try {
        const response = await fetch(ENDPOINT);
        const data = await response.json();
        return data;

    } catch (error) {
        console.log(error);
    }
}
getData().then(body => console.log(body)) // Qui visualizzo l'array nella console

// Visualizzo i libri dell'array sulla pagina
const bookContainer = document.getElementById("bookContainer");

function showBooks(book) {
    const cardContainer = document.createElement("div");
    cardContainer.setAttribute("class", "col-12 col-md-4 col-lg-3");
    cardContainer.innerHTML = `<div class="card" style"width: 18rem;">
    <img src="${book.img}" class="card-img-top" alt="book card">
    <div class="card-body">
      <h5 class="card-title">${book.title}</h5>
      <p class="card-text">${book.price} $</p>
      <p class="card-text">${book.asin}</p>
      <p class="card-text">${book.category}</p>
      <a href="#" class="btn btn-primary"> Add to cart</a>
      </div>
      </div>`
    bookContainer.append(cardContainer);
}

getData().then(books => {
    books.map((book) => showBooks(book))
});



