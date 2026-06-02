import { useState } from "react";

export function AddTask({ onAddTask }) {
  const [task, setTask] = useState("");

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      onAddTask(task);
      setTask("");
    }
  };

  return (
    <div className="w-full flex gap-4 mb-10"> 
      <input
        onChange={handleInputChange}
        value={task}
        type="text"
        placeholder="Añadir nueva tarea"
        className="border px-2 py-2 rounded-lg w-full bg-white/5 border-gray-700 text-gray-400  h-12 "
      />
      <button
        onClick={handleSubmit}
        type="submit"
        className="text-white px-5 rounded-lg  py-2 border border-white cursor-pointer hover:bg-white/10 h-12 w-32"
      >
        + Añadir
      </button>
    </div>
  );
}
