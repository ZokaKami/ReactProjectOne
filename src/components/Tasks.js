import React, { Component } from "react";

class Tasks extends Component {
  createTask(item) {
    return <span> {item.text}</span>;
  }
  deleteItem = toBeDeleted => {
    var newItems = this.Text.text.filter(item => {
      return item != toBeDeleted;
    });
    this.setState({ text: newItems });
  };
  render() {
    const Todo = this.props.Text.text.map(function(item, index) {
      return (
        <div key={index}>
          {item} <button onClick={this.props.deleteItem}> X</button>
        </div>
      );
    });

    return <span>{Todo}</span>;
  }
}

export default Tasks;
