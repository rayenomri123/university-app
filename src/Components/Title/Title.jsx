import React from 'react';
import './Title.css';


const Title = ({subTitle, title}) => {
  return (
    <div className='title'>
      <div>{subTitle}</div>
      <h2>{title}</h2>
    </div>
  );
}

export default Title;