const hashMapCommon = require('./common/hashMap')
const commonSort = require('./common/sort');
const findLengthStringAppearMost = (arrayString=[])=>{
    //Get  Frequency
    if(arrayString.length<1){
        return new Error('Mang rong');
    }else {
        if(arrayString.length === 1){
            return [arrayString[0].split('').length];
        }
        let frequency = hashMapCommon.getHashMap(arrayString)
        //Sort frequency
        frequency = commonSort.mergeSort(frequency);
        
        let appearMost=  frequency.filter(el=>{
            if(el.value === frequency[0].value){
                return true;
            }
        })
        return appearMost.map(el=>parseInt(el.length))
    }
}
module.exports.findLengthStringAppearMost= findLengthStringAppearMost
