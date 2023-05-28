import { useLocalStorage } from "../../../hooks/useLocalStorage";
import { Link } from "react-router-dom";
import { API_HOLIDAZE_URL } from "../../../api/constants";
import { useAuthFetch } from "../../../api/auth/useAuthFetch";

export function Profile() {
  const [profile] = useLocalStorage("profile");

  const { name } = profile;

  const method = "get";

  const url = `${API_HOLIDAZE_URL}/profiles/${name}`;

  const { data, loading, error } = useAuthFetch(url, {
    method,
  });

  if (loading) {
    return <div className="loading-fetch">loading..................</div>;
  }

  if (!data) {
    return <div className="loading-fetch">loading..................</div>;
  }
  const { name: username, email, avatar, venueManager } = data;

  if (error) {
    return <div className="error-fetch">Sorry.. something went wrong. try to reload the site or try again later</div>;
  }

  if (data) {
    return (
      <main className="grow">
        <div className="mx-auto max-w-screen-2xl px-3 sm:px-5">
          <article className="bg-light mx-auto max-w-2xl py-10 px-10 rounded-lg">
            <h1 className="font-headings font-bold text-xl text-center text-primary my-10">{username}</h1>
            <div className="w-80 h-80 border-dark border-2 mx-auto">
              <img src={avatar} alt={username} className="h-full w-full object-cover" />
            </div>
            <div className="mx-auto text-center flex my-5">
              <Link className="text-center text-light bg-dark rounded-lg py-2 w-full">Edit avatar</Link>
            </div>
            <dl className="flex justify-between">
              <div>
                <dd>Email</dd>
                <dt>{email}</dt>
              </div>
              <div className="text-right">
                <dd>Role</dd>
                {venueManager ? <div>Manager</div> : <div>Customer</div>}
              </div>
            </dl>
            <div className="flex mt-10">
              <Link className="text-center text-light bg-dark rounded-lg py-2 w-full" to={`/profiles/${name}/bookings`}>
                Your bookings
              </Link>
            </div>
          </article>
        </div>
      </main>
    );
  }
}
