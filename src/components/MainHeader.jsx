import React, { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import { Link } from 'react-router-dom';

const MainHeader = ({setUser}) => {
    const { user } = useContext(UserContext)
    return (
        <header className="main-header">
            <div id="main-header-flex">
                <div id="main-header-title">
                    <h1>NC <span>Board Games</span></h1>
                </div>
                <div id="main-header-user">
                    {user === undefined ? 
                        <Link to="/users"><button className="main-header-logging-button">Log In</button></Link>
                        :
                        <>
                        <span>
                            Logged as: {user}
                        </span>
                        <button className="main-header-logging-button" onClick={() => setUser()}>Log Out</button>
                        </>
                    }
                </div>
            </div>
        </header>
    );
};

export default MainHeader;