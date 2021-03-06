import React, { useState, useImperativeHandle } from 'react';
import Css from './Mod.module.css';

const Top = React.forwardRef((_, cRef) => {
  const [hot, setHot] = useState([{ 'class': '', 'name': '' }]);

  useImperativeHandle(cRef, () => ({
    setHotMod: m => {
      setHot(m);
    }
  }));

  return (
    <div className={Css.Mod}>
      {
        hot.map((v, i) => {
          return (
            <div className={Css.Mod} key={i}>
              <svg className='icon' aria-hidden='true'>
                <use xlinkHref={v.class}></use>
              </svg>
              <span>{v.name}</span>
            </div>
          );
        })
      }
    </div>
  );
})

export default Top;