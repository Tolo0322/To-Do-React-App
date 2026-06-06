import { useState } from "react";
import { FilterBar } from "./FilterBar";
import { TaskItem } from "./TaskItem";


export function TasksList({tasks, onToggleComplete, onEdit, onDelete})  {

    const [filter, setFilter] = useState('all');
    const handleFilter = (newFilter) => {
        setFilter(newFilter);
    };

    const filteredTasks = tasks.filter(task => {
        if (filter === 'completed') return task.completed;
        if (filter === 'pending') return !task.completed;
        return true; // 'all'
    });

    return (
        <div>
            <FilterBar onFilter={handleFilter} />
            <ul>
                 {filteredTasks.map((task) => {
                    return (
                        <TaskItem 
                            key={task.id} 
                            task={task} 
                            onToggleComplete={onToggleComplete} 
                            onEdit={onEdit} 
                            onDelete={onDelete}  />
                    );
                })}
            </ul>
        </div>
    )
}