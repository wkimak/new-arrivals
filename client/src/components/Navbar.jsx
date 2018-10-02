import React from 'react';
import { Route, Link, History } from 'react-router-dom';


function Navbar({ fetchData, navItems, history }) {

  const handleFetch = (url) => {
    fetchData(url);
    if(url !== 'new_arrivals' && url !== 'blog' && url !== 'company') {
      history.push(url);
    } else {
      history.push('new_arrivals');
    }
  }

  return (
    <div className='navbar_container'>
    <ul>
      { navItems.length ? navItems.map((item, i) => {
        return (
          <li key={i} onClick={ () => handleFetch(item.url) }  >
            {item.label}
          </li>
        )
      }) : null}
    </ul>
    </div>
  );
}

export default Navbar;