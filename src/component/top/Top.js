import React, { useEffect, useRef } from 'react';
import Mod from '../../hooks/mod/Mod';
import Css from './Top.module.css';

const hotList = ['下午茶', '蔬菜', '限时秒杀', '川西坝子', '火锅'];
const hotMod = [
  { 'class': 'iconfont icon-richscan_icon', 'name': '扫一扫' },
  { 'class': 'iconfont icon-fukuanma', 'name': '付款码' },
  { 'class': 'iconfont icon-zihangche', 'name': '骑车' },
  { 'class': 'iconfont icon-chagongjiao', 'name': '查公交' }
];

function Top() {
  const modRef = useRef();

  useEffect(() => {
    modRef.current.setHotMod(hotMod);
  })

  return (
    <>
      <div className={Css.hotSearch}>
        <p>热搜：</p>
        <ul>
          {
            hotList.map((v, i) => {
              return <li key={i}>{v}</li>
            })
          }
        </ul>
      </div>
      <div className={Css.hotKey}>
        <Mod ref={modRef} cRef={modRef} />
      </div>
    </>
  );
}

export default Top;