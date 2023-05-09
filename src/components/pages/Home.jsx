import { useState, useEffect } from "react";
import { API_HOLIDAZE_URL, VENUES } from "../../api/constants";

const url = API_HOLIDAZE_URL + VENUES;

export function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch(url);
      const json = await response.json();

      setData(json);
    }
    getData();
  }, []);

  console.log("hello " + data);

  return (
    <main className="grow">
      <div className="mx-auto max-w-screen-2xl px-3 sm:px-5">
        <h1>Home page</h1>
        <p>tes</p>
        <section>
          <h2>Hello</h2>
        </section>
      </div>
    </main>
  );
}
