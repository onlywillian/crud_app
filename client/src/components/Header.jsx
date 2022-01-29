import React from 'react';
import { BiPlusCircle } from 'react-icons/bi';

import './Header.css';

const Header = () => {
    return ( 
        <header>
            <div className="header-info">
                <h1>Users</h1>
                <small className="users-number">38 Users</small>
            </div>

            <div className="new-user-button">
                <BiPlusCircle />
                <p>New User</p>
            </div>
        </header>
     );
}
 
export default Header;