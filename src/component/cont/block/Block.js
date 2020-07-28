import React, { useContext, useRef, useEffect, useState, useCallback } from 'react';
import Takeaway from './Takeaway';
import DisTakeaway from './DisTakeaway';
import Loading from '../../../hooks/loading/Loading';
import { loadContext } from '../../../hooks/context';
import Css from './Block.module.css';

function Block() {
  const t = [];
  const [BlockList, setBlockList] = useState([]);
  const isload = useContext(loadContext);
  const load = useRef();
  const getData = useCallback(() => {
    fetch('blockList.json')
      .then(res => res.json())
      .then(d => {
        for (const i in d) {
          t.push(d[i]);
        }
        setBlockList(t);
      })
      .catch(err => {
        alert(err);
      })
  }, []);

  useEffect(() => {
    getData();
  }, [getData])

  useEffect(() => {
    if (isload) {
      load.current.show();
    }
  })

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
      <Loading ref={load} cRef={load} getData={getData} />
    </div>
  );
}

export default Block;