import mongojs from 'mongojs';

const db = mongojs('DatabaseArtcase',[
    'artcase'
])

module.exports = app => {
    app.get('/ArtCase',(req,res)=>{
       db.artCase.find((err,artCase)=>{
        res.json({
            response: artCase
        })
       })
    })

    app.post('/ArtCase', (req,res)=>{
        let newArtcase =req.body;
        console.log(req.body);
        db.artCase.insert(newArtcase, (err, response)=>{
            res.json({
                //artCase
                response
            })
        })
        
    })

    app.put('/artcase/:id',(req,res) =>{
        let updateArtcase = req.body
        db.artCase.update(
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

    app.delete('/artcase/:id', (req,res)=>{
        db.artCase.remove({
            _id: mongojs.ObjectId(req.params.id)
        }, (err,response)=>{
            res.json({
                response: 'Eliminado de nuevo'
            })
        })
    })


}