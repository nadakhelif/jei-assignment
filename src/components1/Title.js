import React from 'react'
import classes from './title.module.css'

function Title() {
    return (
        <div >
           <div className={classes.date}>
               4/12/2021
            </div> 
           <h1 className={classes.titre}>Nada's Site</h1>
        </div>
    )
}

export default Title
