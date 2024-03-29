const searchParams = new URLSearchParams(window.location.search)
const bookId = searchParams.get("id")

fetch("https://striveschool-api.herokuapp.com/books" + bookId)
.then(r => r.json())
.then(body =>{
    console.log(body)
    /* showBookData(body)*/
})

