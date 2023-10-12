const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')
const Articles = require('./models/articles')
const cors =require('cors')
const db = mongoose.connection
const articlesData = require('./utilities/data')
const articlesController = require('./controllers/articles')

const app = express()
const mongoURI = process.env.MONGODB_URI
const PORT = process.env.PORT || 8000

// mongoose.connect(mongoURI, { useNewUrlParser: true},
//     () => console.log('MongoDB connection establish') )

mongoose.connect(process.env.MONGO_URI)
mongoose.connection.once("open", ()=>{
    console.log("connected to mongo")
})

    db.on('error', err => console.log(err.message + ' is Mongod not running?'))
db.on('disconnected', () => console.log('mongo disconnected'))

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(express.static('public'))
app.use(cors({ origin: '*' }))
app.use('/articles', articlesController)

app.get('/seed', async (req, res) => {
    await Articles.deleteMany({});
    await Articles.insertMany(articlesData);
    res.send('done!');
  });

app.listen(PORT, () => {
    console.log('Server running on port', PORT)
  })