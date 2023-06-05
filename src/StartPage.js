import { Link } from 'react-router-dom'
import {useState} from 'react'




const StartPage = ({userInput, handleSearch, tasks}) => {

    const [userName, setUserName] = useState('')

    const handleNameInput = () => {
        userInput(userName)
        
    }

    

    return ( 
        <div className="start-page">

            <div className="container">
                <img src="in.png" alt="" className="img" />

                <div className="welcome-text">
                    <h2>Welcome To Task</h2>
                    <p>The one place to organise and track your tasks</p>
                </div>

                <div className="login">
                    <input type="text" 
                    required
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder=" Enter your name here"
                    />
                    <Link to='/home'>
                        <button onClick={handleNameInput} >Get Started</button>
                    </Link>
                </div>
            </div>

        </div>
     );
}
 
export default StartPage;