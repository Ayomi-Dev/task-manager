import { Link } from 'react-router-dom'



const Navigation = () => {

    return (
        <div className="navigation">
            <div className="nav-icons">
                <Link to='/home'>
                    <i className="fa fa-home"></i>
                </Link>
                
                <Link to='/category'>
                    <i className="fa fa-list-check"></i>
                </Link>

                <Link to='/create-task'>
                    <i className="fa fa-plus"></i>
                </Link>

                <i className="fa fa-search"></i>

                <Link to='/'>
                    <i className="fa fa-user"></i>
                </Link>
                    
            </div>
        </div>
    )
}

export default Navigation;