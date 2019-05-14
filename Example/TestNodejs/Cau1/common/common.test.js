const sortCommon = require('./sort');
const hashMapCommon =require('./hashMap');
test('[ { value: 1, length: \'1\' },\n' +
    '  { value: 3, length: \'2\' },\n' +
    '  { value: 3, length: \'3\' },\n' +
    '  { value: 1, length: \'5\' } ] => [ { value: 3, length: \'2\' },\n' +
    '  { value: 3, length: \'3\' },\n' +
    '  { value: 1, length: \'1\' },\n' +
    '  { value: 1, length: \'5\' } ]',()=>{
    expect(sortCommon.mergeSort(
        [
            { value: 2, length: '1' },
            { value: 3, length: '2' },
            { value: 3, length: '3' },
            { value: 1, length: '5' }
            ]
        ))
        .toEqual(
            [
                { value: 3, length: '2' },
                { value: 3, length: '3' },
                { value: 2, length: '1' },
                { value: 1, length: '5' }
            ]
        );
})

test('',()=>{
    expect(hashMapCommon.getHashMap(['a', 'ab', 'abc', 'cd','cd','cao','van','thien'])).toEqual(
        [ { value: 1, length: '1' },
            { value: 3, length: '2' },
            { value: 3, length: '3' },
            { value: 1, length: '5' }
            ]
    )
})
