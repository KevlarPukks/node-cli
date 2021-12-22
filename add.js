const {Note} = require('./model')
const {connection} = require('./dbconn')
const yargs = require('yargs/yargs')
const {hideBin} = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv


  let add =  async () =>{
        await connection.sync()
        if (argv.body){
             await Note.create({title:argv.title,body:argv.body})
            //console.log(note instanceof Note)
            //console.log(note.title,note.body)
            //console.log(note.toJSON())
            //await note.save()
            //console.log(`Note: '${note.title}' has been saved`)

        }
    }
add()

