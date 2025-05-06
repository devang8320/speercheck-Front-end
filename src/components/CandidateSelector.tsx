import React from "react";

interface Candidate {
  id: number;
  name: string;
}

interface Props {
  candidates: Candidate[];
  selectedId: number | null;
  onSelect: (id: number) => void;
}

const CandidateSelector: React.FC<Props> = ({ candidates, selectedId, onSelect }) => {
  return (
    <div className="mb-4">
      <label className="block text-lg font-semibold mb-2">Select Candidate:</label>
      <select
        className="p-2 border rounded w-full"
        value={selectedId ?? ""}
        onChange={(e) => onSelect(Number(e.target.value))}
      >
        <option value="">-- Choose a candidate --</option>
        {candidates.map((c) => (
          <option key={c.id} value={c.id}>
            {c.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CandidateSelector;