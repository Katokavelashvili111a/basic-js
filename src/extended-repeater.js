const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const repeatTimes = options.repeatTimes || 1
  const separator = options.separator || '+'
  const addition = String(options.addition !== undefined ? options.addition : '')
  const additionRepeatTimes = options.additionRepeatTimes || 1
  const additionSeparator = options.additionSeparator || '|'

  let sumAddition = []
  for (let i = 0; i < additionRepeatTimes; i++) {
    sumAddition.push(addition)
  }
  let resultAddition = sumAddition.join(additionSeparator)

  let resultString = [];
  for (let i = 0; i < repeatTimes; i++) {
    resultString.push(`${str}${resultAddition}`)
  }

  return resultString.join(separator)
}

module.exports = {
  repeater
};
