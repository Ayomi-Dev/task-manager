import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './search.css'

const Search = ({ tasks }) => {
    const [searchValue, setSearchValue] = useState('');
    
    
    const [searchResults, setSearchResults] = useState('');

    const handleSearch = (e) => {
        setSearchValue(e.target.value)

        const filterSearch = tasks.filter(task => task.taskName.toLowerCase()
            .includes(e.target.value.toLowerCase()));


        if(e.target.value === '') {
            setSearchResults('');
        }
        else {
            setSearchResults(filterSearch);
        }
        
        
    }
    
    
    
    
    
    return ( 
        <>
            <div className="search">
                <input type="text"
                    value={ searchValue }
                    onChange={ handleSearch }
                    placeholder="Search tasks..."
                />
            </div>

            {searchResults.length === 0 && (
                <div className="not-found">
                    <p>No task found</p>
                </div>
            )}
            
            <div className="todo-wrapper">

            <div className="todo-list">
            
                {searchResults && searchResults.map( (task) => (
                    <Link to={`/details/${task.id}`}>
                    
                        <div className="todos" key= { task.id }>
                            <div className="search-detail">
                                <h2 className="title">{task.taskName}</h2>
                                <p className="time">{task.startTime} - {task.endTime}</p>
                            </div>
                        </div>

                    </Link>
                ))}
            
            </div>
            </div>  
    </>
 );
}
 
export default Search;