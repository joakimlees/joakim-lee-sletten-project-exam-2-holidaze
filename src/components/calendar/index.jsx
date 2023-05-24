import * as calendar from "./utils";
import Calendar from "react-calendar";
import { useState } from "react";
import { formatDate } from "../../utils/formatDate";

export function BookingCalendar({ bookings }) {
  const [dateFrom, setDateFrom] = useState();
  const [dateTo, setDateTo] = useState();

  const handleDateClick = date => {
    calendar.handleDateClick(date, isDateBooked, bookings, dateFrom, dateTo, setDateFrom, setDateTo);
  };

  const maxDate = calendar.getMaxDate(12);

  const isDateBooked = date => {
    const dateBooked = calendar.isDateBooked(bookings, date);
    return dateBooked;
  };

  const getTileClassName = date => {
    const tileClassName = calendar.getTileClassName(date, isDateBooked, dateFrom, dateTo);
    return tileClassName;
  };

  const dateOne = formatDate(dateFrom);
  const dateTwo = formatDate(dateTo);

  console.log(dateOne);
  console.log(dateTwo);
  return (
    <div className="">
      <Calendar className="font-paragraphs w-full h-full border p-10 mt-10 mb-10" minDate={new Date()} maxDate={maxDate} view="month" onClickDay={handleDateClick} tileClassName={({ date }) => getTileClassName({ date, dateFrom, dateTo })} prevLabel={<span className="px-2 pb-1 me-2 border font-bold">«</span>} nextLabel={<span className="px-2 pb-1 ms-2 border font-bold">»</span>} prev2Label="" next2Label="" />
    </div>
  );
}
