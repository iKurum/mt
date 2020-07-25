import React from 'react';
import Css from './Search.module.css';

function Search() {
  return (
    <div className={Css.topCon}>
      <div>
        <p>成都</p>
        <p>阴 28℃</p>
      </div>
      <div className={Css.search}>
        <i className="iconfont icon--search"></i>
        <input type='text' placeholder='书亦烧仙草(外卖满25减2)' />
      </div>
      <i className="iconfont icon-huatong"></i>
      <i className="iconfont icon-jiashang"></i>
    </div>
  );
}

export default Search;