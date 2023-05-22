import { useParams } from "react-router-dom";
import { useFetch } from "../../../../api/hooks/useFetch";
import { API_HOLIDAZE_VENUE_URL, BOOKINGS_OWNER } from "../../../../api/constants";

export function Venue() {
  const { id } = useParams();
  const url = `${API_HOLIDAZE_VENUE_URL}/${id}/${BOOKINGS_OWNER}`;
  const { data, loading, error } = useFetch(url);
  const { name, price } = data;

  return <div>{name}</div>;
}
