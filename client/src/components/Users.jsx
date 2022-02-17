import React, { useEffect, useState } from 'react';
// import { BiCaretDown } from 'react-icons/bi';
import axios from 'axios';

import './Users.css';
import User from './User';

const Users = () => {
    const [data, setData] = useState([]);
    
    useEffect(async () => {
        const newUsers = await axios.get('http://localhost:3333/database/users/all');
        
        setData(newUsers.data.users);
    }, []);
    
    return ( 
        <div className='users'>
            <div className="fields">
                {data.map(user => (
                    <User id={user._id} name={user.name} email={user.email}
                        password={user.password} createdAt={user.createdAt}/>
                ))}
            </div>
        </div>
     );
}
 
export default Users;