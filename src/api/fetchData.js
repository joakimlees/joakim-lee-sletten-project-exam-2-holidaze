/*export async function fetchData(url, method, body, setData, setLoading, setError) {
  try {
    setLoading(true);
    setError(false);

    const options = {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };

    const response = await fetch(url, options);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "An error occurred");
    }

    setData(data);
  } catch (error) {
    setError(true);
  } finally {
    setLoading(false);
  }
}

*/
