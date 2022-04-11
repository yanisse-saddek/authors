const express = require('express')
const res = require('express/lib/response')
const app = express()

var authors = [
    {
        name: "Lawrence Nowell",
        nationality: "UK",
        books: ["Beowulf"]
    },
    {
        name: "William Shakespeare",
        nationality: "UK",
        books: ["Hamlet", "Othello", "Romeo and Juliet", "MacBeth"]
    },
    {
        name: "Charles Dickens",
        nationality: "US",
        books: ["Oliver Twist", "A Christmas Carol"]
    },
    {
        name: "Oscar Wilde",
        nationality: "UK",
        books: ["The Picture of Dorian Gray", "The Importance of Being Earnest"]
    },
]

app.get('/', (req, res)=>{
    res.send('Authors API')
})

app.get('/authors/:id', (req, res)=>{
    const id = req.params.id
    const author = authors[id-1]
    res.send(`${author.name}, ${author.nationality}`)
})
app.get('/json/authors/:id', (req, res)=>{
    const id = req.params.id
    const author = authors[id-1]
    res.json({
        name:author.name, 
        nationality:author.nationality
    })
})
app.get('/authors/:idAuthor/books', (req, res)=>{
    const id = req.params.idAuthor
    const author = authors[id-1]
    console.log(author)
    var bookList = author.books.map((book)=>book)
    res.send(bookList)
})
app.get('/json/authors/:idAuthor/books', (req, res)=>{
    const id = req.params.idAuthor
    const author = authors[id-1]
    console.log(author)
    var bookList = author.books.map((book)=>book)
    res.json({
        books:bookList
    })
})

app.listen(3000, ()=>{

})


