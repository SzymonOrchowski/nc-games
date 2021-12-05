import React, { useEffect, useState } from 'react';
import { getUsers, getUserByName } from '../utils/api';
import { Link } from 'react-router-dom';

const UserBox = ({username, setUser}) => {
    const [userObj, setUserObj] = useState({})

    useEffect(()=>{
        getUserByName(username).then((user)=>{
            setUserObj(user)
        })
    }, [])

    return (
        <div>
            <h2>{userObj.username}</h2>
            <h3>{userObj.name}</h3>
            <img src={userObj.avatar_url}></img>
            <Link to="/"><button onClick={()=>{setUser(userObj.username)}}>Log in as {userObj.username}</button></Link>
        </div>
    );
};

export default UserBox;