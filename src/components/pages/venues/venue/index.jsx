import { useParams } from "react-router-dom";
import { useFetch } from "../../../../api/hooks/useFetch";
import { API_HOLIDAZE_VENUE_URL, BOOKINGS_OWNER } from "../../../../api/constants";

export function Venue() {
  const { id } = useParams();
  const url = `${API_HOLIDAZE_VENUE_URL}/${id}`;
  const { data, loading, error } = useFetch(url);

  console.log(url);

  const { name, media, price, created, description, maxGuests, location: { address, continent, country, city, zip } = {}, owner: { name: ownerName, email } = {}, bookings: { dateFrom, dateTo } = {} } = data || {};

  if (loading) {
    return <div className="loading-fetch">loading..................</div>;
  }

  if (error) {
    return <div className="error-fetch">Sorry.. something went wrong. try to reload the site or try again later</div>;
  }

  return (
    <main className="grow">
      <div className="mx-auto max-w-screen-2xl px-3 sm:px-5">
        <div className="mx-auto px-10 max-w-3xl bg-secondary">
          <h1>{name}</h1>
          <div className="w-full w-full h-80 border-dark border-2">
            <img src={media} alt="" className="h-full w-full object-cover" />
          </div>
          <dl className="my-8">
            <div className="flex justify-between mb-4">
              <div>
                <dt className="text-dark font-bold">Price</dt>
                <dd>{price + ",-"}</dd>
              </div>
              <div className="text-right ms-8">
                <dt className="text-dark font-bold">Country</dt>
                <dd>{country}</dd>
              </div>
            </div>
            <div className="flex justify-between">
              <div>
                <dt className="text-dark font-bold">Guest capacity</dt>
                <dd>{maxGuests}</dd>
              </div>
              <div className="text-right ms-8">
                <dt className="text-dark font-bold">Owner</dt>
                <dd className="break-all">{ownerName}</dd>
                <dd className="break-all">{email}</dd>
              </div>
            </div>
          </dl>
        </div>
      </div>
    </main>
  );
}
