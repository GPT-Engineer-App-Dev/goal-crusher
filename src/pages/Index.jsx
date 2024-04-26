import { useState } from "react";
import { FaPlus, FaTrash } from "react-icons/fa";

const Index = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleAddTask();
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-5">
      <h1 className="text-3xl font-bold underline mb-4">Todo List</h1>
      <div className="flex items-center mb-4">
        <input type="text" className="flex-1 p-2 border-2 border-gray-300 rounded-md" placeholder="Add a new task" value={newTask} onChange={handleInputChange} onKeyPress={handleKeyPress} />
        <button className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleAddTask}>
          <FaPlus />
        </button>
      </div>
      <ul className="list-disc pl-5">
        {tasks.map((task, index) => (
          <li key={index} className="mb-2 flex justify-between items-center">
            <span>{task}</span>
            <button className="text-red-500 hover:text-red-700" onClick={() => handleDeleteTask(index)}>
              <FaTrash />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Index;
