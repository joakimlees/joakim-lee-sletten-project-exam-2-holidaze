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
  } else if (dateFrom && !dateTo && date > dateFrom) {
    //  "from" date is set, but "to" date is not set, and clicked date is later than or equal to "from" date, set "to" date
    const selectedRangeStart = new Date(Math.min(dateFrom, date)); // Calculate the minimum date between dateFrom and the clicked date
    const selectedRangeEnd = new Date(Math.max(dateFrom, date)); // Calculate the maximum date between dateFrom and the clicked date

    // Check for overlap by iterating over the bookings array and comparing the selected range with each booking
    // The arrow function inside the some() method is used to perform the comparison

    const isOverlap = bookings.some(booking => selectedRangeStart <= new Date(booking.dateTo) && selectedRangeEnd >= new Date(booking.dateFrom));

    // If there is no overlap, set the clicked date as the "to" date
    if (!isOverlap) {
      setDateTo(date);
    }
  } else {
    // Reset both "from" and "to" dates and set new "from" date
    setDateFrom(date);
    setDateTo(null);
  }
}
