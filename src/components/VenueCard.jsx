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
  const date = new Date(created);
  const formattedDate = date.toLocaleString();

  console.log(formattedDate);

  return (
    <li className="b-light py-4 px-4 rounded-lg border border-dark">
      <div className="max-w-xs">
        <img src={media[0]} alt="" />
      </div>
      <article>
        <h3 className="font-headings text-primary">{venueName}</h3>
        <dl>
          <div>
            <dt>Price</dt>
            <dd>{price}</dd>
          </div>
          <div>
            <dt>Country</dt>
            <dd>{country}</dd>
          </div>
          <div>
            <dt>created</dt>
            <dd>{created}</dd>
          </div>
          <div>
            <dt>max Guests</dt>
            <dd>{maxGuests}</dd>
          </div>
        </dl>
      </article>
    </li>
  );
}
