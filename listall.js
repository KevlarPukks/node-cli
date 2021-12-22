const {Note} = require('./model')


const listAll= async ()=>{
    let notes =await Note.findAll()
    console.log('note',JSON.stringify(notes,null,2))
notes.forEach(item =>{
    console.table(item.dataValues)
    console.log(item.dataValues.createdAt)
})
  //  console.table(notes[0].dataValues)
}
listAll()