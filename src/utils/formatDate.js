//function to format date from for example new date() to be formatted as mm/dd/yy
export function formatDate(date) {
  if (!date) {
    return ""; // Return empty string if date is null
  }

  const newDate = new Date(date);
  const formattedDate = newDate.toLocaleString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  return formattedDate;
}
