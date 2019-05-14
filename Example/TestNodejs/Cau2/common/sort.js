
module.exports.merge=(L1=[],L2=[])=>{
    let result = [];
    let i = 0;
    let j = 0;
    while (i<L1.length && j<L2.length){
        if(L1[i]>=L2[j]){
            result.push(L1[i]);
            i++;
        }else{
            result.push(L2[j]);
            j++
        }
    }
    if(i===L1.length){
        while (j<L2.length){
            result.push(L2[j]);
            j++
        }
    }
    if(j === L2.length){
        while (i<L1.length){
            result.push(L1[i]);
            i++
        }
    }
    return result
}
module.exports.mergeSort = (array = [])=>{
    if(array.length === 1){
        return array
    }
   
    const mid = parseInt(array.length/2);
    const leftArray =   this.mergeSort(array.slice(0,mid));
    const rightArray =  this.mergeSort(array.slice(mid));
    return  this.merge(leftArray,rightArray)
}