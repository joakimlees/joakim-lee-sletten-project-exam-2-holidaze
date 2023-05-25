/**
 * Handles the click event on a date tile/cell in the calendar.
 *
 * @param {Date} date - The clicked date.
 * @param {Function} isDateBooked - A function that checks if a date is booked.
 * @param {Array} bookings - An array of objects, which contains properties dateFrom and dateTo, which indicate the booked from and booked to dates.
 * @param {Date} dateFrom - The selected "from" date.
 * @param {Date} dateTo - The selected "to" date.
 * @param {Function} setDateFrom - A function to set the "dateFrom" state/date/variable.
 * @param {Function} setDateTo - A function to set the "dateTo" state/date/variable.
 */
export function handleDateClick(date, isDateBooked, bookings, dateFrom, dateTo, setDateFrom, setDateTo) {
  // checks if the date selected is booked, if true, return (makes so one cant select booked dates).
  if (isDateBooked(date)) {
    return;
  }

  // if no dates is selected, set the dateFrom to be the selected date.
  if (!dateFrom && !dateTo) {
    setDateFrom(date);
    //if a dateFrom is selected, but not a dateTo and the date selected is greater then the dateFrom.
  }

  if (dateFrom && !dateTo && date > dateFrom) {
    // finding
    const selectedRangeStart = new Date(Math.min(dateFrom, date)); // returns the smallest date between dateFrom and the clicked date.
    const selectedRangeEnd = new Date(Math.max(dateFrom, date)); // returns the largest date between dateFrom and the clicked date.

    // function which return a boolean true or false.
    // checking if at least one of the elements, in this case booking, meats the provided condition.
    // if selectedRangeStart is less or equal to dateTo- AND selectedRangedEnd is greater or equal to dateFrom property in one of the objects in the booking array.
    const isOverlap = bookings.some(booking => selectedRangeStart <= new Date(booking.dateTo) && selectedRangeEnd >= new Date(booking.dateFrom));

    if (isOverlap) {
      setDateFrom(date);
    }

    // if date selected dates don't overlap existing bookings in the booking array, set dateTo to the selected date.
    if (!isOverlap) {
      setDateTo(date);
    }
    // if the both from and to date is selected and the date clicked is greater then dateFrom but less or equal to dateTo, set date to to date (new date to).
  } else if (dateFrom && dateTo && date <= dateTo && date > dateFrom) {
    setDateTo(date);
  } else {
    // Reset both from and to state and set new fromDate state to the clicked date.
    setDateFrom(date);
    setDateTo(null);
  }
}
