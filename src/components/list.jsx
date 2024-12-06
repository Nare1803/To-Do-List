import { ToDoItem } from "./todo-item";

export const List = ({ items, onDelete, onToggle }) => {
  return (
    <div className="space-y-2">
      {items.map((todo) => (
        <ToDoItem
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};
