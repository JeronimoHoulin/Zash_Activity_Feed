import React from 'react';

import "./header.css"

import zash_logo from '../Content/zash_logo_txt.png'

export function Header() {
    return (
        <header className='header'>

            <div className='logoname'>

                <img src={zash_logo} alt="cg logo" className='logopic'/>

                <h1 className='activityfeed'>Activity Feed</h1>

            </div>  

        </header>
    );
}