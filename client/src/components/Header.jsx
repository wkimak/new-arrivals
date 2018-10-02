import React from 'react';

function Header() {
  return (
    <div className='header_container'>
      <div className='header_inner_container'>
        <input type='text' placeholder='Search' />
        <a href='/'><img src='./images/jcrew_logo.svg' alt='JCrew Logo' /></a>
        <div className='links_container'>
          <span>STORES</span>
          <span>SIGN IN</span>
          <span>BAG</span>
        </div>
      </div>
    </div>
  );
}

export default Header;