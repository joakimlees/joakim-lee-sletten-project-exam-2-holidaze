import Calendar from "react-calendar";

export function Calender() {
  return (
    <div>
      <Calendar className="w-full h-full border p-10 mt-10 mb-10" minDate={new Date()} view="month" onClickDay={date => console.log(date)} />
    </div>
  );
}
