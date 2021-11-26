import React from 'react';
import { Link } from 'react-router-dom'

const Nav = ({categories, setCategory, isLoading}) => {
    return (isLoading ? <nav className="nav">Loading categories...</nav> :
        <nav className="nav">
            
            <Link key='all' to='/' category='all'><button onClick={()=>{setCategory('all')}}>all games</button></Link>
            
            {categories.map((category)=>{
                const route = `category/${category}`
                return <Link key={category} to={route} category={category}><button onClick={()=>{setCategory(category)}}>{category}</button></Link>
            })}

        </nav>
    );
};

export default Nav;