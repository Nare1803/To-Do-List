
import { useState } from "react";

export const AddToDo = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [error, setError] = useState(null);

  const handleSave = () => {
    if (!text.trim()) {
      return setError("Please fill all the fields.");
    }
    onAdd(text);
    setText("");
    setError(null);
  };

  return (
    <div className="flex items-center gap-4 mb-4">
      {error && <p className="bg-red-400 p-2 my-2">{error}</p>}
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="flex-1 px-4 py-2 border border-neutral-300 rounded focus:outline-none focus:ring focus:ring-neutral-400"
        placeholder="Add a new task..."
      />
      <button
        onClick={handleSave}
        className="px-4 py-2 bg-neutral-300 text-neutral-700 rounded hover:bg-neutral-400 transition"
      >
        Save
      </button>
    </div>
  );
};
