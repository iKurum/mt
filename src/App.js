import React, { useRef, useEffect, useCallback, useState } from 'react';
import Search from './component/search/Search';
import Top from './component/top/Top';
import HotMod from './component/hotMod/HotMod';
import Banner from './component/cont/banner/Banner';
import Block from './component/cont/block/Block';
import { loadContext } from './hooks/context';
import './index.css';

function App() {
  const [ isBottom, setIsBottom ] = useState(false);
  const app = useRef();
  const onScrollHandler = useCallback(e => {
    const [clientHeight, scrollHeight, scrollTop] =
      [
        e.path[0].clientHeight,
        e.path[0].scrollHeight,
        e.path[0].scrollTop
      ];
    setIsBottom(clientHeight + scrollTop === scrollHeight);
  }, []);

  useEffect(() => {
    const target = app.current;
    target.addEventListener('scroll', onScrollHandler);
    return () => { target.removeEventListener('scroll', onScrollHandler) };
  }, [onScrollHandler])

  return (
    <div ref={app}>
      <Search />
      <Top />
      <HotMod />
      <div className='context'>
        <Banner />
        <loadContext.Provider value={isBottom}>
          <Block />
        </loadContext.Provider>
      </div>
    </div>
  );
}

export default App;