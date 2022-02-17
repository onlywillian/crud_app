import React from 'react';

import './User.css';

const User = ({id, name, email, password, createdAt}) => {
    return ( 
        <div className='user'>
           <div className="id">{id}</div>
           <div className="name">{name}</div>
           <div className="email">{email}</div>
           <div className="pass">{password}</div>
           <div className="created-at">{createdAt}</div>
        </div>
     );
}
 
export default User;