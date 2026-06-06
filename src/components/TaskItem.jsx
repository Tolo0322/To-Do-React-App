export function TaskItem({ task, onToggleComplete, onEdit, onDelete }) {
    return (
      <div className="flex items-center justify-between bg-white/5 p-2 border border-gray-700 rounded-lg mt-2 h-12 outline-none ring-0">
        <div className="flex items-center gap-2">
          <div
            onClick={() => onToggleComplete(task.id)}
            className={`w-5 h-5 cursor-pointer border-2 rounded flex items-center justify-center  outline-none ring-0 shadow-none
            ${task.completed ? "bg-neutral-700 border-neutral-700 outline-none ring-0 shadow-none" : "border-gray-700 "}`}
          >
            {task.completed && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="white"
                className="w-4 h-4"
              >
                <path d="M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z" />
              </svg>
            )}
          </div>
          <span className={task.completed ? "line-through text-gray-500" : ""}>
            {task.text}
          </span>
        </div>
        <div className="flex items-center gap-2 ">
          <button
            onClick={() => onEdit(task.id)}
            className="px-2 py-1 text-blue-400 hover:text-blue-300"
          >
            Edit
          </button>
          <button
            onClick={() => onDelete(task.id)}
            className="px-2 py-1 text-red-400 hover:text-red-300"
          >
            Delete
          </button>
        </div>
      </div>
    );
}