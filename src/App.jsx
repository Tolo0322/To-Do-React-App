import { useState } from 'react';
import { AddTask } from './components/AddTask';
import { TasksList } from './components/TaskList';

function App() {

  const [tasks, setTasks] = useState([]);
  const handleAddTasks = (newTaskText) => {
      const newTask = { 
        id: Date.now(), 
        text: newTaskText, 
        completed: false };
      setTasks(prev => [...prev, newTask]);
  };

  const handleToggleComplete = (taskId) => {
    setTasks(prev => prev.map(task => task.id === taskId ? {...task, completed: !task.completed} : task));
  };
  
  const handleEdit = (taskId) => {
    const newText = prompt("Edita tu tarea:");
    if (newText !== null) {
      setTasks(prev => prev.map(task => task.id === taskId ? {...task, text: newText} : task));
    }
  };  

  const handleDelete = (taskId) => {
    setTasks(prev => prev.filter(task => task.id !== taskId));
  };

  return (
    <>
      <div className=" text-white min-h-screen max-w-3xl flex justify-center items-center mx-auto">
        <div className='flex flex-col justify-center items-start h-screen gap-6 w-full'>
          <div>
            <h1 className="text-3xl font-bold underline">Mis tareas</h1>
          </div>
          <div className="w-full ">
            <AddTask onAddTask={handleAddTasks} />
            <TasksList tasks={tasks} onToggleComplete={handleToggleComplete} onEdit={handleEdit} onDelete={handleDelete} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App
