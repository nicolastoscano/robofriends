import React from 'react';

const Scroll = (props) => { 
  return (
    <div style={{overflowY: 'scroll', border: '1px solid black', heiight: '500px'}}>
      {props.children}
    </div>
  ) 
};

exportdefaultScroll;