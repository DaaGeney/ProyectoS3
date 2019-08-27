import mongojs from 'mongojs';

const db = mongojs('DatabaseArtcase',[
    'artista'
])

module.exports = app => {
    
    
    app.get('/artista/:id', function (req, res) {
        let id = req.params.id
        if (id) {
            db.artistas.find((err, artista) => {
               let  respo = artistas.filter(element => element.id.includes(id))
                console.log("id:" + id);

                res.json({
                    response: artista

                })
            });
        } else {
            res.send(entidad)
            console.log("valiendo");

        }
    })
    app.get('/artista',(req,res)=>{
       db.artista.find((err,artista)=>{
        res.json({
            response: artista
        })
       })
    })


    app.post('/artCase', (req,res)=>{
        let newArtcase =req.body;
        console.log(req.body);
        db.artista.insert(newArtcase, (err, response)=>{
            res.json({
                //artCase Commit realizado
                response
            })
        })
        
    })

    app.put('/artista/:id',(req,res) =>{
        let updateArtcase = req.body
        db.artista.update(
            {_id: mongojs.ObjectId(req.params.id)},
            updateArtcase,
            {},
            (err, response)=>{
                res.json({
                    response
                })
            }
        )
    })

    app.delete('/artista/:id', (req,res)=>{
        db.artista.remove({
            _id: mongojs.ObjectId(req.params.id)
        }, (err,response)=>{
            res.json({
                response: 'Eliminado correctamente'
            })
        })
    })


}