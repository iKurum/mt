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
        <div>
          <p className={Css.dtPrice}>
            <span>
              <span>￥</span>
              {info.items.price.a}
            </span>
            <span>￥{info.items.price.b}</span>
            <span>{info.preferential}</span>
          </p>
          <div>{info.distance}</div>
          <div className={Css.close}>x</div>
        </div>
      </div>
      <BlockImg items={info.items} isTake={info.takeaway} />
    </div>
  );
}

export default DisTakeaway;