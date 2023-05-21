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
      <div className="max-w-xs">
        <img src={media[0]} alt="" />
      </div>
      <article className="font-paragraph text-sm">
        <h3 className="font-headings text-primary font-bold text-base">{venueName}</h3>
        <dl>
          <div>
            <dt className="text-dark font-bold">Price</dt>
            <dd>{price + ",-"}</dd>
          </div>
          <div>
            <dt className="text-dark font-bold">Country</dt>
            <dd>{country}</dd>
          </div>
          <div>
            <dt className="text-dark font-bold">created</dt>
            <dd>{dateCreated}</dd>
          </div>
          <div>
            <dt className="text-dark font-bold">max Guests</dt>
            <dd>{maxGuests}</dd>
          </div>
        </dl>
      </article>
    </li>
  );
}
