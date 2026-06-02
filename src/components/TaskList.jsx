import { TaskItem } from "./TaskItem";


export function TasksList({tasks, onToggleComplete, onEdit, onDelete})  {

    console.log('Task en TaskItem:', tasks);
    console.log('Tipo:', typeof tasks);


    return (
        <div>
            <ul>
                 {tasks.map((task) => {
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