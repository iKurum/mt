import React, { useState, useImperativeHandle } from 'react';
import Css from './Loading.module.css';

const Loading = React.forwardRef((props, cRef) => {
  const [show, setShow] = useState(false);
  const { getData } = props;

  useImperativeHandle(cRef, () => ({
    show: () => {
      setShow(true);

      const t = setTimeout(() => {
        setShow(false);
        getData();
      }, 3000);
      return () => { clearTimeout(t) };
    }
  }))

  return (
    <>
      {
        show
          ?
          <div>
            < div className={Css.loading} >
              <svg className={['icon', `${Css.icon}`].join(' ')} aria-hidden='true'>
                <use xlinkHref='#icon-LoadingIndicator'></use>
              </svg>
            </div >
          </div >
          :
          ''
      }
    </>
  );
})

export default Loading;