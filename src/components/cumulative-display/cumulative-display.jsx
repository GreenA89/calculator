import React from 'react';
import './cumulative-display.css';

const CumulativeDisplay = (props) => {
    return (
      <div className='cumulative-display'>
        {props.cumulative}
      </div>
    )
  }

  export default CumulativeDisplay;