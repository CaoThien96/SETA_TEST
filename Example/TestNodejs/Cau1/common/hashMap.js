const lodash = require('../../node_modules/lodash/lodash')
module.exports.getHashMap = (array=[])=>{
    let result = {};
    array.forEach(el=>{
        let length = el.split('').length;
        if(result[length] === undefined){
            result[length]=1
        }else{
            let tmp = result[length];
            result[length] = tmp+1
        }
    })
    result = lodash.map(result,(value,key)=>{
        return {value,length:key}
    })
    return result
}