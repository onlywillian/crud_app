import React from 'react';

import './Header.css';

const Header = () => {
    return ( 
        <header>
            <div className="header-info">
                <h1>Users</h1>
                <small className="users-number">38 Users</small>
            </div>

            <div className="new-user-button">
                <i className="icon"></i>
                <p>Invite User</p>
            </div>
        </header>
     );
}
 
export default Header;