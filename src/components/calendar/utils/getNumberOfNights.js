/**
 * Calculates the number of nights between two dates.
 * @param {Date} from - The start date.
 * @param {Date} to - The end date.
 * @returns {number|undefined} The number of nights or undefined if either from or to is falsy.
 */
export function getNumberOfNights(from, to) {
  if (from && to) {
    // finds the number of milliseconds between the dates.
    const timeDiff = to.getTime() - from.getTime();
    // converts the number of milliseconds between the two selected dates to whole days.
    const nightsCount = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    return nightsCount;
  }
  return 0;
}
