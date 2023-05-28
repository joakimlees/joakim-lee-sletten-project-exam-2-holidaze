import { formatDate } from "../utils/formatDate";
import { Link } from "react-router-dom";

export function UserBookingsCard({
  booking: {
    venue: { name, media, price },
    id,
    created,
    dateFrom,
    dateTo,
    updated,
  },
}) {
  const fromDate = formatDate(dateFrom);
  const toDate = formatDate(dateTo);
  const createdDate = formatDate(created);
  const updatedDate = formatDate(updated);

  return (
    <li className="flex-col bg-light w-80 py-4 px-4 rounded-lg gap-5 sm:flex sm:flex-row sm:w-full sm:max-w-full">
      <div className="h-52 sm:h-full w-full sm:w-52 border-dark border-2 rounded-lg mx-auto">
        <img src={media[0]} alt={name} className="h-full w-full object-cover rounded-lg" />
      </div>
      <article className="w-full grow">
        <h2 className="font-headings font-semibold text-base text-primary mb-2">{name}</h2>
        <dl className="flex justify-between">
          <div className="font-paragraph">
            <dt>Booked from</dt>
            <dd className="font-semibold">{fromDate}</dd>
            <dt>Booked to</dt>
            <dd className="font-semibold">{toDate}</dd>
          </div>
          <div className="text-right">
            <dt>Created</dt>
            <dd className="font-semibold">{createdDate}</dd>
            <dt>Updated</dt>
            <dd className="font-semibold">{updatedDate}</dd>
          </div>
        </dl>
        <div className="flex justify-center mt-6 py-2 bg-dark text-white rounded-lg">
          <Link to={`/profiles/bookings/${id}`} className="w-full h-full text-center">
            Edit booking
          </Link>
        </div>
        <div className="flex justify-center mt-6 py-2 bg-secondary text-white rounded-lg">
          <button className="w-full h-full text-center">Delete Booking</button>
        </div>
      </article>
    </li>
  );
}
