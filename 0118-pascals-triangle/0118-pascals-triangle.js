/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const startingDigit = 1;
    let output = [];
    for (let i = 0; i <= numRows; i++) {
        let j = i-1;
        output[j] = [startingDigit];
        let row = output[j];
        for (let k = 0; k < i; k++) {
            row[k] = (output[j-1][k-1] || 0) + (output[j-1][k] || 0);
        }
    }
    return output;
};