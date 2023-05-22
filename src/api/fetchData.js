export async function fetchData(url, setData, setLoading, setError) {
  try {
    setLoading(true);
    setError(false);
    const response = await fetch(url);
    const data = await response.json();
    setData(data);
  } catch (error) {
    setError(true);
  } finally {
    setLoading(false);
  }
}
