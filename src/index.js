import React from 'react';
import ReactDOM from 'react-dom';

import Search from './component/search/Search';
import Top from './component/top/Top';
import HotMod from './component/hotMod/HotMod';
import Cont from './component/cont/Cont';

import './index.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Search />
    <Top />
    <HotMod />
    <Cont />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
