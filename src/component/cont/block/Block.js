import React from 'react';
import Takeaway from './Takeaway';
import DisTakeaway from './DisTakeaway';
import { BlockList } from '../../../assets/blockList';
import Css from './Block.module.css';

function Block() {
  return (
    <div className={Css.block}>
      {
        BlockList.map((v, i) => {
          if (v.takeaway) {
            return <Takeaway key={i} info={v} />
          }
          return <DisTakeaway key={i} info={v} />
        })
      }
    </div>
  );
}

export default Block;