export const ToDoItem = ({ todo: { id, text, completed }, onDelete, onToggle }) => {
  return (
    <div
      className={`flex items-center justify-between p-4 border rounded ${
        completed ? "bg-green-100 text-green-800" : "bg-neutral-200 text-neutral-800"
      }`}
    >
      <p className={`${completed ? "line-through text-neutral-500" : ""}`}>
        {text}
      </p>
      <div className="flex gap-2">
        <button
          onClick={() => onToggle(id)}
          className="px-3 py-1 bg-neutral-300 text-neutral-700 rounded hover:bg-neutral-400 transition"
        >
          {completed ? "Cancel" : "Complete"}
        </button>
        <button
          onClick={() => onDelete(id)}
          className="px-3 py-1 bg-red-200 text-red-700 rounded hover:bg-red-300 transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
};
