/*function getEarliestDate(bookings) {
  const currentDate = new Date();

  const unavailableDates = bookings.reduce((unavailable, booking) => {
    const fromDate = new Date(booking.dateFrom);
    const toDate = new Date(booking.dateTo);
    const datesInRange = [];

    for (let date = fromDate; date <= toDate; date.setDate(date.getDate() + 1)) {
      datesInRange.push(new Date(date));
    }

    return [...unavailable, ...datesInRange];
  }, []);

  const sortedUnavailableDates = unavailableDates.sort((a, b) => a - b);

  for (let i = 0; i < sortedUnavailableDates.length; i++) {
    if (sortedUnavailableDates[i] > currentDate) {
      return currentDate;
    } else if (i + 1 < sortedUnavailableDates.length && currentDate < sortedUnavailableDates[i + 1]) {
      return sortedUnavailableDates[i];
    }
  }

  return sortedUnavailableDates[sortedUnavailableDates.length - 1];
}

const earliestDate = getEarliestDate(data[0].bookings);
console.log("this: date: " + earliestDate);

*/
