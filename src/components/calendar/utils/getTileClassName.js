export function getTileClassName({ date }, isDateBooked, dateFrom, dateTo) {
  if (isDateBooked(date)) {
    return "bg-secondary"; // Styling for booked dates
  }
  if (dateFrom && dateTo) {
    return date >= dateFrom && date <= dateTo ? "bg-primary text-white" : "";
  }
  if (dateFrom && date.getTime() === dateFrom.getTime()) {
    return "bg-primary text-white";
  }
  if (dateFrom && !dateTo && date >= dateFrom) {
    return "bg-light";
  }
  return "";
}
