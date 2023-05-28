import { BookingCalendar } from "../../../../calendar";
import { useParams } from "react-router-dom";
import { useAuthFetch } from "../../../../../api/auth/useAuthFetch";
import { API_HOLIDAZE_URL } from "../../../../../api/constants";
import { useEffect, useState } from "react";

export function EditUserBookings() {
  const { id } = useParams();
  const putUrl = `${API_HOLIDAZE_URL}/bookings/${id}`;
  const getUrl = putUrl + "?_venue=true";

  const [bookingData, setBookingData] = useState({});

  const {
    data: bookingDataResponse,
    loading: bookingLoading,
    error: bookingError,
  } = useAuthFetch(getUrl, {
    method: "get",
  });

  useEffect(() => {
    if (!bookingLoading && !bookingError && bookingDataResponse && bookingDataResponse !== undefined && bookingDataResponse !== null) {
      setBookingData(bookingDataResponse);
    }
  }, [bookingDataResponse, bookingLoading, bookingError]);

  const { venue } = bookingData || {};
  const { id: venueId } = venue || {};

  if (bookingLoading) {
    return <div className="loading-fetch">loading..................</div>;
  }

  if (bookingError) {
    return <div className="error-fetch">Sorry.. something went wrong. try to reload the site or try again later</div>;
  }

  return (
    <main className="grow">
      <div className="mx-auto max-w-screen-2xl px-3 sm:px-5">
        <h1 className="text-center mt-20 font-headings text-2xl text-dark">Edit booking</h1>
        <BookingCalendar />
      </div>
    </main>
  );
}
