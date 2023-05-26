import * as calendar from "./utils";
import Calendar from "react-calendar";
import { useEffect, useState } from "react";
import { formatDate } from "../../utils/formatDate";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { Link } from "react-router-dom";
import { API_HOLIDAZE_URL } from "../../api/constants";
import { useAuthFetch } from "../../api/auth/useAuthFetch";

export function BookingCalendar({ bookings, venueId, venueName, maxGuests, price }) {
  const [dateFrom, setDateFrom] = useState();
  const [dateTo, setDateTo] = useState();
  const [guestValue, setGuestValue] = useState(0);
  const [isActive, setIsActive] = useState(false);

  console.log(guestValue);
  const handleDateClick = date => {
    calendar.handleDateClick(date, isDateBooked, bookings, dateFrom, dateTo, setDateFrom, setDateTo);
  };

  const handleMaxGuestValueChange = event => {
    calendar.handleInputChange(event, maxGuests, setGuestValue);
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

  const fromDate = formatDate(dateFrom);
  const toDate = formatDate(dateTo);

  const [profile] = useLocalStorage("profile");

  const { name: username, email: userEmail } = profile;

  const activeBookingCTA = "font-buttons text-base max-w-xl text-center text-light bg-primary rounded-lg py-4 w-full mx-auto";
  const inActiveBookingCTA = "font-buttons text-base max-w-xl text-center text-light bg-primary rounded-lg py-4 w-full mx-auto opacity-50";
  const completeBookingUrl = "/booking/success";

  useEffect(() => {
    function activateCTA() {
      if (dateFrom && dateTo && guestValue > 0 && total > 0) {
        setIsActive(true);
      } else setIsActive(false);
    }

    activateCTA();
  }, [total, guestValue]);

  const bookingData = {
    "dateFrom": dateFrom,
    "dateTo": dateTo,
    "guests": guestValue,
    "venueId": venueId,
  };

  const method = "post";

  const { data, loading, error, fetchWithAuth } = useAuthFetch();

  const handleCompleteBooking = async () => {
    const url = API_HOLIDAZE_URL + "/bookings";

    await fetchWithAuth(url, {
      method,
      body: JSON.stringify(bookingData),
    });
  };

  return (
    <article className="max-w-4xl mx-auto">
      <h2 className="font-headings font-bold text-base text-center text-dark my-10">Booking information</h2>
      <article className="font-paragraph text-sm">
        <h3 className="font-headings font-bold text-sm text-center text-primary my-10">Choose when you want to book the venue</h3>
        <Calendar className="font-paragraphs w-full h-full border p-10 mt-10 mb-10" minDate={new Date()} maxDate={maxDate} view="month" onClickDay={handleDateClick} tileClassName={getTileClassName} prevLabel={<span className="px-2 pb-1 me-2 border font-bold">«</span>} nextLabel={<span className="px-2 pb-1 ms-2 border font-bold">»</span>} prev2Label="" next2Label="" />
        <h3 className="font-headings font-bold text-sm text-dark mb-4">Booking details</h3>
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
          </div>
        </div>
        <h3 className="font-headings font-bold text-sm text-dark mb-2 mt-8">Your contact information</h3>
        <div className="flex justify-between font-paragraph">
          <div>
            <p>
              Username: <span className="font-semibold">{username}</span>
            </p>
            <p>
              Email: <span className="font-semibold">{userEmail}</span>
            </p>
          </div>
          <div className="text-right">
            <p>
              Number of guests: <input className="border border-dark w-14 appearance-none" type="number" value={guestValue} onChange={handleMaxGuestValueChange} />
            </p>
            <p className="text-base">
              Total price: <span className="font-semibold">{totalPrice}</span>
            </p>
          </div>
        </div>
        <div className="flex my-20">
          <button className={isActive ? activeBookingCTA : inActiveBookingCTA} disabled={isActive ? false : true} onClick={handleCompleteBooking}>
            book now
          </button>
        </div>
      </article>
    </article>
  );
}
