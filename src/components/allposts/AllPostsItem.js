import React from 'react'
import classes from './allPostsItem.module.css'
import Card from '../ui/Card'
 // eslint-disable-next-line
import axios from 'axios'

function AllPostsItem(props) {
    return (
        <li className={classes.item}>
        <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
          <div className={classes.content}>
            <h3>{props.title}</h3>
            
            <p>{props.body}</p>
          </div>
          <div className={classes.actions}>
            <button className={classes.button1}>delete</button>
            <p>
                </p>
            <button className={classes.button1}>
                Modify
            </button>
          </div>
        </Card>
      </li>
    )
}

export default AllPostsItem
