import React from 'react';
import Navigator from 'react.cordova-navigation_controller';
// Learn more about the Navigator: https://www.npmjs.com/package/react.cordova-navigation_controller
import './App.scss';

export default class Header extends React.Component {

    render() {
    	return(
    		<header className="App-header">
            {/*
            <img src={logoCordova} className="App-logo-cordova" alt="logo react" />
                <img src={logoReact} className="App-logo" alt="logo cordova" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
               </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
             </a>
            */}
            
                <button className="btn btn-secondary">&equiv;</button>
                <select className='form-control'>
                    <option value="1">Select</option>
                </select>
                <div className="btn-group">
                    <button className="btn btn-secondary">
                        <i className="fa fa-search"></i>
                    </button>
                    <button className="btn btn-secondary">
                        #
                    </button>
                </div>
            
            </header>
            )
    }
 }