const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let arrOfCharts = str.split('')
  let result = [];
  let count = 0;
  let char = '';

  for (let i = 0; i < arrOfCharts.length; i++) {
    if (arrOfCharts[i] !== arrOfCharts[i + 1]) {
      result.push(count + 1);
      char = arrOfCharts[i]
      result.push(char);
      count = '';
    } else {
      count++;
    } 
  }
  return result.filter(item => item != 1).join('')
}

module.exports = {
  encodeLine
};
