export const ToDoFilter = ({ currentFilter, onFilterChange }) => {
    return (
      <div className="flex justify-center gap-4 mb-4">
        <button
          onClick={() => onFilterChange("all")}
          className={`px-4 py-2 rounded ${
            currentFilter === "all"
              ? "bg-blue-500 text-white"
              : "bg-neutral-300 text-neutral-700"
          }`}
        >
          All
        </button>
        <button
          onClick={() => onFilterChange("active")}
          className={`px-4 py-2 rounded ${
            currentFilter === "active"
              ? "bg-blue-500 text-white"
              : "bg-neutral-300 text-neutral-700"
          }`}
        >
          Active
        </button>
        <button
          onClick={() => onFilterChange("completed")}
          className={`px-4 py-2 rounded ${
            currentFilter === "completed"
              ? "bg-blue-500 text-white"
              : "bg-neutral-300 text-neutral-700"
          }`}
        >
          Completed
        </button>
      </div>
    );
  };
  