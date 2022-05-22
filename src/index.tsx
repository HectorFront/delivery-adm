/** @name ResetCSS */
import './normalize.css';
/** @name ScrollBarCSS */
import './scrollbar.css';
/** @name Fonts */
import './fonts.css';
/** @name MaterialIcons */
import 'material-icons/iconfont/material-icons.css';
/** @name Bootstrap */
import '@popperjs/core';
import 'bootstrap/dist/js/bootstrap.min';
import 'bootstrap/dist/css/bootstrap.min.css';

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
