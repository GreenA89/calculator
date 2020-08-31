import React from 'react';
import './display.css';

const Display = (props) => {
    return (
      <div className='display' id='display'>
        {props.display}
      </div>
    )
  }

  export default Display;