import React, { useRef, useEffect, useState } from 'react';
import Css from './Banner.module.css';

const image = ['1.jpeg', '2.jpeg', '3.png', '4.png'];
let [s, num, l, h] = [image.length + 1, 0, 0, 0];

function Banner() {
  const [startX, setStartX] = useState(0);
  const [endX, setEndX] = useState(0);
  const [isRun, setIsRun] = useState(true);
  const [left, setLeft] = useState(0);
  const img = useRef();

  useEffect(() => {
    l = img.current.clientWidth / image.length;
    h = img.current.clientHeight;
    image.push(image[0]);
  }, [])

  useEffect(() => {
    if (isRun) {
      const t = setInterval(() => {
        if (num < 0) {
          num = 0;
        }
        num++;

        img.current.style.transition = 'all 1s ease';
        if (num === 1) {
          img.current.style.transition = 'none';
        }
        setLeft(-l * (num - 1));

        if (num === s) {
          num = 0;
        }
      }, 2000);

      return () => { clearInterval(t) };
    }
  })

  return (
    <div className={Css.banner} style={{ height: `${h}px` }}>
      <div
        ref={img}
        style={{ left: `${left}px` }}
        onTouchStart={e => {
          setIsRun(false);
          setStartX(e.touches[0].pageX);
        }}
        onTouchMove={e => {
          const t = left;
          setEndX(e.touches[0].pageX);

          const m = t + endX - startX;
          if (m <= 0 && num !== 0 && num !== 4) {
            e.target.parentNode.style.left = `${m}px`;
          }
        }}
        onTouchEnd={() => {
          if (endX - startX > 0) {
            num -= 2;
          }
          setIsRun(true);
        }}
      >
        {
          image.map((v, i) => {
            return <img src={`./assets/banner/${v}`} key={i} alt='' />
          })
        }
      </div>
      <div className={Css.numUl}>
        <ul>
          {
            [...Array(s - 1)].map((_, i) => {
              if (i === 0 && num === 5) {
                return (
                  <li
                    key={i}
                    style={{ backgroundColor: 'rgb(237, 109, 61)'}}
                  ></li>
                );
              }
              return (
                <li
                  key={i}
                  style={{
                    backgroundColor: i === num - 1 ? 'rgb(237, 109, 61)' : '#ffffff'
                  }}
                ></li>
              );
            })
          }
        </ul>
      </div>
    </div>
  );
}

export default Banner;