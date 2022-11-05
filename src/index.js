import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import RouteTest from './RouteTest'

ReactDOM.render(
    <div>
        <p>#Test index.js ={'>'} Hello,React</p>
        <App/>
        <RouteTest/>
    </div>,
    document.getElementById('root')
);