import React, { useState } from "react";
import CalendarGrid from "./components/CalendarGrid";
import ConfirmationDialog from "./components/ConfirmationDialog";
import candidates from "./Data/candidates.json";

const App: React.FC = () => {
  const [selectedCandidateId, setSelectedCandidateId] = useState<number | null>(null);
  const [confirmation, setConfirmation] = useState<{
    day: string;
    time: string;
    engineer: string;
    candidate: string;
  } | null>(null);

  const [bookedSlots, setBookedSlots] = useState<
    { day: string; time: string; engineer: string; candidate: string }[]
  >([]);

  const selectedCandidate = candidates.find((c) => c.id === selectedCandidateId);

  return (
    <div className="max-w-5xl mx-auto p-6">
      
      <h1 className="text-2xl font-bold mb-6">SpeerCheck: Interview Scheduler</h1>

      <div className="flex items-center mb-6">
        <label htmlFor="candidate" className="mr-4 font-semibold">
          Select Candidate:
        </label>
        <select
          id="candidate"
          value={selectedCandidateId ?? ""}
          onChange={(e) => setSelectedCandidateId(Number(e.target.value))}
          className="border px-3 py-1 rounded w-64"
        >
          <option value="" disabled>Select...</option>
          {candidates.map((c) => (
            <option key={c.id} value={c.id}>{c.name}</option>
          ))}
        </select>
      </div>

      {selectedCandidate && (
        <CalendarGrid
          selectedCandidate={selectedCandidate}
          setConfirmation={setConfirmation}
          bookedSlots={bookedSlots}
          setBookedSlots={setBookedSlots}
        />
      )}

      <ConfirmationDialog
        open={!!confirmation}
        onClose={() => setConfirmation(null)}
        candidate={selectedCandidate?.name || ""}
        slot={confirmation}
        onConfirm={() => {
          if (confirmation) {
            setBookedSlots((prev) => [...prev, confirmation]);
            setConfirmation(null);
          }
        }}
      />
    </div>
  );
};

export default App;