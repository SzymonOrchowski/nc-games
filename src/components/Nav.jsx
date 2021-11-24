import React from 'react';

import { Link } from 'react-router-dom'

const Nav = ({categories, setCategory}) => {
    return (
        <nav className="nav">
            <Link key='all' to='/' category='all'><button onClick={()=>{setCategory('all')}}>All games</button></Link>
            {categories.map((category)=>{
                const route = `category/${category.slug}`
                return <Link key={category.slug} to={route} category={category.slug}><button onClick={()=>{setCategory(category.slug)}}>{category.slug}</button></Link>
            })}
        </nav>
    );
};

export default Nav;