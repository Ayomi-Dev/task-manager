import { useState } from 'react'
import TodoList from './TodoList'
import './category.css'


const Category = ({ tasks, handleDelete }) => {

    const [activeCategory, setActiveCategory] = useState(null);

    const handleCategory = category => {
        setActiveCategory(category);
    }
     const handleAllCategory = () => {
        setActiveCategory(null)
    }


    // selecting tasks based on their categories
    const selectedCategory = activeCategory ? tasks.filter(task => task.category === activeCategory) : tasks
       

    return ( 
        <div className="category">

            <div className="content">
                <div className={`cat-box ${activeCategory === null ? 'active': ''}`} onClick={handleAllCategory}>
                    <h3>All</h3>
                    
                </div>
                <div className={`cat-box ${activeCategory === 'Personal' ? 'active': ''}`} onClick={() => handleCategory('Personal')}>
                    <h3>Personal</h3>
                    
                </div>
                <div className={`cat-box ${activeCategory === 'Work' ? 'active': ''}`} onClick={() => handleCategory('Work')}>
                    <h3>Work</h3>
                   
                </div>
                <div className={`cat-box ${activeCategory === 'Study' ? 'active': ''}`} onClick={() => handleCategory('Study')}>
                    <h3>Study</h3>
                    
                </div>
                <div className={`cat-box ${activeCategory === 'Social' ? 'active': ''}`} onClick={() => handleCategory('Social')}>
                    <h3>Social</h3>
    
                </div>
            </div>

            <TodoList tasks= { selectedCategory } handleDelete = {handleDelete} />
        </div>
     );
}
 
export default Category;