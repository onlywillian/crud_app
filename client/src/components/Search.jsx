import React from 'react';
import { BiSearch } from 'react-icons/bi';

import './Search.css';

const Search = () => {
    return ( 
        <div className="search center">
            <div className="search-box">
                <BiSearch />
                <input type="text" placeholder='Username'/>
            </div>
        </div>
     );
}
 
export default Search;