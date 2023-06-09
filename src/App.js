import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import React,  { useEffect, useState } from 'react'
import './App.css';
import StartPage from './StartPage';
import Home from './Home'; 

import AddTodos from './AddTodo';

import TodoDetails from './TodoDetails';
import './todoDetails.css'
import Search from './Search';


function App() {

  const [tasks, setTasks] = useState([]);
  const [userName, setUserName] = useState('');

  

  useEffect(() => {
    //retrieving updated data from browser on refresh
    const storedTask = JSON.parse(localStorage.getItem('tasks')) 
    
    if(storedTask){
      setTasks(storedTask);
    }

      //updating user name on refresh
      const storedName = JSON.parse(localStorage.getItem('user')) 

      if(storedName){
        setUserName(storedName)
      }
  

  }, []);


  //updating username on input and storing in the browser
  const nameValue = (name) => {
    setUserName(name);

    localStorage.setItem('user', JSON.stringify(name))
  }

  //adding tasks in the array and storing in the browser
  const addTask = ( task ) => {

    setTasks([...tasks, task])

    localStorage.setItem('tasks', JSON.stringify([...tasks, task]));

  }

  //deleting tasks w.r.t their id
  const handleDelete = (id) => {
    setTasks(tasks.filter(task => task.id !== id))

    localStorage.setItem('tasks', JSON.stringify(tasks.filter(task => task.id !== id)));
  }

  //editing task based on task selected by id
  const editTask = (editedTask) => {
    setTasks(tasks.map(task => task.id === editedTask.id ? editedTask : task))
    
    localStorage.setItem('tasks', JSON.stringify(tasks.map(task => task.id === editedTask.id ? editedTask : task)));
  }

  

  return (
    <Router>
      <div className="App">

        <Routes>
          <Route path='/' element= { <StartPage tasks={tasks} userInput={nameValue} /> }></Route>
          
          <Route path='/home' element= { <Home user = { userName } 
           tasks = { tasks } 
           handleDelete = {handleDelete} /> }>
          </Route>

          <Route path='/create-task' element= { <AddTodos addTask={ addTask } tasks={ tasks } /> }></Route>

          <Route path='/details/:id' element= { <TodoDetails handleDelete = {handleDelete} tasks= { tasks } editTask = { editTask } /> }></Route>


          <Route path='/search' element={ <Search tasks = { tasks } />} ></Route>
        </Routes>

      </div>
    </Router>
        
   
  );
}

export default App;
