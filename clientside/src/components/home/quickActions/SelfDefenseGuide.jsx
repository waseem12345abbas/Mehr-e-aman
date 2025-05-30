import { useState } from 'react';
import { FaBook } from 'react-icons/fa';

const selfDefenseTips = [
  "Stay aware of your surroundings.",
  "Use your voice to attract attention.",
  "Aim for sensitive areas like eyes, nose, and groin.",
  "Carry pepper spray or a whistle.",
  "Trust your instincts — if something feels wrong, act fast.",
];

export default function SelfDefenseGuide() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 text-[#FF3B3F] text-xl font-semibold hover:underline"
      >
        <FaBook className="text-3xl" />
        Self-Defense Guide
      </button>

      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-2xl font-bold"
              aria-label="Close modal"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4 text-[#FF3B3F]">Self-Defense Guide</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-800">
              {selfDefenseTips.map((tip, idx) => (
                <li key={idx}>{tip}</li>
              ))}
            </ul>
            <p className="mt-4 text-gray-600 text-sm">
              For more in-depth tutorials and videos, please visit trusted safety websites.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
