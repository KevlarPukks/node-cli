console.log(process.argv);
function listen() {
    if(process.argv[2] === 'CodeNation'){
        console.log("If true")
    }
}

const yargs = require('yargs/yargs')
const {hideBin} = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv

//console.log(argv)

const fs = require('fs')

const saveData = (data) =>{
    try{
        fs.writeFileSync("Data.json",JSON.stringify(data));
    }catch (e){
        console.log('Something went wrong while saving')
    }
}



const addReminder = (reminder) => {
    saveData([...loadData(),reminder])
}

const loadData = ()=>{
    try{
        const dataBuffer = fs.readFileSync('data.json')
        return JSON.parse(dataBuffer.toString())
    }catch (e) {
        return []
    }
}

addReminder({reminder:argv.reminder})