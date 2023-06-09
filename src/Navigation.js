import { Link } from 'react-router-dom'



const Navigation = ({ tasks }) => {

    const counter = tasks.length
    

    return (
        <div className="navigation">
            <div className="nav-icons">
                <Link to='/home'>
                    <i className="fa fa-home"></i>
                </Link>
                
                
                <Link to='/search' >
                    <i className="fa fa-search"></i>
                </Link>
                

                <Link to='/'>
                    <i className="fa fa-user"></i>
                </Link>

                <div className="notification">
                    <i className="fa fa-bell"></i>
                    <div className="counter">{ counter }</div>
                </div>
                    
            </div>
        </div>
    )
}

export default Navigation;