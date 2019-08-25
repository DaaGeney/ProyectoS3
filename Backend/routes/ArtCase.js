import mongojs from 'mongojs';

const db = mongojs('DatabaseArtcase',[
    'artcase'
])

module.exports = app => {
    app.get('/ArtCase',(req,res)=>{
        res.json({
            response:'Funciona artCase'
        })
    })
}