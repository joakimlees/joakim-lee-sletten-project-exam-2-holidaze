import { useLocalStorage } from "../../../hooks/useLocalStorage";
import { Link } from "react-router-dom";

export function Profile() {
  const [profile] = useLocalStorage("profile");

  const { name, email, avatar, venueManager } = profile;

  return (
    <main className="grow">
      <div className="mx-auto max-w-screen-2xl px-3 sm:px-5">
        <article className="bg-light mx-auto max-w-2xl py-10 px-10 rounded-lg">
          <h1 className="font-headings font-bold text-xl text-center text-primary my-10">{name}</h1>
          <div className="w-80 h-80 border-dark border-2 mx-auto">
            <img src={avatar} alt={`profile image to ${name}`} className="h-full w-full object-cover" />
          </div>
          <div className="mx-auto text-center">
            <Link>Edit avatar</Link>
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
        </article>
      </div>
    </main>
  );
}
