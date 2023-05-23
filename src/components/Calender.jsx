import Calendar from "react-calendar";

export function Calender() {
  return (
    <div>
      <Calendar className="w-full h-full border p-2" minDate={new Date()} view="month" />
    </div>
  );
}
