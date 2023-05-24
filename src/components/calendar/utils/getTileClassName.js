/**
 * Returns the CSS class name for a specific calendar tile/cell.
 *
 * @param {Object} options/calendar - The calendar object.
 * @param {Date} options.date - The date of the tile, in the calendar i.e. the cell.
 * @param {Function} isDateBooked - A function to check if a date is booked.
 * @param {Date} dateFrom - The selected "from" date.
 * @param {Date} dateTo - The selected "to" date.
 * @returns {string} The CSS class name for the tile in the calendar i.e the cell.
 */
export function getTileClassName({ date }, isDateBooked, dateFrom, dateTo) {
  // checks if dates is booked, using the isDateBooked function.
  if (isDateBooked(date)) {
    //sets class names for booked dates.
    return "bg-secondary text-white";
  }
  if (dateFrom && dateTo) {
    //adds classes if date is greater than or equal to the From date AND date is less or equal to the to date. otherwise it returns empty string.
    return date >= dateFrom && date <= dateTo ? "bg-primary text-white" : "";
  }
  // If dateFrom is selected and the date is equal to dateFrom, checked by seeing if the timestamps of date and dateFrom are equal.
  if (dateFrom && date.getTime() === dateFrom.getTime()) {
    //if the condition check is true, adds the classes
    return "bg-primary text-white";
  }
  // If checks if dateFrom is selected, dateTo is not selected, and the date is equal to or after dateFrom.
  if (dateFrom && !dateTo && date >= dateFrom) {
    //if the condition check is true, adds the class
    return "bg-light";
  }
  //return an empty string if none of the conditions are met
  return "";
}
