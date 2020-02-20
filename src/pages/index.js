import React from 'react';

import logoReact from '../logo.svg';
import logoCordova from '../logo-cordova.png';
import Header from "../Header";

export default class Index extends React.Component {

    render() {
        return <div className="App">
           <Header />
            <main>
                Content
            </main>
        </div>
    }
}