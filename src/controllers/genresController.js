const db = require('../database/models')

module.exports = {
    list: (req,res) =>{
        db.Genres.findAll({
            order: [
                ['name', 'ASC']
            ]
        }).then((genres)=>{
                return ('genresList',{
                    genres
                })
            })
            .catch((error)=>{
                console.log('EROORRRRR :', error)
            })
    },
    detail: (req,res) =>{
        db.Genres.findByPk(req.params.id)
        .then(genre => res.render('genresDetail',genre))
        .catch(error=>console.log(error))
    }
}