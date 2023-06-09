export const API_HOST_URL = "https://api.noroff.dev";
export const API_BASE = "/api/v1";
export const API_HOLIDAZE = "/holidaze";
export const API_HOLIDAZE_URL = `${API_HOST_URL}${API_BASE}${API_HOLIDAZE}`;
export const VENUES = "/venues";
export const BOOKINGS_OWNER = "?_owner=true&_bookings=true";
export const API_HOLIDAZE_VENUES_URL = `${API_HOLIDAZE_URL}${VENUES}${BOOKINGS_OWNER}`;
export const API_HOLIDAZE_VENUE_URL = `${API_HOLIDAZE_URL}${VENUES}`;
