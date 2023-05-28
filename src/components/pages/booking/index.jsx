import { Link, useParams } from "react-router-dom";
import { API_HOLIDAZE_VENUE_URL, BOOKINGS_OWNER } from "../../../api/constants";
import { useFetch } from "../../../api/hooks/useFetch";
import { BookingCalendar } from "../../calendar";

export function Booking() {
  const { id } = useParams();
  const url = `${API_HOLIDAZE_VENUE_URL}/${id}${BOOKINGS_OWNER}`;
  const { data, loading, error } = useFetch(url);
  const fetchPath = "/bookings";

  const { name, price, maxGuests, location, bookings } = data || {};

  const calendarTitle = "Calendar with available booking dates. Choose dates to book your stay.";

  const textCTA = "Complete booking";

  if (loading) {
    return <div className="loading-fetch">loading..................</div>;
  }

  if (error) {
    return <div className="error-fetch">Sorry.. something went wrong. try to reload the site or try again later</div>;
  }

  return (
    <main className="grow">
      <div className="mx-auto max-w-screen-2xl px-3 sm:px-5">
        <h1 className="font-headings font-bold text-xl text-center text-primary my-10">Booking for {name}</h1>
        <div className="my-14 font-buttons text-primary max-w-4xl mx-auto">
          <Link to={`/venues/${id}`}>&lt; &lt; Back to Venue</Link>
        </div>
        <BookingCalendar calendarTitle={calendarTitle} bookings={bookings} venueLocation={location} venueId={id} maxGuests={maxGuests} price={price} venueName={name} fetchMethod={"post"} fetchPath={fetchPath} textCTA={textCTA} />
      </div>
    </main>
  );
}
