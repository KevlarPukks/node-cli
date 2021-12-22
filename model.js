const {connection} = require('./dbconn')
const {DataTypes,Model}= require('sequelize')

class Note extends Model{}

Note.init({
    title:{
        type:DataTypes.STRING,
    },
    body:{
        type:DataTypes.STRING,
        allowNull:false
    }
},{

    sequelize:connection
})
module.exports = {Note}