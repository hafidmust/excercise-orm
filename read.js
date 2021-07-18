const {books} = require('./models')

books.findAll({}).then((books)=>{
    console.log(books)
})