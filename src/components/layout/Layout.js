import React from 'react'
import NavigationMain from '../../components1/NavigationMain'
import classes from './layout.module.css'

function Layout(props) {
    return (
        <div  >
           
           <NavigationMain/>
           <main className={classes.main}>
           {props.children} 
           </main>
        </div>
    )
}

export default Layout
