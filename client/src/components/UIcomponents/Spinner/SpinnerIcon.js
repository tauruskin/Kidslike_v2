import React from 'react';

const SpinnerIcon = () => {
  return (
    
    <svg 
     width="30px" height="30px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" xmlns="http://www.w3.org/2000/svg"
     style={{margin: "auto", background: "none", display: "block", shapeRendering: "auto"}} >
    <circle cx="50" cy="50" fill="none" stroke="#e4812f" stroke-width="10" r="35" stroke-dasharray="164.93361431346415 56.97787143782138">
    <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>
    </circle>
</svg>
  );
};

export default SpinnerIcon;