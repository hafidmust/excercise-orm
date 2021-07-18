const {books} = require(('./models'))

books.create({
    isbn: "9786020620930",
    judul: "GRIT : Kekuatan Passion + Kegigihan",
    sinopsis: "Hal terpenting untuk sukses dan bahagia bukanlah bakat",
    penulis: "Angela Duckworth",
    genre: "Pengembangan Diri"
}).then((book)=>{
    console.log(book)
})