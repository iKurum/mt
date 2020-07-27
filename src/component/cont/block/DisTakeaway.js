import React from 'react';
import BlockImg from './BlockImg';
import Css from './Block.module.css';

function DisTakeaway(props) {
  const { info } = props;

  return (
    <div className={Css.disTakeaway}>
      <div>
        <h2>{info.title}</h2>
        <p>{info.comments}</p>
        <p className={Css.dtPrice}>
          <span>
            <span>￥</span>
            {info.items.price.a}
          </span>
          <span>￥{info.items.price.b}</span>
          <span>{info.preferential}</span>
          <span>
            {info.distance}
            <span className={Css.close}>x</span>
          </span>
        </p>
      </div>
      <BlockImg items={info.items} isTake={info.takeaway} />
    </div>
  );
}

export default DisTakeaway;