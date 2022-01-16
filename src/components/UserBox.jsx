import React, { useEffect, useState } from 'react';
import { getUserByName } from '../utils/api';
import { Link } from 'react-router-dom';

const UserBox = ({username, setUser}) => {
    const [userObj, setUserObj] = useState({})

    useEffect(()=>{
        getUserByName(username).then((user)=>{
            setUserObj(user)
        })
    }, [username])

    return (
        <div className="user-box">
            <div className="user-box-img">
                <img src={userObj.avatar_url} src={userObj.username}></img>
            </div>
            <div className="user-box-name">
                <h2>{userObj.username}</h2>
                <h3>{userObj.name}</h3>
                <Link to="/"><button onClick={()=>{setUser(userObj.username)}}>Log in as {userObj.username}</button></Link>
            </div>
        </div>
    );
};

export default UserBox;