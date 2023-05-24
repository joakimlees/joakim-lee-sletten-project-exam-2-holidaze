import Calendar from "react-calendar";
import { useState } from "react";

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

  return (
    <div className="">
      <Calendar
        className="font-paragraphs w-full h-full border p-10 mt-10 mb-10 bg-light"
        minDate={new Date()}
        view="month"
        onClickDay={handleDateClick}
        tileClassName={({ date }) => {
          if (dateFrom && dateTo) {
            // Both "From" and "To" dates are selected, apply styling to dates in range
            return date >= dateFrom && date <= dateTo ? "bg-blue-500 text-white" : "";
          } else if (dateFrom && date.getTime() === dateFrom.getTime()) {
            // Only "From" date is selected, apply special styling
            return "bg-green-500 text-white";
          } else if (dateFrom && !dateTo && date >= dateFrom) {
            // "From" date is selected, apply styling to dates from "From" to current date
            return "bg-green-200";
          }
          return ""; // Default styling for other dates
        }}
      />
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
