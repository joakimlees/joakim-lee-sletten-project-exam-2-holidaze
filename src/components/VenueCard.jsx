export function VenueCard({ venue: { name, media } }) {
  return (
    <li className="b-light py-4 px-4 rounded-lg border border-dark">
      <div className="max-w-xs">
        <img src={media[0]} alt="" />
      </div>
      <article>
        <h3 className="font-headings text-primary">{name}</h3>
      </article>
    </li>
  );
}
