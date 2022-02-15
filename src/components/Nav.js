import React from 'react';
import { Link } from 'react-router-dom';

const Nav=()=>{
    return(
        <div>
            <ul className='nav-ul'>
                <li><Link to="/add">Add User</Link></li>
                <li><Link to="/update">Update User</Link></li>
                <li><Link to="/">Users List</Link></li>
            </ul>
        </div>
    )
}

export default Nav;