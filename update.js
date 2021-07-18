const {books} = require('./models')

books.update({
    genre: "Self Improvement"
},{where: {id:1}}).then((book)=>{
    console.log(book)
}).catch((error)=>{
    console.log(error)
})