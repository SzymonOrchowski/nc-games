import React from 'react';
import { useEffect, useState } from 'react';
import { getUsers } from '../utils/api';
import UserBox from './UserBox';
import UsersDisplayHeader from './UsersDisplayHeader';

const Users = ({setUser}) => {
    const [users, setUsers] = useState([])

    useEffect(()=>{
        getUsers().then((usersFromServer)=>{
            setUsers(usersFromServer)
        })
    },[])

    return (
        <div className="main-display">
             <header>
                <UsersDisplayHeader />
            </header>
            <main>
                {users.map((user) => {
                    return <UserBox key={user.username} username={user.username} setUser={setUser}/>
                })}
            </main>
        </div>
    );
};

export default Users;