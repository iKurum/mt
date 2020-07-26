import React from 'react';
import BlockImg from './BlockImg';
import Css from './Block.module.css';

function Takeaway(props) {
  const { info } = props;

  return (
    <div className={Css.takeaway}>
      <h2>{info.title}</h2>
      <span className={Css.close}>x</span>
      <p>
        <span>{info.info.score}分</span>
        <span>月售{info.info.sales}</span>
        <span>配送￥{info.info.delivery}</span>
        <span>人均￥{info.info.per}</span>
        <span>{info.info.deliveryTime}</span>
      </p>
      <p>{info.preferential}</p>
      <p>
        {
          info.comments.map((v, i) => <span key={i}>{v}</span>)
        }
      </p>
      <BlockImg items={info.items} />
    </div>
  );
}

export default Takeaway;