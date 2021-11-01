/** @name ResetCSS */
import './normalize.css';
/** @name ScrollBarCSS */
import './scrollbar.css';
/** @name Fonts */
import './fonts.css';
/** @name MaterialIcons */
import 'material-icons/iconfont/material-icons.css';
/** @name Bootstrap */
import 'bootstrap/dist/js/bootstrap.min';
import 'bootstrap/dist/css/bootstrap.min.css';

import dotenv from 'dotenv';
import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import reportWebVitals from './reportWebVitals';
dotenv.config({ path: '../.env' });

ReactDOM.render(<Routes/>, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
