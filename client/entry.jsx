import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import App from './App';
import AppRouter from './Router';

render(<AppRouter />, document.getElementById('app'));
