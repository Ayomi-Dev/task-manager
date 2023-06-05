
import TodoList from "./TodoList";

import Navigation from './Navigation'
import Category from "./Category";

const Home = ({user, tasks, handleDelete}) => {

    return ( 
        <div className="home">
            <Navigation />            

            <div className="welcome-msg">
                <div className="heading">
                    <h2>Hello {user}, </h2>
                    <p>What would you like to get done</p>
                </div>  
            </div>

            <Category tasks={ tasks } handleDelete={ handleDelete } />

            {/* <TodoList tasks={tasks} handleDelete = {handleDelete} /> */}
        </div>
     );
}
 
export default Home;