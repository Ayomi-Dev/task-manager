import { useNavigate } from 'react-router-dom'
import { useState } from 'react'




const StartPage = ({ userInput }) => {

    const [userName, setUserName] = useState('')
    const navigate = useNavigate()

    
    //updating username on the homepage
    const handleNameInput = (e) => {
        e.preventDefault();

        userInput(userName);

        navigate('/home');

    }

    

    return ( 
        <div className="start-page">

            <div className="container">
                <img src="in.png" alt="" className="img" />

                <div className="welcome-text">
                    <h2>Welcome To <em>Tasks.Me</em> </h2>
                    <p>The one place to organise and track your tasks.</p>
                </div>

                <form className="login" onSubmit={ handleNameInput }>
                    <input type="text" 
                    required
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder=" Enter your name here"
                    />
                    
                    <button>Get Started</button>
                   
                </form>
            </div>

        </div>
     );
}
 
export default StartPage;