import React, { useState } from 'react';
import { BiCaretDown } from 'react-icons/bi';

import './Users.css';

const Users = () => {
    const [users, setUsers] = useState([
        {
            id: 89765415378,
            name: 'Willian',
            lastName: 'Andrade',
            email: 'example@gmail.com',
            password: 'example123',
            createdAt: '28 01 2022 : 10 15 AM',
        }
    ]);

    return ( 
        <div className="users center">
            <table>
                <tr className='fields'>
                    <td>ID <BiCaretDown /></td>
                    <td>Name <BiCaretDown /></td>
                    <td>lastName <BiCaretDown /></td>
                    <td>Email <BiCaretDown /></td>
                    <td>Password <BiCaretDown /></td>
                    <td>CreatedAt <BiCaretDown /></td>
                </tr>
                {
                    users.map(user => (
                        <tr>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.lastName}</td>
                            <td>{user.email}</td>
                            <td>{user.password}</td>
                            <td>{user.createdAt}</td>
                        </tr>
                    ))
                }
            </table>
        </div>
     );
}
 
export default Users;