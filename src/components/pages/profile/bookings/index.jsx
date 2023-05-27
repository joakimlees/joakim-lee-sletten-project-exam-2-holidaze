import { useEffect } from "react";
import { useAuthFetch } from "../../../../api/auth/useAuthFetch";
import { API_HOLIDAZE_URL } from "../../../../api/constants";
import { useLocalStorage } from "../../../../hooks/useLocalStorage";

export function UserBookings() {
  const [profile] = useLocalStorage("profile");

  const method = "get";

  const { name } = profile;

  const url = `${API_HOLIDAZE_URL}/profiles/${name}/bookings`;

  const { data, loading, error, fetchWithAuth } = useAuthFetch();

  useEffect(() => {
    async function getBookings() {
      await fetchWithAuth(
        url,
        {
          method,
        },
        [url]
      );
    }

    getBookings();
  }, [url]);

  if (loading) {
    return <div className="loading-fetch">loading..................</div>;
  }

  if (error) {
    return <div className="error-fetch">Sorry.. something went wrong. try to reload the site or try again later</div>;
  }

  if (data) {
    return (
      <main className="grow">
        <div className="mx-auto max-w-screen-2xl px-3 sm:px-5">
          <h1 className="font-headings font-bold text-xl text-center text-primary my-10">Venues</h1>
          <ul className="flex flex-wrap justify-center gap-5">
            {data.map(booking => (
              <div key={booking.id}>{booking.id}</div>
            ))}
          </ul>
        </div>
      </main>
    );
  }
}
