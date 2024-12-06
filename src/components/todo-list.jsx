import { useState } from "react";
import { List } from "./list";
import { AddToDo } from "./todo-add";
import { ToDoFilter } from "./todo-filter";

export const ToDoList = () => {
  const [todoes, setTodoes] = useState([
    { id: 101, text: "read a book", completed: false },
    { id: 102, text: "eat a burger", completed: true },
    { id: 103, text: "buy the flowers", completed: false },
  ]);

  const [filter, setFilter] = useState("all");

  const handleAdd = (text) => {
    const newTodo = { id: Date.now(), text, completed: false };
    setTodoes((prev) => [...prev, newTodo]);
  };

  const filteredTodos = todoes.filter((todo) => {
    if (filter === "all") return true;
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });
  const handleToggle = (id) => {
    setTodoes((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };


  return (
    <div className="p-4 bg-neutral-100 text-neutral-800 min-h-screen">
      <h1 className="text-2xl font-bold text-center mb-6">To-Do List</h1>
      <AddToDo onAdd={handleAdd} />
      <ToDoFilter currentFilter={filter} onFilterChange={setFilter} />
      <List items={filteredTodos}  onToggle={handleToggle}/>
    </div>
  );
};
