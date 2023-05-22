import { useFetch } from "../../../api/hooks/useFetch";
import { API_HOLIDAZE_VENUES_URL } from "../../../api/constants";
import { VenueCard } from "../../VenueCard";

export function Venues() {
  const { data, loading, error } = useFetch(API_HOLIDAZE_VENUES_URL);

  if (loading) {
    return <div className="loading-fetch">loading..................</div>;
  }

  if (error) {
    return <div className="error-fetch">Sorry.. something went wrong. try to reload the site or try again later</div>;
  }

  return (
    <main className="grow">
      <div className="mx-auto max-w-screen-2xl px-3 sm:px-5">
        <h1 className="font-headings font-bold text-xl text-center text-primary my-10">Venues</h1>
        <ul className="flex flex-wrap justify-center gap-5">
          {data.map(venue => (
            <VenueCard key={venue.id} venue={venue} />
          ))}
        </ul>
      </div>
    </main>
  );
}
