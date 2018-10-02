import React from 'react';
import Tile from './Tile.jsx';

function Main({ items, noItemsMessage }) {
  return (
    <div className='main_container'>
      <img className='main_img' src='./images/ludlow_or_crosby.jpg' />
      <a>Learn More</a>
      <div className='flex_container'>
        {items.length && !noItemsMessage ? items.map((item, i) => {
          return (
             <Tile key={i}
                   id={i}
                   type={item.type} 
                   style={item.style} 
                   clothing={item.clothing} 
                   country={item.country} 
                   material={item.material} 
                   img_url={item.img_url} 
                   hover_url={item.hover_url} />
          )
        }) : 'No Available Items'}
      </div>
    </div>
  );
}

export default Main;