//getting a date in x amount of months later then current date.
export function getMaxDate(numberOfMonths) {
  // Get the current date
  const currentDate = new Date();

  // Calculate the maxDate by adding numberOfMonths("number") months to the current date
  const maxDate = new Date();
  maxDate.setMonth(currentDate.getMonth() + numberOfMonths);

  return maxDate;
}
