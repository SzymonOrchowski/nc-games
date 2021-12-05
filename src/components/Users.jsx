import React from 'react';
import { useEffect, useState } from 'react';
import { getUsers } from '../utils/api';
import UserBox from './UserBox';
import UsersDisplayHeader from './UsersDisplayHeader';

const Users = ({setUser}) => {
    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(()=>{
        setIsLoading(true)
        getUsers().then((usersFromServer)=>{
            setUsers(usersFromServer)
            setIsLoading(false)
        })
    },[])

    return (
        <div className="main-display">
            {isLoading ? <div className="main-display-header-loading">Loading...</div> :
            <>
                <header>
                    <UsersDisplayHeader />
                </header>
                <main>
                    {users.map((user) => {
                        return <UserBox key={user.username} username={user.username} setUser={setUser}/>
                    })}
                </main>
            </>
            }
        </div>
    );
};

export default Users;