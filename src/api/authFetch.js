/*import { useState } from "react";

export async function useAuthFetch(profileData, apiURL, event) {
  const { error, setError } = useState(false);
  const { data, setData } = useState();

  const form = event.target;
  const action = new URL(form.action);
  const path = action.pathname;
  const method = form.method;

  url = apiURL + path;
  const body = JSON.stringify(profileData);

  try {
    const response = await fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body,
    });

    const result = response.json();
    setData(result);
    console.log(data);
  } catch (error) {
    setError(true);
    console.log("Error registering user:", error);
  } finally {
    console.log("api request done");
  }
}

*/
