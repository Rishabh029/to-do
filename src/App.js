import { createContext, useState } from 'react';
import './App.css';
import Task from './Task';
import Axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from './Navbar';
import { Home } from './Pages/Home';
import { Profile } from './Pages/Profile';
import { Menu } from './Pages/Menu';
import { Contact } from './Pages/Contact';

export const AppContext = createContext();

function App() {

  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [excuse, setExcuse] = useState("");
  const [userName , setUserName] = useState("Rishabh")

  const handleEvent = (event) => {
    setNewTask(event.target.value);
  }

  const fetchExcuse = (excuse) => {
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}`).then(
      (res) => {
        setExcuse(res.data[0].excuse);
      }
    )
  }

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      complete: false
    }
    setTodoList([...todoList, task]);
  }

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => id !== task.id));
  }

  const completeTask = (id) => {
    setTodoList(
      todoList.map((task) => {
        if (task.id === id) {
          return { ...task, complete: true };
        }
        else {
          return task;
        }
      })
    )

  }

  return (
    <div className="App">
      <AppContext.Provider value={{userName ,setUserName}}>
      <Router>
        <Navbar/>
      <div>
        <input type="text" onChange={handleEvent} />
        <button onClick={addTask}>Add task</button>
      </div>
      <div>
        {todoList.map((task) => {
          return (
            <Task className="App" taskName={task.taskName}
              id={task.id}
              deleteTask={deleteTask}
              completeTask={completeTask}
              complete={task.complete}
            />
          )
        })}
      </div>
      <div>
        <h2>Generate An Excuse</h2>
      </div>
      <div>
        <button onClick={() => fetchExcuse("family")}>Family</button>
        <button onClick={() => fetchExcuse("party")}>Party</button>
        <button onClick={() => fetchExcuse("children")}>Children</button>
      </div>
      <div>
        <h3>{excuse}</h3>
      </div>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<h1> PAGE NOT FOUND</h1>} />
        </Routes>
      </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
