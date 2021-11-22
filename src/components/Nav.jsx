import React from 'react';
import { useState, useEffect } from 'react'
import { getCategories } from '../utils/api';

const Nav = ({ setCategory }) => {
    const [categories, setCategories] = useState([])

    useEffect(()=>{
        getCategories().then((categoriesFromServer) =>{
            setCategories(categoriesFromServer)
        })
    }, [])

    return (
        <nav className="nav">
            <button key='All'>All games</button>
            {categories.map((category)=>{
                return <button key={category.slug}>{category.slug}</button>
            })}
        </nav>
    );
};

export default Nav;