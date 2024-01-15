// ============================================
// IMPORTS
// ============================================

const express = require('express')
const mongoose = require('mongoose')

// ============================================
// CONFIGS
// ============================================

const app = express()
const port = 3000

// ============================================
// MONGO CONNECTION
// ============================================

mongoose.connect('mongodb://127.0.0.1:27017/books_db');
// tas pats kas: mongodb://localhost:27017/books_db
// bet localhost neveikia :(((

const db = mongoose.connection

db.on('error', (err) => console.log(err))
db.once('open', () => console.log('Connected to database successfully'))

// ============================================
// MONGO DATABASE SCHEMA
// ============================================

const BookSchema = new mongoose.Schema({
    title: String,
    author: String,
    description: String,
    publishedYear: Number,
    price: Number
})

const Book = mongoose.model('Book', BookSchema)

// ============================================
// MIDDLEWARES
// ============================================

app.use(express.json()) // use json

// ============================================
// ROUTES
// ============================================

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })

// imti visas knygas
app.get('/books', async (req, res) => {
    // 1
    // res.send({message: 'GET /books NOT IMPLEMENTED'})

    // 2
    // const results = await Book.find() // db.books.find()
    // return res.send(results)

    // 3
    try {
        const results = await Book.find() // db.books.find()
        return res.send(results)
    } catch (error) {
        res.status(500).send({message: error.message})
    }
})

// imti vieną konkrečią knygą
app.get('/books/:id', async (req, res) => {
    // 1
    // res.send({message: 'GET /books/:id NOT IMPLEMENTED'})

    // 2
    // console.log(req.params.id);
    // res.send({message: 'some book', id: req.params.id})

    // 3
    try {
        let results = await Book.findById(req.params.id)
        // console.log(results)
        if (!results) {
            return res.status(404).send({message: 'Book not found'})
        }
        return res.send(results)
    } catch (error) {
        res.status(500).send({message: error.message})
    }
})

// sukurti naują knygą
app.post('/books', async (req, res) => {
    // 1
    // res.send({message: 'POST /books NOT IMPLEMENTED'})

    // 2
    // res.send({message: 'new book', received_data: req.body})

    // 3
    try {
        if (req.body.title == null) {
            return res.status(400).send({message: 'Book title is required'})
        }

        if (req.body.author == null) {
            return res.status(400).send({message: 'Book author is required'})
        }

        // if (req.body.publishedYear < 1455) {
        //     return res.send({message: 'Book published year cannot be less than 1455'})
        // }

        let book = new Book(req.body)

        // if (req.body.author == null) {
        //     book.author = 'Unknown'
        // }

        // book.author = book.author || 'Unknown'

        await book.save()
        return res.send(book)
    } catch (error) {
        return res.status(500).send({message: error.message})
    }
})

// atnaujinti konkrečią knygą
app.patch('/books/:id', async (req, res) => {
    // 1
    // res.send({message: 'PATCH /books/:id NOT IMPLEMENTED'})

    // 2
    try {
        let book = await Book.findById(req.params.id)

        if (!book) {
            return res.status(404).send({message: 'Book not found'})
        }

        // jeigu title atėjo, perrašau dabartinės knygos title į naują
        if (req.body.title != null) {
            book.title = req.body.title
        }

        // jeigu author atėjo, perrašau dabartinės knygos author į naują
        if (req.body.author != null) {
            book.author = req.body.author
        }

        // jeigu description atėjo, perrašau dabartinės knygos description į naują
        if (req.body.description != null) {
            book.description = req.body.description
        }

        // jeigu publishedYear atėjo, perrašau dabartinės knygos publishedYear į naują
        if (req.body.publishedYear != null) {
            if (req.body.publishedYear > new Date().getFullYear()) {
                return res.status(400).send({message: 'Book published year cannot be more than current year'})
            } else {
                book.publishedYear = req.body.publishedYear
            }
        }

        // jeigu price atėjo, perrašau dabartinės knygos price į naują
        if (req.body.price != null) {
            if (req.body.price < 0) {
                return res.status(400).send({message: 'Book price cannot be negative'})
            } else {
                book.price = req.body.price
            }
        }

        await book.save()
        return res.send(book)

    } catch (error) {
        return res.status(500).send({message: error.message})
    }
})

// ištrinti konkrečią knygą
app.delete('/books/:id', async (req, res) => {
    // 1
    // res.send({message: 'DELETE /books/:id NOT IMPLEMENTED'})

    // 2
    try {
        // let book = await Book.findById(req.params.id)
        // if (!book) {
        //     return res.status(404).send({message: 'Book not found'})
        // }
        // await book.deleteOne()
        // return res.send({message: 'Book deleted successfully'})

        await Book.findByIdAndDelete(req.params.id)
        return res.send({message: 'Book deleted successfully'})
    } catch (error) {
        return res.status(500).send({message: error.message})
    }
})

// ============================================
// START SERVER
// ============================================

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})