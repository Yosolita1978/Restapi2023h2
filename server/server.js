//help me to create a initial express server
import express from 'express';
import cors from 'cors';
import path from 'path';
import BOOKS from './books.js';


const app = express();
const port = 3000;

//Midlleware
app.use(cors());

//pwd - middleware
const _dirname = path.resolve();

app.get('/', (req, res) => {
    //console.log('Someone is visiting the home page');
    //console.log(res);
    res.send("Hola! You're visiting the home of my server");
})

app.get('/books', (req, res) => {
    res.json(BOOKS);
})

app.get('/books/:id', (req, res) => {
    const { id } = req.params;
    // prints what it's in the url;
    console.log(req.params);
    //console.log(id);

    const book = BOOKS.find(book => book.id === id);
    if(!book){
        res.status(404).send(`Sorry I don't have that book`);
    }
    res.json(book);
    // res.json(book);

})


app.all('*', (req, res) => {
    res.status(404).send(`Sorry, this is an invalid URL  - this API is only for books`);
});



app.listen(port, () => console.log(`Example app listening on port ${port}!`));
