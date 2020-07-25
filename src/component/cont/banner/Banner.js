import React, { useRef, useEffect, useState } from 'react';
import Css from './Banner.module.css';

const image = ['1.jpeg', '2.jpeg', '3.png', '4.png'];
let [num, l] = [0, 0];

function Banner() {
  const [left, setLeft] = useState(0);
  const img = useRef();

  const move = () => {
    img.current.style.transition = 'all 1s ease';
    num++;
    if (num === 1) {
      img.current.style.transition = 'none';
      setLeft(0);
    }
    setLeft(-l * (num - 1));

    if (num === image.length) {
      num = 0
    }
  }

  useEffect(() => {
    l = img.current.clientWidth / image.length;
    image.push(image[0]);
  }, [])

  useEffect(() => {
    const t = setInterval(move, 2000);
    return () => clearInterval(t);
  })

  return (
    <div className={Css.banner}>
      <div ref={img} style={{ left: `${left}px` }}>
        {
          image.map((v, i) => {
            return <img src={require(`../../../assets/banner/${v}`)} key={i} alt='' />
          })
        }
      </div>
    </div>
  );
}

export default Banner;