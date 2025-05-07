// ✅ CalendarGrid.tsx
import React from "react";
import engineers from "../Data/engineers.json";
import clsx from "clsx";

interface Slot {
  day: string;
  time: string;
  engineer: string;
  candidate: string;
}

interface Candidate {
  id: number;
  name: string;
  availability: string;
}

interface CalendarGridProps {
  selectedCandidate: Candidate;
  setConfirmation: (slot: Slot) => void;
  bookedSlots: Slot[];
  setBookedSlots: React.Dispatch<React.SetStateAction<Slot[]>>;
}

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const times = Array.from({ length: 18 }, (_, i) => {
  const hour = 9 + Math.floor(i / 2);
  const minute = i % 2 === 0 ? "00" : "30";
  return `${hour.toString().padStart(2, "0")}:${minute}`;
});

const CalendarGrid: React.FC<CalendarGridProps> = ({
  selectedCandidate,
  setConfirmation,
  bookedSlots,
  setBookedSlots,
}) => {
  const isSlotAvailable = (availability: string[], day: string, time: string) => {
    return availability.some((range) => {
      const [availDay, hours] = range.split(" ");
      if (availDay !== day) return false;
      const [start, end] = hours.split("-");
      return time >= start && time < end;
    });
  };

  return (
    <table className="w-full border-collapse text-sm text-center">
      <thead>
        <tr>
          <th className="border p-2 bg-gray-100">Time</th>
          {days.map((day) => (
            <th key={day} className="border p-2 bg-gray-100">{day}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {times.map((time) => (
          <tr key={time}>
            <td className="border p-1 bg-white font-medium">{time}</td>
            {days.map((day) => {
              const availableEngineers = engineers.filter((eng) =>
                isSlotAvailable(eng.availability, day, time)
              );
              const isCandAvail = isSlotAvailable([selectedCandidate.availability], day, time);
              const intersect = availableEngineers.length > 0 && isCandAvail;
              const alreadyBooked = bookedSlots.some(
                (slot) => slot.day === day && slot.time === time && slot.candidate === selectedCandidate.name
              );

              return (
                <td
                  key={day + time}
                  className={clsx(
                    "border p-2 transition",
                    alreadyBooked
                      ? "bg-yellow-400 text-white"
                      : intersect
                      ? "bg-blue-400 text-white hover:bg-blue-500 cursor-pointer"
                      : isCandAvail
                      ? "bg-yellow-200"
                      : availableEngineers.length > 0
                      ? "bg-green-200"
                      : ""
                  )}
                  onClick={() => {
                    if (intersect && !alreadyBooked) {
                      setConfirmation({
                        day,
                        time,
                        engineer: availableEngineers[0].name,
                        candidate: selectedCandidate.name,
                      });
                      // setBookedSlots((prev) => [
                      //   ...prev,
                      //   {
                      //     day,
                      //     time,
                      //     engineer: availableEngineers[0].name,
                      //     candidate: selectedCandidate.name,
                      //   },
                      // ]);
                    }
                  }}
                >
                  {intersect && !alreadyBooked ? "Book" : alreadyBooked ? "✔" : ""}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CalendarGrid;