import React, { Component } from "react";
import classes from "./allPostsItem.module.css";
import Card from "../ui/Card";

class Item extends Component {
  state = {
    id: this.props.id,
    image: this.props.image,
    title: this.props.title,
    body: this.props.body,
  };

  handleIncrement = (e) => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <li className={classes.item}>
        <Card>
          <div>
            <div className={classes.image}>
              <img src={this.state.image} alt={this.state.title} />
            </div>
            <div className={classes.content}>
              <h1>{this.state.id}</h1>
              <h3>{this.state.title}</h3>

              <p>{this.state.body}</p>
            </div>
            <div className={classes.actions}>
              <button className={classes.button1}
                
                onClick={() => this.props.onDelete(this.props.id)}
              >
                Delete
              </button>
              <p></p>
              <button className={classes.button1}
              onClick={() => this.props.onDelete(this.props.id)}>Modify</button>
            </div>
          </div>
        </Card>
      </li>
    );
  }

  styleCardHeader() {
    let classes = "card-header h4 text-white bg-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  styleCount() {
    const { count } = this.state;
    return count === 0 ? "No Items!" : count;
  }
}

export default Item;
