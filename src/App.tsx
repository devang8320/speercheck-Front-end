import React, { useState } from "react";
import candidates from "./data/candidates.json";
import CandidateSelector from "./components/CandidateSelector";
import CalendarGrid from "./components/CalendarGrid";
import ConfirmationDialog from "./components/ConfirmationDialog";
import logo from "./assets/logo.png";

function App() {
  const [selectedCandidateId, setSelectedCandidateId] = useState<number | null>(null);
  const [confirmation, setConfirmation] = useState<{ engineer: string; time: string; day: string } | null>(null);

  const candidateName = candidates.find((c) => c.id === selectedCandidateId)?.name || "";

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="flex items-center mb-6">
        <img src={logo} alt="SpeerCheck Logo" className="h-10 w-10 mr-3" />
        <h1 className="text-3xl font-bold">SpeerCheck: Interview Scheduler</h1>
      </div>
  
      <CandidateSelector
        candidates={candidates}
        selectedId={selectedCandidateId}
        onSelect={setSelectedCandidateId}
      />
      <CalendarGrid
        candidateId={selectedCandidateId}
        onSlotSelect={(slot) => setConfirmation(slot)}
      />
      <ConfirmationDialog
        open={!!confirmation}
        onClose={() => setConfirmation(null)}
        candidate={candidateName}
        engineer={confirmation?.engineer || ""}
        day={confirmation?.day || ""}
        time={confirmation?.time || ""}
      />
  
      <footer className="mt-6 text-center">
        <p className="text-sm text-gray-600">© 2025 SpeerCheck. All rights reserved.</p>
        <p className="text-sm text-gray-600">Built with Devang Vasani</p>
        <p className="text-sm text-gray-600">Version 1.0.0</p>
        <p className="text-sm text-gray-600">Contact: devangvasani8320@gmail.com</p>
      </footer>
    </div>
  );
}  
export default App;