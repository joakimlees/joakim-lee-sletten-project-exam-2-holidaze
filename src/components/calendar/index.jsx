import * as calendar from "./utils";
import Calendar from "react-calendar";
import { useState } from "react";
import { formatDate } from "../../utils/formatDate";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { json } from "react-router-dom";

export function BookingCalendar({ bookings, venueId, venueName, location, maxGuests, price }) {
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

  const nights = calendar.getNumberOfNights(dateFrom, dateTo);

  const total = nights * price;
  const totalPrice = total.toString();

  if (maxGuests) {
    const guestMax = maxGuests.toString();
    console.log(guestMax);
  }

  const { address, city, zip, country, continent } = location;

  const fromDate = formatDate(dateFrom);
  const toDate = formatDate(dateTo);

  const [profile] = useLocalStorage("profile");

  const { name, email, venueManager } = profile;

  const bookingDetails = JSON.stringify(dateFrom);

  return (
    <article className="max-w-4xl mx-auto">
      <h2 className="font-headings font-bold text-base text-center text-dark my-10">Booking information</h2>
      <article>
        <h3 className="font-headings font-bold text-base text-center text-primary my-10">Venue information</h3>
        <div className="flex justify-between font-paragraph">
          <div>
            <p>
              Venue name: <span className="font-semibold">{venueName}</span>
            </p>
            <p>
              Country: <span className="font-semibold">{country ? country : "no information"}</span>
            </p>
            <p>
              Continent: <span className="font-semibold">{continent ? continent : "no information"}</span>
            </p>
          </div>
          <div className="text-right">
            <p>
              City: <span className="font-semibold">{city ? city : "no information"}</span>
            </p>
            <p>
              Address: <span className="font-semibold">{address ? address : "no information"}</span>
            </p>
            <p>
              Zip: <span className="font-semibold">{zip ? zip : "no information"}</span>
            </p>
          </div>
        </div>
      </article>
      <article>
        <h3 className="font-headings font-bold text-center text-sm text-primary my-10">Select dates you wish to book</h3>
        <Calendar className="font-paragraphs w-full h-full border p-10 mt-10 mb-10" minDate={new Date()} maxDate={maxDate} view="month" onClickDay={handleDateClick} tileClassName={getTileClassName} prevLabel={<span className="px-2 pb-1 me-2 border font-bold">«</span>} nextLabel={<span className="px-2 pb-1 ms-2 border font-bold">»</span>} prev2Label="" next2Label="" />
      </article>
      <article className="font-paragraph text-sm">
        <h3 className="font-headings font-bold text-base text-center text-primary my-10">Booking details</h3>
        <div className="flex justify-between font-paragraph">
          <div>
            <p>
              Booking from:{" "}
              <time className="font-semibold" dateTime={fromDate}>
                {fromDate}
              </time>
            </p>
            <p>
              Booking to:{" "}
              <time className="font-semibold" dateTime={toDate}>
                {toDate}
              </time>
            </p>
          </div>
          <div className="text-right">
            <p>
              Price per night: <span className="font-semibold">{price}</span>
            </p>
            <p>
              Nights: <span className="font-semibold">{nights}</span>
            </p>
            <p className="text-xl">
              Total price: <span className="font-semibold">{totalPrice}</span>
            </p>
          </div>
        </div>
      </article>
    </article>
  );
}
