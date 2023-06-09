import { useParams, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import EditTodo from './EditTodo'
import Navigation from './Navigation'

const TodoDetails = ({handleDelete, tasks, editTask}) => {
    const { id } = useParams()
    const navigate = useNavigate()

    const [editMode, setEditMode] = useState(false)

    const task = tasks.find((task) => task.id === id)
    
    const handleTaskDelete = () => {
        handleDelete(task.id)

        navigate('/home')
    }
    const handleUpdatedTask = (updatedTask) => {
        editTask(updatedTask);

        setEditMode(false)
    }
    const handleEdit = () => {
        setEditMode(true)
    }
    const cancelEdit = ()=> {
        setEditMode(false);
    }



    return (  
        <>
            <Navigation tasks = { tasks } />

            <div className="details">

                {task ? (
                    editMode ? ( <EditTodo task = {task} handleUpdatedTask = { handleUpdatedTask } cancelEdit = { cancelEdit } />
                        ) :
                        <div className="task-desc" key={task.id}>
                            <h2><span>{ task.taskName }</span> </h2>
                            <p className='task-detail'><span>Description:</span> {task.description}</p>
                            <p><span>Task Date & Time:</span> { task.date }</p>
                            <p><span>Duration:</span> { task.startTime } - { task.endTime }</p>
                            <p><span>Category:</span> { task.category }</p>
                            <p><span>Date set:</span> { task.dateSet }</p>
                            <p><span>Time set:</span> { task.timeSet }</p>
                        
                            <div className="cta">
                                <button onClick={ handleEdit }>Edit Task</button>
                                <button onClick={ handleTaskDelete }>Delete Task</button>
                            </div>
                        </div>
                     
                    ) : <p>Loading....</p>
                }

            </div>
        </>
        
    );
}
 
export default TodoDetails;