import { BookingCalendar } from "../../../../calendar";
import { useParams } from "react-router-dom";
import { useAuthFetch } from "../../../../../api/auth/useAuthFetch";
import { API_HOLIDAZE_URL, API_HOLIDAZE_VENUE_URL, BOOKINGS_OWNER } from "../../../../../api/constants";
import { useEffect, useState } from "react";
import { useFetch } from "../../../../../api/hooks/useFetch";

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
  const getVenueUrl = API_HOLIDAZE_VENUE_URL + "/" + venueId + BOOKINGS_OWNER;

  const { data: venueData, loading: venueLoading, error: venueError } = useFetch(getVenueUrl);

  const { bookings } = venueData;

  if (bookingLoading || venueLoading) {
    return <div className="loading-fetch">loading..................</div>;
  }

  if (bookingError || venueError) {
    return <div className="error-fetch">Sorry.. something went wrong. try to reload the site or try again later</div>;
  }

  return (
    <main className="grow">
      <div className="mx-auto max-w-screen-2xl px-3 sm:px-5">
        <h1 className="text-center mt-20 font-headings text-2xl text-dark">Edit booking</h1>
        <BookingCalendar bookings={bookings} />
      </div>
    </main>
  );
}
