/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
function convert(s, numRows) {
    const doubleArr = [];
    let counter = 1;
    let innerCounter = 0;
    let result = '';
    for (let i = 0; i < numRows; i += 1) {
        doubleArr.push([]);
    }
    s.split('').forEach((value, index) => {
        if (index < counter * numRows + (counter - 1)) {
            innerCounter = innerCounter === numRows ? 0 : innerCounter;
            doubleArr[innerCounter].push(value);
            innerCounter += innerCounter;
        } else if (index === counter * numRows + (counter - 1)) {
            for (let i = 0; i < numRows; i += 1) {
                doubleArr[index - counter * numRows].push(value);
            }
            counter += counter;
        }
    });
    doubleArr.forEach((value) => {
        result += value.join('');
    });
    return result;
}

console.log(convert('ABCD', 1));
