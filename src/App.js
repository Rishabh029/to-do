import { useState } from 'react';
import './App.css';
import Task from './Task';

function App() {

  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleEvent = (event) => {
    setNewTask(event.target.value);
  }

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      complete : false
    }
    setTodoList([...todoList, task]);
  }
  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => id !== task.id));
  }

  const completeTask = (id) => {
    setTodoList(
      todoList.map((task) =>{
        if(task.id === id){
          return {...task , complete : true };
        }
        else{
          return task;
        }
      })
    )

    }
  
  return (
    <div className="App">
      <div>
        <input type="text" onChange={handleEvent} />
        <button onClick={addTask}>Add task</button>
      </div>
      <div>
        {todoList.map((task) => {
          return (
            <Task className = "App" taskName={task.taskName}
            id = {task.id} 
            deleteTask={deleteTask}
            completeTask = {completeTask}
            complete = {task.complete}
            />
          )
        })}
      </div>
    </div>
  );
}

export default App;
