export function handleDateClick(date, isDateBooked, bookings, dateFrom, dateTo, setDateFrom, setDateTo) {
  if (isDateBooked(date)) {
    return; // Do not allow selecting booked dates
  }

  if (!dateFrom && !dateTo) {
    // No dates selected yet, set "from" date
    setDateFrom(date);
  } else if (dateFrom && !dateTo && date >= dateFrom) {
    // "from" date is set, but "to" date is not set, and clicked date is later than or equal to "from" date, set "to" date
    const selectedRangeStart = new Date(Math.min(dateFrom, date));
    const selectedRangeEnd = new Date(Math.max(dateFrom, date));
    const isOverlap = bookings.some(booking => selectedRangeStart <= new Date(booking.dateTo) && selectedRangeEnd >= new Date(booking.dateFrom));
    if (!isOverlap) {
      setDateTo(date);
    }
  } else {
    // Reset both "from" and "to" dates and set new "from" date
    setDateFrom(date);
    setDateTo(null);
  }
}
