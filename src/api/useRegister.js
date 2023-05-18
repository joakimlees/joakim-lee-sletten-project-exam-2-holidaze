/*import { useState } from "react";

export async function useRegister(profileData, apiURL, event) {
  const { error, setError } = useState(false);
  const { profile, setProfile } = useState();

  const form = event.target;
  const action = new URL(form.action);
  const path = action.pathname;
  const method = form.method;

  url = apiURL + path;
  const body = JSON.stringify(profileData);

  async function useFetch() {
    try {
      const response = await fetch(url, {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
        body,
      });

      const result = response.json();
      setProfile(result);
    } catch (error) {
      setError(true);
      console.log("Error registering user:", error);
    } finally {
      console.log("api request done");
    }
  }

  useFetch();

  return { profile, error };
}




const form = event.target;
    const action = new URL(form.action);
    const path = action.pathname;
    const method = form.method;

    const url = API_HOLIDAZE_URL + path;

    const body = JSON.stringify(data);

    async function registerProfile(url, method, body) {
      try {
        setLoading(true);
        setError(null);
  
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
  
        if (response.ok) {
          // Request succeeded
          const data = await response.json();
          setResponseData(data); // Store the response data in state
          console.log("User registered successfully");
        } else {
          // Request failed
          console.error("Failed to register user");
        }
      } catch (error) {
        // Request error
        console.error("Error registering user:", error);
      } finally {
        setLoading(false);
      }


*/
