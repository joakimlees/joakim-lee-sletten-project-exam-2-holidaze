export async function fetchData(url, isMounted, setData, setLoading, setError) {
  try {
    setLoading(true);
    setError(false);

    const response = await fetch(url);
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
