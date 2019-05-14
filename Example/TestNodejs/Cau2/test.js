const sumTopK = require('./index').sumTopK
test('test top k funtion',()=>{
    expect(sumTopK(3,[1,2])).toBe(0)
    expect(sumTopK(2,[ 22,
        11,
        35,
        17,
        22,
        36,
        5,
        13,
        21,])).toBe(35+36)
    expect(sumTopK(2,[
        21,
        32,
        35,
        31,
        14,
        32,
        33,
        31,
        16,
        23,
        18,])).toBe(35+33)
        expect(sumTopK(2,[
            38,
            9,
            33,
            1,
            39,
            12,
            4,
            11,
            10,    
        ])).toBe(39+38)
            
})