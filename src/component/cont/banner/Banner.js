import React, { useRef, useEffect, useState } from 'react';
import Css from './Banner.module.css';

const image = ['1.jpeg', '2.jpeg', '3.png', '4.png'];
let [s, num, l, h] = [image.length + 1, 0, 0, 0];
let [startX, endX] = [0, 0];

function Banner() {
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
        console.log(num, s);
        if (num < 0 || num >= s) {
          num = 0;
        }
        num++;

        img.current.style.transition = 'all 1s ease';
        if (num === 1) {
          img.current.style.transition = 'none';
        }
        setLeft(-l * (num - 1));
      }, 2000);

      return () => { clearInterval(t) };
    }
  })

  return (
    <div className={Css.banner} style={{ height: `${h}px` }}>
      <div ref={img} style={{ left: `${left}px` }}>
        {
          image.map((v, i) => {
            return <img
              src={`./assets/banner/${v}`}
              key={i}
              alt=''
              onTouchStart={e => {
                startX = e.touches[0].pageX;

                setIsRun(false);
              }}
              onTouchMove={e => {
                endX = e.touches[0].pageX;

                img.current.style.transition = 'none';
                if (endX - startX > 0) {
                  e.target.parentNode.style.left = `${
                    left === 0 ? left : left + endX - startX
                    }px`;
                } else if (endX - startX < 0) {
                  e.target.parentNode.style.left = `${
                    left === (-l * (s - 1)) ? left : left + endX - startX
                    }px`;
                }
              }}
              onTouchEnd={e => {
                img.current.style.transition = 'all .5s ease';
                // 右滑
                if (endX - startX > l / 3 && left !== 0) {
                  e.target.parentNode.style.left = `${left + l}px`;
                  num -= 2;
                } else if (0 < endX - startX < l / 3) {
                  e.target.parentNode.style.left = `${left}px`;
                }

                // 左滑
                if (endX - startX < -l / 3) {
                  e.target.parentNode.style.left = `${left - l}px`;
                  num++;
                } else if (-l / 3 < endX - startX < 0) {
                  e.target.parentNode.style.left = `${left}px`;
                }
                setIsRun(true);
              }}
            />
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
                    backgroundColor: i === (num - 1) ? 'rgb(237, 109, 61)' : '#ffffff'
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