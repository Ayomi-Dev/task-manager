import {Link} from 'react-router-dom'

const TodoList = ({ tasks, handleDelete }) => {

    return ( 
        <div className="todo-wrapper">

            <div className="todo-list">

            {tasks.map( (task) => (
                <div className="todos" key={ task.id }>
                    <div className="detail">
                        <h2 className="title">{task.taskName}</h2>
                        <p className="time">{task.startTime} - {task.endTime}</p>
                    </div>

                    <div className="timeInfo" >
                        <p> { task.timeSet } </p>
                        <p> { task.dateSet } </p>
                    </div>

                    <div className="action">
                        <Link to={`/details/${task.id}`}>
                            <i className="fa fa-pen-to-square"></i>
                        </Link>
                        
                        <i className="fa fa-trash" onClick = {()=> handleDelete(task.id)}></i>
                    </div>

                    

                    

                </div>
            ))}
                

            </div>
        </div>  
     );
}
 
export default TodoList;