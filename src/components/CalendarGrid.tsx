import React from "react";
import engineers from "../data/engineers.json";
import candidates from "../data/candidates.json";
import { parseTimeRange, generateAllSlots } from "../utils/Availability";

interface Props {
  candidateId: number | null;
  onSlotSelect: (slot: { day: string; time: string; engineer: string }) => void;
}

const CalendarGrid: React.FC<Props> = ({ candidateId, onSlotSelect }) => {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const hours = generateAllSlots();

  const candidate = candidates.find((c) => c.id === candidateId);
  const candidateRange = candidate ? parseTimeRange(candidate.availability) : null;

  const getEngineersAvailableAt = (day: string, time: string) => {
    return engineers.filter((eng) =>
      eng.availability.some((slot) => {
        const { day: d, start, end } = parseTimeRange(slot);
        return (
          d === day &&
          time >= start &&
          time < end
        );
      })
    );
  };

  const isCandidateAvailable = (day: string, time: string) => {
    if (!candidateRange) return false;
    return (
      candidateRange.day === day &&
      time >= candidateRange.start &&
      time < candidateRange.end
    );
  };

  return (
    <div className="overflow-x-auto mt-6">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border p-2 w-24 text-left">Time</th>
            {days.map((day) => (
              <th key={day} className="border p-2 text-center">{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {hours.map((time) => (
            <tr key={time}>
              <td className="border p-2 text-sm">{time}</td>
              {days.map((day) => {
                const engineerList = getEngineersAvailableAt(day, time);
                const isCand = isCandidateAvailable(day, time);
                const intersect = engineerList.length > 0 && isCand;
                const cellColor = intersect ? "bg-blue-300 hover:bg-blue-400" :
                                  isCand ? "bg-red-200" :
                                  engineerList.length > 0 ? "bg-green-200" : "";

                return (
                  <td
                    key={day + time}
                    className={`border h-10 text-center cursor-pointer text-xs ${cellColor}`}
                    onClick={() => {
                      if (intersect)
                        onSlotSelect({
                          day,
                          time,
                          engineer: engineerList[0].name,
                        });
                    }}
                  >
                    {intersect ? "Book" : ""}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CalendarGrid;