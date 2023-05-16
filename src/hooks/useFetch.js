/*
import { useState, useEffect } from "react";


import { useState, useEffect } from "react";
import { fetchData } from "../api/fetchData";

export function useFetch(url, method, body) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setLoading(true);
        setError(false);
        const fetchedData = await fetch(url);
        const json = await fetchedData.json();
        setData(json);
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    getData();
  }, [url, method, body]);
  return { data, loading, error };
}
*/
