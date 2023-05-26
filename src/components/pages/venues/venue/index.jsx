import { useParams, Link } from "react-router-dom";
import { useFetch } from "../../../../api/hooks/useFetch";
import { API_HOLIDAZE_VENUE_URL, BOOKINGS_OWNER } from "../../../../api/constants";
import { BookingCalendar } from "../../../calendar";

export function Venue() {
  const { id } = useParams();
  const url = `${API_HOLIDAZE_VENUE_URL}/${id}${BOOKINGS_OWNER}`;
  const { data, loading, error } = useFetch(url);

  const { name, media, price, created, description, maxGuests, location: { address, continent, country, city, zip } = {}, owner: { name: ownerName, email } = {}, bookings, bookings: { dateFrom, dateTo } = {}, meta: { wifi, parking, pets, breakfast } = {} } = data || {};

  if (loading) {
    return <div className="loading-fetch">loading..................</div>;
  }

  if (error) {
    return <div className="error-fetch">Sorry.. something went wrong. try to reload the site or try again later</div>;
  }

  console.log("mounted");

  return (
    <main className="grow">
      <div className="mx-auto max-w-screen-2xl px-3 sm:px-5">
        <div className="mx-auto px-10 max-w-3xl">
          <h1>{name}</h1>
          <div className="w-full w-full h-80 border-dark border border rounded-lg">
            <img src={media} alt="" className="h-full w-full object-cover rounded-lg" />
          </div>
          <dl className="my-8">
            <div className="flex justify-between mb-8 bg-light p-6 rounded-lg">
              <div>
                <dt className="text-dark font-bold">Price</dt>
                <dd>{price}</dd>
              </div>
              <div className="text-right ms-8">
                <dt className="text-dark font-bold">Owner</dt>
                <dd className="break-all">{ownerName}</dd>
                <dd className="break-all">{email}</dd>
              </div>
            </div>
            <div className="flex mb-8">
              <Link to={`/booking/${id}`} className="text-center text-light bg-dark rounded-lg py-4 w-full">
                Go to booking
              </Link>
            </div>
            <div className="flex flex-col gap-6 mb-4 bg-light p-6 rounded-lg">
              <div>
                <dt className="text-dark font-bold">Description:</dt>
                <dd className="break-all">{description}</dd>
              </div>
              <div className="flex justify-between bg-light rounded-lg">
                <div>
                  <dt className="text-dark font-bold">Country</dt>
                  <dd>{country}</dd>
                </div>
                <div className="text-right">
                  <dt className="text-dark font-bold">Location</dt>
                  <dd>{address}</dd>
                  <dd>{city}</dd>
                </div>
              </div>
              <div>
                <dt className="text-dark font-bold">Guest capacity</dt>
                <dd>{maxGuests}</dd>
              </div>
              <div>
                <dt className="text-dark font-bold">Facilities</dt>
                {wifi ? (
                  <dd className="font-semibold text-primary ">
                    <span className="text-dark">Wifi:</span> Yes
                  </dd>
                ) : (
                  <dd className="font-semibold text-secondary ">
                    <span className="text-dark">Wifi:</span> No
                  </dd>
                )}
                {parking ? (
                  <dd className="font-semibold text-primary ">
                    <span className="text-dark">Parking:</span> Yes
                  </dd>
                ) : (
                  <dd className="font-semibold text-secondary ">
                    <span className="text-dark">Parking:</span> No
                  </dd>
                )}
                {pets ? (
                  <dd className="font-semibold text-primary ">
                    <span className="text-dark">Pets:</span> Yes
                  </dd>
                ) : (
                  <dd className="font-semibold text-secondary ">
                    <span className="text-dark">Pets:</span> No
                  </dd>
                )}
                {breakfast ? (
                  <dd className="font-semibold text-primary ">
                    <span className="text-dark">Breakfast:</span> Yes
                  </dd>
                ) : (
                  <dd className="font-semibold text-secondary ">
                    <span className="text-dark">Breakfast:</span> No
                  </dd>
                )}
              </div>
              <div>
                <dt className="text-dark font-bold">Description:</dt>
                <dd className="break-all">{description}</dd>
              </div>
            </div>
          </dl>
        </div>
      </div>
    </main>
  );
}
