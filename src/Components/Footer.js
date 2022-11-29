import { Counter } from "../features/counter/counter";
import {FontSize} from "../features/font/fontsize";
import {Theme} from "../features/theme/theme"
import Music from "./Music";
import { Playing } from "../features/playing/playing";


import { useSelector, useDispatch } from 'react-redux'

import React, { useState, useEffect } from 'react';

function Footer(props){

    // is music playing state?
    console.log("props footer", props)

    return (
        <footer className="footer p-2">

            <div className="row">

                {(props.activepage=="home" ? 
                    <>
                    <div className="col">
                        <div className="btn-group">
                        
                        
                    <Playing />
                    </div>
                        
                    
                    </div>
                    <div className="col text-center">
                        
                        <Music />
                    </div>
                    </>
                : "")}
                <div className="col text-end global-actions">
                    <div className="text-end">
                    <Theme />
                    <FontSize />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;