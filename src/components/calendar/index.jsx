import * as calendar from "./utils";
import Calendar from "react-calendar";
import { useEffect, useState } from "react";
import { formatDate } from "../../utils/formatDate";
import { API_HOLIDAZE_URL } from "../../api/constants";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useAuthPost } from "../../api/auth/useAuthPost";

export function BookingCalendar({ calendarTitle, bookings, venueId, maxGuests, price, fetchMethod, fetchPath, textCTA }) {
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

  useEffect(() => {
    function activateCTA() {
      if (dateFrom && dateTo && guestValue > 0 && total > 0) {
        setIsActive(true);
      } else setIsActive(false);
    }

    activateCTA();
  }, [total, guestValue, dateFrom, dateTo]);

  function createData(from, to, guest, id) {
    if (venueId) {
      const postData = {
        "dateFrom": from,
        "dateTo": to,
        "guests": guest,
        "venueId": id,
      };
      return postData;
    } else {
      const putData = {
        "dateFrom": from,
        "dateTo": to,
        "guests": guest,
      };
      return putData;
    }
  }

  const bookingData = createData(dateFrom, dateTo, guestValue, venueId);

  const { data, loading, error, postWithAuth } = useAuthPost();

  const handleCompleteBooking = async () => {
    const url = API_HOLIDAZE_URL + fetchPath;
    const method = fetchMethod;

    await postWithAuth(url, {
      method,
      body: JSON.stringify(bookingData),
    });
  };

  return (
    <article className="max-w-4xl mx-auto">
      <h2 className="font-headings font-bold text-base text-center text-dark my-10">Booking information</h2>
      <article className="font-paragraph text-sm">
        <h3 className="font-headings font-bold text-sm text-center text-primary my-10">{calendarTitle}</h3>
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
        {loading ? <div className="font-headings text-center text-base text-dark mb-2 mt-8">Loading...</div> : ""}
        {error ? (
          <div>
            <h4 className="font-headings font-bold text-xl text-center text-secondary mt-16">Sorry... something went wrong </h4>
            <p className="font-paragraph text-base text-center text-secondary">We where not able to complete your booking. Please try again or contact our support.</p>
          </div>
        ) : (
          ""
        )}
        {data && !error && !loading ? (
          <div>
            <h4 className="font-headings font-bold text-xl text-center text-primary mt-16">Your booking is completed</h4>
            <p className="font-paragraph text-base text-center text-primary">You can manage and view your bookings in your profile</p>
          </div>
        ) : (
          ""
        )}
        <div className="flex mb-20 mt-10">
          <button className={isActive ? activeBookingCTA : inActiveBookingCTA} disabled={isActive ? false : true} onClick={handleCompleteBooking}>
            {textCTA}
          </button>
        </div>
      </article>
    </article>
  );
}
