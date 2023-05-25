/**
 * getting a date in x amount of months later then current date.
 * @param {number} numberOfMonths - The number of months to add to the current date.
 * @returns {Date} - The calculated max date.
 */
export function getMaxDate(numberOfMonths) {
  // Get the current date
  const currentDate = new Date();

  // Calculate the maxDate by adding numberOfMonths("number") months to the current date.
  const maxDate = new Date();
  maxDate.setMonth(currentDate.getMonth() + numberOfMonths);

  return maxDate;
}
