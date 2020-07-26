import React, { useState, useRef, useEffect } from 'react';
import Css from './Block.module.css';

function BlockImg(props) {
    const [h, setH] = useState();
    const { items } = props;
    const imgBox = useRef();

    useEffect(() => {
        setH(imgBox.current.clientWidth);
    }, [])
    return (
        <div className={Css.blockImg}>
            {
                items.map((v, i) => {
                    return (
                        <div
                            ref={imgBox}
                            key={i}
                            style={{
                                backgroundImage: `url(assets/${v.img})`,
                                height: `${h}px`
                            }}
                        >
                            <p className={Css.price}>
                                <span>￥{v.price.a}</span>
                                <span>￥{v.price.b}</span>
                            </p>
                            <p className={Css.name}>{v.name}</p>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default BlockImg;