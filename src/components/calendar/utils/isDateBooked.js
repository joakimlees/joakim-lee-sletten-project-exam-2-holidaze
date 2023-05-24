export function isDateBooked(bookings, date) {
  if (bookings) {
    return bookings.some(booking => {
      const bookingFromDate = new Date(booking.dateFrom);
      const bookingToDate = new Date(booking.dateTo);
      return date >= bookingFromDate && date <= bookingToDate;
    });
  }
}
