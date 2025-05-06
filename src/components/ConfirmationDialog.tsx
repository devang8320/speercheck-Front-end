import React from "react";

interface Props {
  open: boolean;
  onClose: () => void;
  candidate: string;
  engineer: string;
  day: string;
  time: string;
}

const ConfirmationDialog: React.FC<Props> = ({ open, onClose, candidate, engineer, day, time }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow-lg max-w-md text-center">
        <h2 className="text-xl font-semibold mb-4">Interview Confirmed</h2>
        <p>{candidate} will meet with {engineer} on <strong>{day} at {time}</strong></p>
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ConfirmationDialog;