import mongojs from 'mongojs';

const db = mongojs('DatabaseArtcase',[
    'portafolio'
])

module.exports = app => {
    app.get('/artistas/perfilartista/portafolios/:id',(req, res)=> {
        db.portafolio.find({
            artista: { $in: [`${req.params.id}`] }
        }, (err, response) => {
            res.json({
                response: response
            })
        })
    });

    app.post('/artistas/perfilartista/portafolios/', (req,res)=>{
        let newPortafolio =req.body;
        console.log(req.body);
        db.portafolio.insert(newPortafolio, (err, response)=>{
            res.json({
                response
            })
        })
        
    });
}