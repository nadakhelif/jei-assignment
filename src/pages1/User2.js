import React, { Component } from "react";
import NavigationMain from "../components1/NavigationMain";
import Item from "../components/allposts/Item";
import classes from '../components1/title.module.css'
import Layout from "../components/layout/Layout";
class Items2 extends Component {
  state = {
    items: [
    {
      userId: 1,
      id: 1,
      image:
      "https://via.placeholder.com/600/ea51da" ,
      title:
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    },
    {
      userId: 1,
      id: 2,
      image:
      "https://via.placeholder.com/600/ea51da",
      title: "qui est esse",
      body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
    },
    {
      userId: 1,
      id: 3,
      image:
      "https://via.placeholder.com/600/ea51da",
      title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
    },
    {
      userId: 1,
      id: 4,
      image:
      "https://via.placeholder.com/600/ea51da",
      title: "eum et est occaecati",
      body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
    },
    {
      userId: 1,
      id: 5,
      image:
      "https://via.placeholder.com/600/ea51da",
      title: "nesciunt quas odio",
      body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
    },
  ],
};

handleDelete = (itemId) => {
  const items = this.state.items.filter((item) => item.id !== itemId);
  this.setState({ items: items });
};
render() {
  return (
    <React.Fragment>
      <Layout>
      <h1 className={classes.titre}>All Posts</h1>
      {this.state.items.map((item) => (
        <Item
          key={item.id}
          image={item.image}
          title={item.title}
          body={item.body}
          onDelete={this.handleDelete}
          id={item.id}
        />
      ))}
      </Layout>
    </React.Fragment>
  );
}
}

export default Items2;

