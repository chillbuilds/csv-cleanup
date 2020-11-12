module.exports = function permute(arr){
    const fs = require('fs')
    const arrayUniq = require('array-uniq')
    const unique = arrayUniq(arr)
    return unique
}