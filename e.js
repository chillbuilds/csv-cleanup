var linesPer = 0
const permute = require('./per')
const csvCombination = require('./node_modules/src-parse')
const srcArrFunc = require('./node_modules/src-arr')
const reripArrFunc = require('./node_modules/reripArrFunc')
const csvCrank = require('./node_modules/csvCrank')
const fs = require('fs')
const inquirer = require('inquirer')
const err = fs.readFileSync('./err.csv', 'utf-8').split('\r\n\t')
var csvArr = []
var skuArr = []
fs.writeFileSync('./rerip.csv', '')
fs.writeFileSync('./submit.csv', '')
fs.writeFileSync('./rerip-skus.csv', '')

fs.readdirSync('./csvs').forEach(file => {
    csvArr.push(file)
  })
var src = csvCombination(csvArr)

inquirer.prompt(
    {type: 'number',
    name: 'lines',
    message: 'How many lines for the product?'}
).then(function(data){
    linesPer = data.lines
    theRest()}
    )

function theRest() {
    var srcArr = srcArrFunc(src, linesPer)
    var rerip = permute(reripArrFunc(err, srcArr))
    console.log('\nCSV generation in progress...\n')
    
    skuArr = csvCrank(srcArr, rerip)
    
    for(var i = 0; i < skuArr.length; i++){
        if(i == 0){
            fs.appendFileSync('./rerip-skus.csv', skuArr[i])}else{
            fs.appendFileSync('./rerip-skus.csv', '\n'+skuArr[i])
        }
    }   
}