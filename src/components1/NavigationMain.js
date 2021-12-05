import React from 'react'
import classes from './navigationMain.module.css'
import {Link} from 'react-router-dom'

function NavigationMain() {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                NadaMaalma
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>
                        Homepage</Link>
                        </li>
                        <li>
                        <Link to='/all-users'>
                        Allusers</Link>
                        </li>
                        
                </ul>
            </nav>
        </header>
    )
}

export default NavigationMain
