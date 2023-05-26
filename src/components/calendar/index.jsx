import * as calendar from "./utils";
import Calendar from "react-calendar";
import { useState } from "react";
import { formatDate } from "../../utils/formatDate";
import { useLocalStorage } from "../../hooks/useLocalStorage";

export function BookingCalendar({ bookings, venueId, maxGuests }) {
  const [dateFrom, setDateFrom] = useState();
  const [dateTo, setDateTo] = useState();

  const handleDateClick = date => {
    calendar.handleDateClick(date, isDateBooked, bookings, dateFrom, dateTo, setDateFrom, setDateTo);
  };

  const maxDate = calendar.getMaxDate(12);

  const isDateBooked = date => {
    const dateBooked = calendar.isDateBooked(bookings, date);
    return dateBooked;
  };

  const getTileClassName = date => {
    const tileClassName = calendar.getTileClassName(date, isDateBooked, dateFrom, dateTo);
    return tileClassName;
  };

  const fromDate = formatDate(dateFrom);
  const toDate = formatDate(dateTo);

  const [profile] = useLocalStorage("profile");

  const { name, email, venueManager } = profile;

  console.log(venueManager);

  const bookingDetails = JSON.stringify(dateFrom);

  return (
    <article className="max-w-4xl mx-auto">
      <h2 className="font-headings font-bold text-base text-center text-primary my-10">Select the dates you wish to book</h2>
      <Calendar className="font-paragraphs w-full h-full border p-10 mt-10 mb-10" minDate={new Date()} maxDate={maxDate} view="month" onClickDay={handleDateClick} tileClassName={getTileClassName} prevLabel={<span className="px-2 pb-1 me-2 border font-bold">«</span>} nextLabel={<span className="px-2 pb-1 ms-2 border font-bold">»</span>} prev2Label="" next2Label="" />
      <article className="font-paragraph text-sm">
        <h2 className="font-headings font-bold text-base text-center text-primary my-10">Booking information</h2>
        <div>
          <p>
            Date from:{" "}
            <time className="font-semibold" dateTime={fromDate}>
              {fromDate}
            </time>
          </p>
          <p>
            Date to:{" "}
            <time className="font-semibold" dateTime={toDate}>
              {toDate}
            </time>
          </p>
        </div>
      </article>
    </article>
  );
}
