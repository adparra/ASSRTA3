const netflixs = require('express').Router()
const db = require('../models')
const { Netflix } = db

//Get de prueba
netflixs.get('/',async(req,res)=>{
    try{
        const pagos= await Netflix.findAll({
            attributes: [db.sequelize.fn('COUNT',db.sequelize.col('MonthlyRevenue'))]
        })
        res.status(200).json(pagos)
    } catch(err){
        res.status(500).send("error de servidor")
        console.log(err)
    }
})

module.exports = netflixs