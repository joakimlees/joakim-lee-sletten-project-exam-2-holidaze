import { useState, useEffect } from "react";
import { API_HOLIDAZE_URL, VENUES } from "../../api/constants";
import { VenueCard } from "../VenueCard";

export function Home() {
  const url = API_HOLIDAZE_URL + VENUES + "?_owner=true&_bookings=true";

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setLoading(true);
        setError(false);
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
        return data;
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, [url]);

  if (loading) {
    return <div className="loading-fetch">loading..................</div>;
  }

  if (error) {
    return <div className="error-fetch">Sorry.. something went wrong. try to reload the site or try again later</div>;
  }

  return (
    <main className="grow">
      <div className="mx-auto max-w-screen-2xl px-3 sm:px-5">
        <h1>Home page</h1>
        <ul className="border border-dark border-2">
          {data.map(venue => (
            <VenueCard key={venue.id} venue={venue} />
          ))}
        </ul>
      </div>
    </main>
  );
}
