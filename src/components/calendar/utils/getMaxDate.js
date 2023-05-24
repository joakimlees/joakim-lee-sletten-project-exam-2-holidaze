export function getMaxDate(numberOfMonths) {
  // Get the current date
  const currentDate = new Date();

  // Calculate the maxDate by adding 12 months to the current date
  const maxDate = new Date();
  maxDate.setMonth(currentDate.getMonth() + numberOfMonths);

  return maxDate;
}
