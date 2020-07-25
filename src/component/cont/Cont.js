import React from 'react';
import Banner from './banner/Banner';
import Block from './block/Block';
import Css from './Cont.module.css';

function Cont() {
  return (
    <div className={Css.context}>
      <Banner />
      <Block />
    </div>
  );
}

export default Cont;