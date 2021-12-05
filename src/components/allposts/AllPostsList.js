import React from "react";
import AllPostsItem from "./AllPostsItem";
import classes from "./allPostsList.module.css"

function AllPostsList(props) {
  return (
    <ul className={classes.list}>
      {props.posts.map((posts) => (
        <AllPostsItem
          key={posts.id}
          id={posts.id}
          image={posts.image}
          title={posts.title}
          body={posts.body}
        />
      ))}
    </ul>
  );
}

export default AllPostsList;
