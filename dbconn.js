const {Sequelize} = require('sequelize')
require('dotenv').config()


const connection = new Sequelize({
    dialect:process.env.DIALECT,
    storage:process.env.STORAGE
})

let conTest = async () =>{
    try {
        await connection.authenticate()
        console.log('DB Connection Successful')
    }catch (error){
        console.error('Unable to connect',error)
    }

}
conTest()
module.exports = { connection}