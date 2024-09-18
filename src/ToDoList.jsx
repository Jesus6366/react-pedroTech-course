import { useState } from "react";
import "./App.css";

function ToDoList() {
  const [toDoList, setToDoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

  const addTask = () => {
    const task = {
      id: toDoList.length === 0 ? 1 : toDoList[toDoList.length - 1].id + 1,
      taskName: newTask,
    };
    setToDoList([...toDoList, task]);
  };

  const deleteTask = (id) => {
    const newTodoList = toDoList.filter((task) => task.id !== id);

    setToDoList(newTodoList);
  };

  return (
    <div className="App">
      <div className="addTask">
        <input onChange={handleChange} placeholder="Add Your Task" />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="list">
        {toDoList.map((list, key) => {
          return (
            <div key={list.id}>
              <h1>{list.taskName}</h1>
              <button
                onClick={() => {
                  deleteTask(list.id);
                }}
              >
                x
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ToDoList;
