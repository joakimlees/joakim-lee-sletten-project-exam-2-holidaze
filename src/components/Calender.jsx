import Calendar from "react-calendar";
import { useState } from "react";
import { formatDate } from "../utils/formatDate";
import * as calendar from "./calendar/utils";

export function Calender({ bookings }) {
  const [dateFrom, setDateFrom] = useState();
  const [dateTo, setDateTo] = useState();

  const handleDateClick = date => {
    calendar.handleDateClick(date, isDateBooked, bookings, dateFrom, dateTo, setDateFrom, setDateTo);
  };

  /*

  const handleDateClick = date => {
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
  };
*/

  const maxDate = calendar.getMaxDate(12);

  /*
  function getMaxDate(numberOfMonths) {
    // Get the current date
    const currentDate = new Date();

    // Calculate the maxDate by adding 12 months to the current date
    const maxDate = new Date();
    maxDate.setMonth(currentDate.getMonth() + numberOfMonths);

    return maxDate;
  }



  const maxDate = getMaxDate(12);
  console.log(maxDate);
*/

  const isDateBooked = date => {
    const dateBooked = calendar.isDateBooked(bookings, date);
    return dateBooked;
  };

  /*
  function isDateBooked(date) {
    if (bookings) {
      return bookings.some(booking => {
        const bookingFromDate = new Date(booking.dateFrom);
        const bookingToDate = new Date(booking.dateTo);
        return date >= bookingFromDate && date <= bookingToDate;
      });
    }
  }
  */

  function getTileClassName({ date }) {
    if (isDateBooked(date)) {
      return "bg-secondary"; // Styling for booked dates
    }
    if (dateFrom && dateTo) {
      return date >= dateFrom && date <= dateTo ? "bg-primary text-white" : "";
    }
    if (dateFrom && date.getTime() === dateFrom.getTime()) {
      return "bg-primary text-white";
    }
    if (dateFrom && !dateTo && date >= dateFrom) {
      return "bg-light";
    }
    return "";
  }

  const dateOne = formatDate(dateFrom);
  const dateTwo = formatDate(dateTo);

  console.log(dateOne);
  console.log(dateTwo);
  return (
    <div className="">
      <Calendar className="font-paragraphs w-full h-full border p-10 mt-10 mb-10" minDate={new Date()} maxDate={maxDate} view="month" onClickDay={handleDateClick} tileClassName={({ date }) => getTileClassName({ date, dateFrom, dateTo })} prevLabel={<span className="px-2 pb-1 me-2 border font-bold">«</span>} nextLabel={<span className="px-2 pb-1 ms-2 border font-bold">»</span>} prev2Label="" next2Label="" />
    </div>
  );
}
