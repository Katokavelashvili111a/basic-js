const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
	if (date === undefined) return "Unable to determine the time of year!"

	if (
		Object.prototype.toString.call(date) !== "[object Date]" ||
		Object.getOwnPropertyNames(date).length > 0
	)
		throw new Error("Invalid date!")

	const seasons = {
		spring: [3, 4, 5],
		summer: [6, 7, 8],
		autumn: [9, 10, 11],
		winter: [1, 2, 12],
	}

	const month = date.getMonth() + 1

	for (const [season, months] of Object.entries(seasons))
		if (months.includes(month)) return season
}

module.exports = {
  getSeason
};
