import { useState } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";

export function useAuthPost() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [token] = useLocalStorage("token");

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };

  async function postWithAuth(url, options = {}) {
    try {
      setLoading(true);
      setError(false);
      const response = await fetch(url, {
        ...options,
        headers,
      });

      if (!response.ok) {
        setError(true);
      }

      const data = await response.json();
      setError(false);

      setData(data);
      console.log("Authorized POST successfully completed");
    } catch (error) {
      setError(true);
      console.log("error");
    } finally {
      setLoading(false);
      console.log("finally text POST");
    }
  }

  return { data, loading, error, postWithAuth };
}
