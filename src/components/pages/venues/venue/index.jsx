import { useParams } from "react-router-dom";
import { useFetch } from "../../../../api/hooks/useFetch";
import { API_HOLIDAZE_VENUE_URL, BOOKINGS_OWNER } from "../../../../api/constants";

export function Venue() {
  const { id } = useParams();
  const url = `${API_HOLIDAZE_VENUE_URL}/${id}/${BOOKINGS_OWNER}`;
  const { data, loading, error } = useFetch(url);
  const {
    name,
    media,
    price,
    created,
    description,
    maxGuests,
    location: { address, continent, country, city, zip },
    owner: { name: ownerName, email },
    bookings: { dateFrom, dateTo },
  } = data;

  if (loading) {
    return <div className="loading-fetch">loading..................</div>;
  }

  if (error) {
    return <div className="error-fetch">Sorry.. something went wrong. try to reload the site or try again later</div>;
  }

  return (
    <main className="grow">
      <div className="bg-secondary mx-auto max-w-screen-2xl px-3 sm:px-5">
        <h1>{name}</h1>
        <div>
          <img src={media} alt="" />
        </div>
      </div>
    </main>
  );
}
