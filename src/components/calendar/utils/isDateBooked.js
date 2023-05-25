/**
 * Checks if a given date is booked based on the bookings in an array of bookings objects.
 * @param {Array} bookings - An array of booking objects.
 * @param {Date} date - The date to check for if that date is booked.
 * @returns {boolean} - returns true if the date is booked and false if its not.
 */
export function isDateBooked(bookings, date) {
  //Checks if bookings exist.
  if (bookings) {
    // checking if at least one booking matches the date, using the some method.
    // Using some, selecting dateFrom and dateTo properties in each of the objects in the array.
    return bookings.some(booking => {
      const bookingFromDate = new Date(booking.dateFrom);
      const bookingToDate = new Date(booking.dateTo);
      //if the date is greater or equal to the from date and less or equal to the to date, return true, if not it returns false.
      return date >= bookingFromDate && date <= bookingToDate;
    });
  }
}
