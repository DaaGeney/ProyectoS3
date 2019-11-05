import mongojs from 'mongojs';
const db = mongojs('DatabaseArtcase',[
    'peticion'
])

module.exports = app => {
    
    

    app.post('/peticion/', (req,res)=>{
        let newArtcase =req.body;
        console.log(req.body);
        db.peticion.insert(newArtcase, (err, response)=>{
            res.json({
                //artCase Commit realizado
                response
            })
        })  
    })

    app.delete('/peticion/:id', (req,res)=>{
        db.peticion.remove({
            _id: mongojs.ObjectId(req.params.id)
        }, (err,response)=>{
            res.json({
                response: 'Eliminado correctamente'
            })
        })
    })



}