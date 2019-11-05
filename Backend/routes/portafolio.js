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
        db.portafolio.insert(newPortafolio, (err, response)=>{
            res.json({
                response
            })
        })
        
    });

    app.put('/artistas/perfilartista/portafolios/:id',(req,res) =>{
        let updateArtcase = req.body
        db.portafolio.update(
            {_id: mongojs.ObjectId(req.params.id)},
            updateArtcase,
            {},
            (err, response)=>{
                res.json({
                    response
                })
            }
        )
    });
    app.delete('/artistas/perfilartista/portafolios/:id', (req,res)=>{
        db.portafolio.remove({
            _id: mongojs.ObjectId(req.params.id)
        }, (err,response)=>{
            res.json({
                response: 'Eliminado correctamente'
            })
        })
    })
}