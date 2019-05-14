const findLengthStringAppearMost = require('./index').findLengthStringAppearMost

test('test find the strings’ length that appear most in this array',()=>{
    expect(findLengthStringAppearMost(['string'])).toEqual([6])
    expect(findLengthStringAppearMost('strings,or,words,we,can,also'.split(','))).toEqual([2])
    expect(findLengthStringAppearMost('generate,random,strings,or,words,using,the'.split(','))).toEqual([5])
})