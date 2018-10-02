import React, { Component } from 'react';


class Tile extends Component {

  
  constructor(props) {
    super(props);

    this.state = { shotType: 'original' }
  }

  handleMouseEnter() {
    this.setState({ shotType: 'zoom' });
  }

  handleMouseLeave() {
    this.setState({ shotType: 'original'})
  }



  render() {
  const { id, type, style, clothing, country, material, img_url, hover_url } = this.props;
  return (
    <div className='tile_container' onMouseEnter={ () => this.handleMouseEnter() } onMouseLeave={ () => this.handleMouseLeave() }>
      <div className='tile_info'>
        <span>{type}</span>
        <span>{style}</span>
        <span>{clothing}</span>
        <span>{country}</span>
        <span>{material}</span>
        <a>shop now</a>
      </div>
      
      <img className={this.state.shotType === 'original' ? 'original_img' : id !== 0 ? 'zoom_img' : 'original_img'  } 
           src={this.state.shotType === 'original' ? `/images/${img_url}` : id === 0 ? `/images/${hover_url}` : `/images/${img_url}`} />    
    </div>
  );
 }
}

export default Tile;