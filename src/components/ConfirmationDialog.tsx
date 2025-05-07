// ✅ ConfirmationDialog.tsx — final version with Confirm/Cancel buttons
import React from "react";

interface ConfirmationDialogProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  candidate: string;
  slot: {
    day: string;
    time: string;
    engineer: string;
    candidate: string;
  } | null;
}

const ConfirmationDialog: React.FC<ConfirmationDialogProps> = ({
  open,
  onClose,
  onConfirm,
  candidate,
  slot,
}) => {
  if (!slot) return null;

  return (
    <div className={`fixed inset-0 bg-black bg-opacity-40 z-50 ${open ? "block" : "hidden"}`}>
      <div className="bg-white p-6 rounded shadow-md w-96 mx-auto mt-40">
        <h2 className="text-xl font-semibold mb-4">Confirm Interview</h2>

        <p><strong>Candidate:</strong> {candidate}</p>
        <p><strong>Engineer:</strong> {slot.engineer}</p>
        <p><strong>Day:</strong> {slot.day}</p>
        <p><strong>Time:</strong> {slot.time}</p>

        <div className="mt-6 flex justify-end gap-4">
          <button
            onClick={onClose}
            className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationDialog;