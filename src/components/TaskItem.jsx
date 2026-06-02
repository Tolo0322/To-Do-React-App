export function TaskItem({ task, onToggleComplete, onEdit, onDelete }) {
    return (
        <div className="flex items-center justify-between bg-white/5 p-2 border border-gray-700 rounded-lg mt-2 h-12">
            <div className="flex items-center gap-2">
                <input 
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => onToggleComplete(task.id)}
                    className="appearance-none w-5 h-5 cursor-pointer border-2 border-gray-700  rounded
                    "
                />
                <span className={task.completed ? "line-through text-gray-500" : ""}>{task.text}</span>
            </div>
            <div className="flex items-center gap-2 ">
                <button onClick={() =>onEdit(task.id)} className="px-2 py-1 text-blue-400 hover:text-blue-300">Edit</button>
                <button onClick={() => onDelete(task.id)} className="px-2 py-1 text-red-400 hover:text-red-300">Delete</button>
            </div>
        </div>
    )
}