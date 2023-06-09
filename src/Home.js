import { Link } from 'react-router-dom';
import Navigation from './Navigation'
import Category from "./Category";
import './Home.css'

const Home = ({user, tasks, handleDelete}) => {
    
    return ( 
        <div className="home">
            <Navigation tasks = { tasks } />            
            
            <Link to='/create-task'>
                <i className="fa fa-plus"></i>
            </Link>

            <div className="welcome-msg">
                <div className="heading">
                    <h2>Hello {user}, </h2>
                    <p className='head'>What are your schedules for today?</p>
                    <p>Take track and streamline your task management.</p>
                </div>
                
            </div>

            <Category tasks={ tasks } handleDelete={ handleDelete } />

            
        </div>
     );
}
 
export default Home;