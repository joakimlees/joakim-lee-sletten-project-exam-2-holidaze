import { useState, useEffect } from "react";
import { fetchData } from "../fetchData";

export function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    let isMounted = true;

    fetchData(url, isMounted, setData, setLoading, setError);

    return () => {
      isMounted = false;
    };
  }, [url]);

  return { data, error, loading };
}
