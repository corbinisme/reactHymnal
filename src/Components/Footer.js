import { Counter } from "../features/counter/counter";
import {FontSize} from "../features/font/fontsize";
import {Theme} from "../features/theme/theme"
import Music from "./Music";
import { Playing } from "../features/playing/playing";

import { useSelector, useDispatch } from 'react-redux'

import React, { useState, useEffect } from 'react';

function Footer(props){

    // is music playing state?


    return (
        <footer className="footer">
            <div className="row">
                <div className="col">
                    <div className="btn-group">
                    <Theme />
                    
                   <Playing />
                   </div>
                    
                   
                </div>
                <div className="col text-center">
                    
                    <Music />
                </div>
                <div className="col text-end">
                    
                    <FontSize />
                </div>
            </div>
        </footer>
    )
}

export default Footer;