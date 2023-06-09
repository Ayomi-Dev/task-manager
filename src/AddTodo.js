import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './addTodos.css'

import {v4 as uuidv4} from 'uuid'
uuidv4()


const AddTodos = ({ addTask }) => {
    const [taskName, setTaskName] = useState('')
    const [category, setCategory] = useState('');
    const [date, setDate] = useState('')
    const [startTime, setStartTime]= useState('')
    const [endTime, setEndTime] = useState('');
    const [description, setDescription] = useState('')
    

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault(); 

        const fullDate = new Date();
        const dateSet = fullDate.toLocaleDateString()
        const timeSet = fullDate.toLocaleTimeString()

        //setting each task property and updating them based on user input
        const taskValues = {
            id: uuidv4(),
            taskName, 
            date, 
            category, 
            startTime, 
            endTime, 
            description,
            dateSet,
            timeSet
        }

        
        addTask(taskValues);

        navigate('/home')

    }

    
    return ( 

        <>
            <div className="add-task">
                <h2>Create New Task</h2> 

                <form onSubmit={ handleSubmit }>

                    <div className="info">
                    <label htmlFor="">Task Name</label>
                    <input required
                        type="text"
                        value={taskName}
                        onChange={(e) => setTaskName(e.target.value.toUpperCase())}
                    />
                    </div>

                    <div className="info">
                        <label htmlFor="">Category</label>
                        <select value={category} onChange={(e) => setCategory(e.target.value)}>
                            <option value="">Select a Category</option>
                            <option value="Personal">Personal</option>
                            <option value="Work">Work</option>
                            <option value="Study">Study</option>
                            <option value="Social">Social</option>
                        </select>
                    </div>
            
                    <div className="info">
                        <label htmlFor="">Date & Time</label>
                        <input required
                            type="date" 
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        />
                    </div>

                    <div className="info sub">
                    <div className="sub-info">
                        <label htmlFor="">Start Time</label>
                        <input required
                            type="time"
                            value={startTime}
                            onChange={(e) => setStartTime(e.target.value)}
                        />             
                    </div>
                    <div className="sub-info">
                        <label htmlFor="">End Time</label>
                        <input required
                            type="time" 
                            value={endTime}
                            onChange={(e) => setEndTime(e.target.value)}
                        />
                    </div>
                    </div>

                    <div className="info">
                        <label htmlFor="">Description</label>
                        <textarea required value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                    </div>

                    {/* <div className="timeInfo" >
                        <p>Time Set: { timeSet }</p>
                        <p>Date set: { dateSet }</p>
                    </div> */}
                
                    <button type="submit">Add Task</button>    
                </form>
            </div>
        </>
        
     );
}
 
export default AddTodos;