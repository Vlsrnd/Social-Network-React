import React from 'react';
import loader from '../../assets/images/loader.gif';

const Preloader = (props) => {
  return (
  <div>
    <img src={loader} alt='load' width='100px' height='100px'></img>
  </div>
  )
};

export default Preloader;