const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let result = {};
  let dataArray = domains.map(item => item.split('.').map(el => '.' + el).reverse())
  let totalArray = [].concat.apply([], dataArray.map(item => item.map((v,i) => item.slice(0,i+1).join(''))));
  totalArray.forEach((item) => result[item] = !result[item] ? 1 : result[item]+1)
  return result;
}

module.exports = {
  getDNSStats
};
