import React, { useRef, useEffect } from 'react';
import Mod from '../../hooks/mod/Mod';
import Css from './HotMod.module.css';

const hotMod = [
  { 'class': 'iconfont icon-zhanwei', 'name': '外卖' },
  { 'class': 'iconfont icon-zhanwei', 'name': '美食' },
  { 'class': 'iconfont icon-zhanwei', 'name': '酒店住宿' },
  { 'class': 'iconfont icon-zhanwei', 'name': '休闲/玩乐' },
  { 'class': 'iconfont icon-zhanwei', 'name': '电影/演出' }
];

const hotMore = [
  [
    { 'class': 'iconfont icon-zhanwei', 'name': '打车' },
    { 'class': 'iconfont icon-zhanwei', 'name': '丽人/美发' },
    { 'class': 'iconfont icon-zhanwei', 'name': '周边游/旅游' },
    { 'class': 'iconfont icon-zhanwei', 'name': '借钱/信用卡' },
    { 'class': 'iconfont icon-zhanwei', 'name': '火车票/机票' }
  ],
  [
    { 'class': 'iconfont icon-zhanwei', 'name': '免费领水果' },
    { 'class': 'iconfont icon-zhanwei', 'name': '袋鼠快跑' },
    { 'class': 'iconfont icon-zhanwei', 'name': '超市/药店' },
    { 'class': 'iconfont icon-zhanwei', 'name': '充值中心' },
    { 'class': 'iconfont icon-gengduo', 'name': '更多' }
  ]
];

function HotMod() {
  const modRef = useRef();
  const moreRef_f = useRef();
  const moreRef_t = useRef();

  useEffect(() => {
    modRef.current.setHotMod(hotMod);
    moreRef_f.current.setHotMod(hotMore[0]);
    moreRef_t.current.setHotMod(hotMore[1]);
  })

  return (
    <div className={Css.hotBox}>
      <Mod ref={modRef} cRef={modRef} />
      <Mod ref={moreRef_f} cRef={moreRef_f} />
      <Mod ref={moreRef_t} cRef={moreRef_t} />
    </div>
  );
}

export default HotMod;