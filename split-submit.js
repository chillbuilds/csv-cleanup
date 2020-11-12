const fs = require('fs')
const inquirer = require('inquirer')

const src = fs.readFileSync('./submit.csv', 'utf-8').split('\n')

inquirer.prompt([
    {type: 'number',
    message: 'lines per?',
    name: 'linesPer'},
    {type: 'list',
    message: 'how would you like em?',
    choices: ['least CSVs (slower upload, less tax on OMS)','most CSVs (faster upload, more tax on OMS)'],
    name: 'outputPref'
    }]).then(function(data){
    if(data.outputPref == 'least CSVs (slower upload, less tax on OMS)'){
        least(data.linesPer)
    }else{most(data.linesPer)}
})

function least(linesPer) {
    let csvCount = Math.round(src.length/25000)
    let productsPer = Math.round(25000/linesPer)
    console.log(csvCount)
    console.log(productsPer)
    for(var i = 0; i < src.length; i++){
        let lineArr = src.split(',')
        if(lineArr){
            
        }
    }
}

function most() {

}