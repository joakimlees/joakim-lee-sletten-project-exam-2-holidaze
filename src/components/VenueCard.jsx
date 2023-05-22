import { Link } from "react-router-dom";

export function VenueCard({
  venue: {
    name: venueName,
    id,
    created,
    description,
    media,
    price,
    maxGuests,
    location: { address, continent, country, city, zip },
    owner: { name: ownerName, email },
    bookings: { dateFrom, dateTo },
  },
}) {
  return (
    <li className="flex flex-col justify-between bg-light shadow-lg py-4 px-4 rounded-lg max-w-xs">
      <div className="w-full w-full h-80 border-dark border-2">
        <img src={media[0]} alt="" className="h-full w-full object-cover" />
      </div>
      <article className="font-paragraph text-sm">
        <h3 className="font-headings text-primary font-bold text-base">{venueName}</h3>
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
      </article>
      <div className="flex">
        <Link to={`/venue/${id}`} className="text-center text-light bg-dark rounded-lg py-2 w-full">
          View venue
        </Link>
      </div>
    </li>
  );
}
