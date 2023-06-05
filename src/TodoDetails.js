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
            <Navigation />
            <div className="details">

                {task ? (
                    editMode ? ( <EditTodo task = {task} handleUpdatedTask = { handleUpdatedTask } cancelEdit = { cancelEdit } />
                        ) :
                        <div className="task-desc" key={task.id}>
                            <h2>{task.taskName}</h2>
                            <p> {task.description}</p>
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