const {books} = require('./models')

books.destroy({where: {id: 1}}).then(()=>{
    console.log("delete,Succesful!")
})