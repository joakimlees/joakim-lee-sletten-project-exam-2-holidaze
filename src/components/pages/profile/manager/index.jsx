import { useAuthFetch } from "../../../../api/auth/useAuthFetch";
import { API_HOLIDAZE_URL } from "../../../../api/constants";
import { useLocalStorage } from "../../../../hooks/useLocalStorage";
import { ManagerVenueCard } from "../../../ManagerVenueCards";
import { Link } from "react-router-dom";

export function ManagerVenues() {
  const [profile] = useLocalStorage("profile");

  const method = "get";

  const name = profile.name;

  const url = `${API_HOLIDAZE_URL}/profiles/${name}/venues`;

  const { data, loading, error } = useAuthFetch(url, {
    method,
  });

  console.log(data);

  if (!data) {
    return <div className="loading-fetch">loading..................</div>;
  }

  if (loading) {
    return <div className="loading-fetch">loading..................</div>;
  }

  if (error) {
    return <div className="error-fetch">Sorry.. something went wrong. try to reload the site or try again later</div>;
  }

  return (
    <main className="grow">
      <div className="mx-auto max-w-screen-2xl px-3 sm:px-5">
        <h1 className="font-headings font-bold text-xl text-center text-primary my-10">Venue Manager</h1>
        <div className="flex justify-center mt-6 py-2 bg-primary text-white rounded-lg max-w-2xl mx-auto my-10">
          <Link to="/profiles/manager/create-venue" className="w-full h-full text-center">
            Create new venue
          </Link>
        </div>
        <ul className="flex flex-wrap justify-center mx-auto gap-5 max-w-2xl">
          {data.map(venue => (
            <ManagerVenueCard key={venue.id} venue={venue} />
          ))}
        </ul>
      </div>
    </main>
  );
}
