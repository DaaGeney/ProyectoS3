import mongojs from 'mongojs';

const db = mongojs('DatabaseArtcase',[
    'usuario'
])

module.exports = app => {
    
    
    app.get('/usuario/:id', (req, res) => {
        db.usuario.find({
            _id: mongojs.ObjectId(req.params.id)
        }, (err, response) => {
            res.json({
                response: response
            })
        })
    })

    app.get('/usuario',(req,res)=>{
       db.usuario.find((err,usuario)=>{
        res.json({
            response: usuario
        })
       })
    })


    app.post('/usuario', (req,res)=>{
        let newArtcase =req.body;
        console.log(req.body);
        db.usuario.insert(newArtcase, (err, response)=>{
            res.json({
                //artCase Commit realizado
                response
            })
        })
        
    })

    app.put('/usuario/:id',(req,res) =>{
        let updateArtcase = req.body
        db.usuario.update(
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

    app.delete('/usuario/:id', (req,res)=>{
        db.usuario.remove({
            _id: mongojs.ObjectId(req.params.id)
        }, (err,response)=>{
            res.json({
                response: 'Eliminado correctamente'
            })
        })
    })


}