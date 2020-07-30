import React, { useRef, useEffect, useState } from 'react';
import Css from './Banner.module.css';

const image = ['1.jpeg', '2.jpeg', '3.png', '4.png'];
let [s, num, l, h] = [image.length + 1, 0, 0, 0];
let [startX, endX] = [0, 0];

function Banner() {
  const [active, setActive] = useState(0);
  const [isRun, setIsRun] = useState(true);
  const [left, setLeft] = useState(0);
  const img = useRef();
  const ulRef = useRef();

  useEffect(() => {
    l = img.current.clientWidth / image.length;
    h = img.current.clientHeight;
    image.push(image[0]);
  }, [])

  useEffect(() => {
    if (isRun) {
      const t = setInterval(() => {
        if (num < 0 || num >= s) {
          num = 0;
        }

        img.current.style.transition = 'all 1s ease';
        if (num === 0) {
          img.current.style.transition = 'none';
        }
        setActive(num === (s - 1) ? 0 : num);
        setLeft(-l * num);

        num++;
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
                  // 右滑
                  e.target.parentNode.style.left = `${
                    left === 0
                      ?
                      -l * (s - 1) + endX - startX
                      :
                      left + endX - startX
                    }px`;
                } else if (endX - startX < 0) {
                  // 左滑
                  e.target.parentNode.style.left = `${
                    left === -l * (s - 1)
                      ?
                      endX - startX
                      :
                      left + endX - startX
                    }px`;
                }
              }}
              onTouchEnd={e => {
                img.current.style.transition = 'all .2s ease';
                // 右滑
                if (endX - startX > (l / 3)) {
                  if (left === 0) {
                    e.target.parentNode.style.left = `${-l * (s - 2)}px`;
                    setActive(s - 2);
                    num = s - 2;
                  } else {
                    e.target.parentNode.style.left = `${left + l}px`;
                    setActive(num - 2);
                    num -= 2;
                  }
                }
                if (0 < endX - startX && endX - startX < (l / 3)) {
                  if (left === 0) {
                    e.target.parentNode.style.left = `${-l * (s - 1)}px`;
                    num = s - 1;
                  } else {
                    e.target.parentNode.style.left = `${left}px`;
                  }
                }

                // 左滑
                if (endX - startX < (-l / 3)) {
                  if (left === -l * (s - 1)) {
                    e.target.parentNode.style.left = `${-l}px`;
                    setActive(1);
                    num = 2;
                  } else {
                    e.target.parentNode.style.left = `${left - l}px`;
                    setActive(num > s - 2 ? 0 : num++);
                  }
                }
                if ((-l / 3) < endX - startX && endX - startX < 0) {
                  e.target.parentNode.style.left = `${
                    left === -l * (s - 1) || 0
                      ?
                      0
                      :
                      left
                    }px`;
                }

                setIsRun(true);
              }}
            />
          })
        }
      </div>
      <div className={Css.numUl}>
        <ul ref={ulRef}>
          {
            [...Array(s - 1)].map((_, i) => <li key={i} className={i === active ? Css.active : ''}></li>)
          }
        </ul>
      </div>
    </div>
  );
}

export default Banner;