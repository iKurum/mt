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
        <svg className={['icon', `${Css.icon}`].join(' ')} aria-hidden='true'>
          <use xlinkHref='#icon--search'></use>
        </svg>
        <input type='text' placeholder='书亦烧仙草(外卖满25减2)' />
      </div>
      <svg className={['icon', `${Css.icon}`].join(' ')} aria-hidden='true'>
        <use xlinkHref='#icon-huatong'></use>
      </svg>
      <svg className={['icon', `${Css.icon}`].join(' ')} aria-hidden='true'>
        <use xlinkHref='#icon-jiashang'></use>
      </svg>
    </div>
  );
}

export default Search;