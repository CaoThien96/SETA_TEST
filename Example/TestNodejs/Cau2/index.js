const sortCommon = require('./common/sort')
module.exports.sumTopK = (k,arr=[])=>{
    if(arr.length>=k){
        const arraySorted = sortCommon.mergeSort(arr);
        let sum = 0
        for (let index = 0; index < k; index++) {
            const element = arraySorted[index];
            sum +=element
        }
        return sum;
    }else{
        return 0
    }
    
}