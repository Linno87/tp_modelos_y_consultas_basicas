const db = require('../database/models')

module.exports ={
    list: (req,res) =>{
        db.Actor.findAll({
            order: [
                ['first_name', 'ASC']
            ]
        })
            .then(actors=>{
                return res.render('actorsList',{
                   actors
                })
            })
            .catch((error)=>{
                console.log('EROORRRRR :', error)
            });
    },
    detail: (req,res) =>{
        const id=req.params.id;
        db.Actor.findByPk(id)
            .then((actor)=>{
                return res.render('actorsDetail',{
                    actor
                })
            })
            .catch((error)=>{
                console.log('EROORRRRR :', error)
            });
    }

}