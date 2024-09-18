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
      isComplete: false,
    };
    setToDoList([...toDoList, task]);
  };

  const deleteTask = (id) => {
    const newTodoList = toDoList.filter((task) => task.id !== id);

    setToDoList(newTodoList);
  };

  const handleComplete = (selectedId) => {
    setToDoList(
      toDoList.map((task) => {
        if (task.id === selectedId) {
          return { ...task, isComplete: true };
        } else {
          return task;
        }
      })
    );
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
            <div
              style={{ color: list.isComplete ? "green" : "black" }}
              key={list.id}
            >
              <h1 style={{ color: list.isComplete ? "green" : "black" }}>
                {list.taskName}
              </h1>
              <button
                style={{ color: list.isComplete ? "green" : "black" }}
                onClick={() => {
                  handleComplete(list.id);
                }}
              >
                Complete
              </button>
              <button
                style={{ color: list.isComplete ? "green" : "black" }}
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
