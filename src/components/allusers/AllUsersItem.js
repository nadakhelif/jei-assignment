import React from "react";
import Card from "../ui/Card";
import classes from "./allUsersItem.module.css";
import { Link } from "react-router-dom";

function AllUsersItem(props) {
  const nbruser=props.id;
  function NumberUser(){
    if (nbruser===1)
    {
      return(
      <Link to="/user/1">
        <button>Visit Posts</button>
      </Link>)
    }
    if (nbruser===2)
    {
      return(<Link to="/user/2">
        <button>Visit Posts</button>
      </Link>)
    }
    if (nbruser===3)
    {
      return(
      <Link to="/user/3">
        <button>Visit Posts</button>
      </Link>)
    }
    if (nbruser===4)
    {
      return(
      <Link to="/user/4">
        <button>Visit Posts</button>
      </Link>)
    }
    
  }
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.content}>
          <h3>{props.name}</h3>
          <address>{props.address}</address>
          <p>{props.phone}</p>
        </div>
        <div className={classes.actions}>
          
          <NumberUser/>
          

        </div>
      </Card>
    </li>
  );
}

export default AllUsersItem;
