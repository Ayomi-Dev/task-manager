import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import StartPage from './StartPage';
import Home from './Home'; 
import './Home.css'
import AddTodos from './AddTodo';
import './addTodos.css'
import TodoDetails from './TodoDetails';
import './todoDetails.css'
import { useState } from 'react';





function App() {

  const [tasks, setTasks] = useState([]);
  const [userName, setUserName] = useState('');

  const nameValue = (name) => {
    setUserName(name)
  }

  const addTask = ( task ) => {

    setTasks([...tasks, task])

    console.log(tasks)
  }

  const handleDelete = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const editTask = (editedTask) => {
    setTasks(tasks.map(task => task.id === editedTask.id ? editedTask : task))
  }
  
  return (
    <Router>
      <div className="App">

        <Routes>
          <Route path='/' element= { <StartPage tasks={tasks} userInput={nameValue} /> }></Route>
          
          <Route path='/home' element= { <Home user = { userName }  tasks = { tasks } handleDelete = {handleDelete} />}></Route>

          <Route path='/create-task' element= { <AddTodos addTask={ addTask } /> }></Route>

          <Route path='/details/:id' element= { <TodoDetails handleDelete = {handleDelete} tasks= { tasks } editTask = { editTask } /> }></Route>

        </Routes>

      </div>
    </Router>
        
   
  );
}

export default App;
