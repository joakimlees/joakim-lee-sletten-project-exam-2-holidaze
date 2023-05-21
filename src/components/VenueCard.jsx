import { formatDate } from "../utils/formatDate";

export function VenueCard({
  venue: {
    name: venueName,
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
  const dateCreated = formatDate(created);

  return (
    <li className="b-light py-4 px-4 rounded-lg border border-dark">
      <div className="w-full h-80 border-secondary border-4">
        <img src={media[0]} alt="" className="h-full w-full object-cover" />
      </div>
      <article className="font-paragraph text-sm">
        <h3 className="font-headings text-primary font-bold text-base">{venueName}</h3>
        <dl>
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
    </li>
  );
}
