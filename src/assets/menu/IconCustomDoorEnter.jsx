import PropTypes from 'prop-types';
import React from 'react';

function IconCustomDoorEnter({ size, style }) {
  style = {
    ...style,
    fillOpacity: 1,
    stroke: '#FFF',
    strokeWidth: 5.000000e-02,
    strokeMiterlimit: 10,
  };
  const viewBox = `0 0 ${size.width} ${size.height}`;
  
  return (
    <svg width={size.width} height={size.height} viewBox={viewBox} version="1.1" xmlSpace="preserve"
         xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <g id="grid_system" />
      <g id="_icons">
        <g>
          <path
            width={size.width}
            height={size.height}
            style={style}
            d="M21,10h-2.6l0.3-0.3c0.4-0.4,0.4-1,0-1.4s-1-0.4-1.4,0l-2,2c-0.1,0.1-0.2,0.2-0.2,0.3c-0.1,0.2-0.1,0.5,0,0.8    c0.1,0.1,0.1,0.2,0.2,0.3l2,2c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4L18.4,12H21c0.6,0,1-0.4,1-1    S21.6,10,21,10z" />
          
          <path d="M18,16L18,16C18,16,18,16,18,16C18,16,18,16,18,16z" />
          
          <path
            width={size.width}
            height={size.height}
            style={style}
            d="M17,15c-0.6,0-1,0.4-1,1v0c0,0.6-0.4,1-1,1h-1V8.4c0-1.3-0.8-2.4-1.9-2.8L10.5,5H15c0.6,0,1,0.4,1,1c0,0.6,0.4,1,1,1    s1-0.4,1-1c0-1.7-1.3-3-3-3H5c0,0,0,0,0,0C4.9,3,4.8,3,4.7,3.1c0,0,0,0,0,0c-0.1,0-0.2,0.1-0.2,0.1c0,0,0,0,0,0c0,0,0,0-0.1,0.1    C4.3,3.3,4.2,3.4,4.2,3.5c0,0,0,0,0,0.1C4.1,3.6,4,3.7,4,3.8c0,0,0,0,0,0c0,0,0,0,0,0.1C4,3.9,4,4,4,4v14c0,0.4,0.3,0.8,0.6,0.9    l6.6,2.5c0.2,0.1,0.5,0.1,0.7,0.1c0.4,0,0.8-0.1,1.1-0.4c0.5-0.4,0.9-1,0.9-1.6V19h1c1.6,0,3-1.3,3-3C18,15.5,17.5,15,17,15z     M6,17.3V5.4l5.3,2C11.7,7.6,12,8,12,8.4V18c0,0,0,0,0,0l0,1.5L6,17.3z" />
        </g>
      </g>
    </svg>
  );
}

IconCustomDoorEnter.propTypes = {
  size: PropTypes.object,
  style: PropTypes.object,
};

export default IconCustomDoorEnter;