import { useEffect, useState } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";

// authentication function. Which returns the correct header for the user (with the token).
export function headers() {
  //gets the token from local storage using the useLocalStorage hook.
  const [token] = useLocalStorage("token");

  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
}

// returns fetch, with the correct header.
export function useAuthFetch(url, options = {}) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    let isMounted = true;

    setLoading(true);
    setError(false);

    async function getAuthData() {
      try {
        const response = fetch(url, {
          ...options,
          headers: headers(),
        });

        const data = await response.json();
        if (isMounted) {
          setData(data);
        }
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    getAuthData();
  }, [url]);

  return { data, loading, error };
}
