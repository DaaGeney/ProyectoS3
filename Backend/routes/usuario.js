import mongojs from 'mongojs';
var jwt = require('jsonwebtoken')
const db = mongojs('DatabaseArtcase',[
    'usuario'
])

module.exports = app => {
    
    app.post('/usuario/login/', (req, res) =>  {

        db.usuario.find({
            $and: [
                {
                   'email': new RegExp(`${req.body.email}`)
                },
                {
                    'contraseña': new RegExp(`${req.body.contraseña}`)
                }
            ]
        }, (err, response) => {
            
            if(response.length>0){
                let tokenData = {
                    username: req.body.email
                    // ANY DATA
                }
                let token = jwt.sign(tokenData, 'Secret Password', {
                    expiresIn: 60 * 60 * 24 // expires in 24 hours 
                })
                res.send({
                     token: token,
                     response: response
                })
            }else{

                res.send({
                    error: "Usuario o contraseña invalidos"
                })
            }
            
        })
    })

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
        db.usuario.find({
            $or: [
                {
                   'email': new RegExp(`${newArtcase.email}`, 'i')
                },
                {
                    'username': new RegExp(`${newArtcase.username}`, 'i')
                 }
                
            ]
        }, (err, response) => {
            
            if(response.length>0){
                
                res.send({
                     error: "Email registrado anteriormente"
                })
            }else{

                db.usuario.insert(newArtcase, (err, response)=>{
                    res.json({
                        //artCase Commit realizado
                        response:response,
                        estado:"Usuario registrado!"
                    })
                })
            }
            
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