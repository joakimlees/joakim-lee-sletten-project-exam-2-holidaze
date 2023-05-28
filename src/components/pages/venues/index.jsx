import { useFetch } from "../../../api/hooks/useFetch";
import { API_HOLIDAZE_VENUES_URL } from "../../../api/constants";
import { VenueCard } from "../../VenueCard";
import useSearch from "../../../hooks/useSearch";

export function Venues() {
  const { data, loading, error } = useFetch(API_HOLIDAZE_VENUES_URL);

  const { onSearchChange, setDataToSearch } = useSearch();

  const searchedData = setDataToSearch(data);

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
        <form className="bg-light rounded-lg py-5 px-5">
          <fieldset className="flex flex-col text-center">
            <label className="rounded-lg font-headings font-semibold" htmlFor="search">
              Search for Venue
            </label>
            <input className="rounded-lg" type="text" name="search" placeholder="Search here..." onChange={onSearchChange} />
          </fieldset>
        </form>
        {searchedData ? (
          <ul className="flex flex-wrap justify-center gap-5">
            {data.map(venue => (
              <VenueCard key={venue.id} venue={venue} />
            ))}
          </ul>
        ) : (
          <p>No venues match your current search</p>
        )}
      </div>
    </main>
  );
}
