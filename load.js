const fs = require('fs')

const loadData = ()=>{
    try{
        const dataBuffer = fs.readFileSync('data.json')
        return JSON.parse(dataBuffer.toString())
    }catch (e) {
        return []
    }
}
console.log(loadData())