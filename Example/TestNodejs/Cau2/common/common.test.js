const common = require('./sort')
test('[6,4,2],[8,7,1] [8,7,6,4,2,1]',()=>{
    expect(common.merge([6,4,2],[8,7,1])).toEqual([8,7,6,4,2,1]);
})
test('[38, 27, 43, 3, 9, 82, 10] => [82,43,38,27,10,9,3]',()=>{
    expect(common.mergeSort([38, 27, 43, 3, 9, 82, 10])).toEqual([82,43,38,27,10,9,3]);
})