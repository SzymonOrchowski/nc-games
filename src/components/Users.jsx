import React from 'react';
import { useEffect, useState } from 'react';
import { getUsers } from '../utils/api';
import UserBox from './UserBox';

const Users = ({setUser}) => {
    const [users, setUsers] = useState([])

    useEffect(()=>{
        getUsers().then((usersFromServer)=>{
            setUsers(usersFromServer)
        })
    },[])

    return (
        <div>
            <ul>
                {users.map((user) => {
                    return <li key={user.username}>
                        <UserBox username={user.username} setUser={setUser}/>
                    </li>
                })}
            </ul>
        </div>
    );
};

export default Users;