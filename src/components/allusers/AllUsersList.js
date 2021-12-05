import React from "react";
import AllUsersItem from "./AllUsersItem";

import classes from "./allUsersList.module.css";
function AllUsersList(props) {
  return (
    <ul className={classes.list}>
      {props.users.map((users) => (
        <AllUsersItem
          key={users.id}
          id={users.id}
          name={users.name}
          adress={users.adress}
          phone={users.phone}
        />
      ))}
    </ul>
  );
}

export default AllUsersList;
