const {Note} = require('./model')


const findOne= async ()=>{
    let note =await Note.findOne({where:{title:'Keep on my toes'}})
    console.log('note',JSON.stringify(note,null,2))

    //  console.table(note[0].dataValues)
}
findOne()