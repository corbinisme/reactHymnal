import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import * as serviceWorker from './serviceWorker';
import 'cordova_script';
import 'bootstrap/dist/css/bootstrap.min.css';

//import 'font-awesome/css/css/font-awesome.min.css';
document.addEventListener('deviceready', () => {

    ReactDOM.render(
        <div>
            <App cordovaWork={true} />
        </div>,
        document.getElementById('root')
    );
}, false);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
