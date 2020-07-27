import React, { useRef, useEffect } from 'react';
import Mod from '../../hooks/mod/Mod';
import Css from './HotMod.module.css';

const hotMod = [
  { 'class': '#icon-waimai', 'name': '外卖' },
  { 'class': '#icon-meishi', 'name': '美食' },
  { 'class': '#icon-jiudianzhusu', 'name': '酒店住宿' },
  { 'class': '#icon-ziyuan', 'name': '休闲/玩乐' },
  { 'class': '#icon-dianying2', 'name': '电影/演出' }
];

const hotMore = [
  [
    { 'class': '#icon-dache_fill', 'name': '打车' },
    { 'class': '#icon-meifa', 'name': '丽人/美发' },
    { 'class': '#icon-chaoshigouwu', 'name': '超市/药店' },
    { 'class': '#icon-xinyongqia', 'name': '借钱/信用卡' },
    { 'class': '#icon-jipiaohuochepiao', 'name': '火车票/机票' }
  ],
  [
    { 'class': '#icon-guoshuSVG', 'name': '免费领水果' },
    { 'class': '#icon-chongzhizhongxin', 'name': '充值中心' },
    { 'class': '#icon-gifts', 'name': '免费领福利' },
    { 'class': '#icon-chongwu', 'name': '宠物' },
    { 'class': '#icon-gengduo', 'name': '更多' }
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