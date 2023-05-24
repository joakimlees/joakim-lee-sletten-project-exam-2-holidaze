import Calendar from "react-calendar";
import { useState } from "react";
import { formatDate } from "../utils/formatDate";

export function Calender() {
  const [dateFrom, setDateFrom] = useState();
  const [dateTo, setDateTo] = useState();

  const handleDateClick = date => {
    if (!dateFrom && !dateTo) {
      // No dates selected yet, set "from" date
      setDateFrom(date);
    } else if (dateFrom && !dateTo && date > dateFrom) {
      // "from" date is set, but "to" date is not set, and clicked date is later than "from" date, set "to" date
      setDateTo(date);
    } else {
      // Reset both "from" and "to" dates and set new "from" date
      setDateFrom(date);
      setDateTo(null);
    }
  };

  function getTileClassName({ date, dateFrom, dateTo }) {
    if (dateFrom && dateTo) {
      // Both "From" and "To" dates are selected, apply styling to dates in range
      return date >= dateFrom && date <= dateTo ? "bg-primary text-white" : "";
    } else if (dateFrom && date.getTime() === dateFrom.getTime()) {
      // Only "From" date is selected, apply special styling
      return "bg-primary text-white";
    } else if (dateFrom && !dateTo && date >= dateFrom) {
      // "From" date is selected, apply styling to dates from "From" to current date
      return "bg-light";
    }
    return ""; // Default styling for other dates
  }

  const dateOne = formatDate(dateFrom);
  const dateTwo = formatDate(dateTo);

  console.log(dateOne);
  console.log(dateTwo);

  return (
    <div className="">
      <Calendar className="font-paragraphs w-full h-full border p-10 mt-10 mb-10" minDate={new Date()} view="month" onClickDay={handleDateClick} tileClassName={({ date }) => getTileClassName({ date, dateFrom, dateTo })} prevLabel="«" nextLabel="»" prev2Label="" next2Label="" />
    </div>
  );
}

/*

  return (
    <div className="">
      <Calendar className="font-paragraphs w-full h-full border p-10 mt-10 mb-10 bg-light" minDate={new Date()} view="month" onClickDay={date => console.log(date)} />
    </div>
  );
}
*/
