/** @name Layout */
import 'layout/fonts/index.css';
import 'layout/normalize/index.css';
import 'layout/scrollbar/index.css';

import 'layout/vars/colors/index.css';
import 'layout/vars/zIndex/index.css';
/** @name Plugins */
import 'assets/plugins/boostrap';
import 'assets/plugins/material-icons';

import React from 'react';
import ReactDOM from 'react-dom/client';
import {Routes} from './routes';
import {UserProvider} from "./context/user";
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
    <UserProvider>
        <Routes/>
    </UserProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
