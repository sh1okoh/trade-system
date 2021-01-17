import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';

const MOUNT_NODE = document.getElementById('root');

if (!MOUNT_NODE) {
  throw new Error('<div id="root" /> not foun');
}

const render = () => {
  ReactDOM.render(
    <App />,
    MOUNT_NODE
  );
}

render();
