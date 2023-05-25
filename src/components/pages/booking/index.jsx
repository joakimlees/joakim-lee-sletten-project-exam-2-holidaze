import { Link, useParams } from "react-router-dom";
import { API_HOLIDAZE_VENUE_URL, BOOKINGS_OWNER } from "../../../api/constants";
import { useFetch } from "../../../api/hooks/useFetch";
import { BookingCalendar } from "../../calendar";

export function Booking() {
  const { id } = useParams();
  const url = `${API_HOLIDAZE_VENUE_URL}/${id}${BOOKINGS_OWNER}`;
  const { data, loading, error } = useFetch(url);

  const { name, media, price, created, description, maxGuests, location: { address, continent, country, city, zip } = {}, owner: { name: ownerName, email } = {}, bookings, bookings: { dateFrom, dateTo } = {}, meta: { wifi, parking, pets, breakfast } = {} } = data || {};

  return (
    <main className="grow">
      <div className="mx-auto max-w-screen-2xl px-3 sm:px-5">
        <h1 className="font-headings font-bold text-xl text-center text-primary my-10">Booking for {name}</h1>
        <BookingCalendar bookings={bookings} />
        <div>
          <Link to={`/venues/${id}`}>Back to Venue</Link>
        </div>
      </div>
    </main>
  );
}
