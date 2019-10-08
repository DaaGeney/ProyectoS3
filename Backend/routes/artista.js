import mongojs from 'mongojs';

const db = mongojs('DatabaseArtcase',[
    'artista'
])

module.exports = app => {
    
    
    app.get('/artista/:id', (req, res) => {
        db.artista.find({
            _id: mongojs.ObjectId(req.params.id)
        }, (err, response) => {
            res.json({
                response: response
            })
        })
    })
    app.get('/artistas/login/', (req, res) =>  {
        console.log(req.body)
        db.artista.find({
            $and: [
                {
                   'email': new RegExp(`${req.body.email}`, 'i')
                },
                {
                    'nombre': new RegExp(`${req.body.nombre}`, 'i')
                }
            ]
        }, (err, response) => {
            res.json({
                response: response
            })
        })
    })

    app.get('/artistas/categorias/:category', (req, res) => {
        db.artista.find({
            tipo: {
                $in: [
                  `${req.params.category}`
                ]
              }
        }, (err, response) => {
            res.json({
                response: response
            })
        })
    })
    

    app.get('/artistas/busqueda/:nombre', (req, res) => {
        db.artista.find({
            $or: [
                {
                   'nombre': new RegExp(`${req.params.nombre}`, 'i')
                }, {
                   'apellido': new RegExp(`${req.params.nombre}`, 'i')
                }, {
                    'apodo': new RegExp(`${req.params.nombre}`, 'i')
                 }
            ]
        }, (err, response) => {
            res.json({
                response: response
            })
        })
    })

    app.get('/artista',(req,res)=>{
       db.artista.find((err,artista)=>{
        res.json({
            response: artista
        })
       })
    })


    app.post('/artista', (req,res)=>{
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