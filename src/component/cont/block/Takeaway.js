import React from 'react';
import Css from './Block.module.css';

function Takeaway(props) {
  const { info } = props;
  console.log(info);
  return (
    <div className={Css.takeaway}>
      <h2>{info.title}</h2>
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
    </div>
  );
}

export default Takeaway;