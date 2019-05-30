import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: [],
      key: ""
    };
  }

  //Button to submit the todo
  onSubmit = text => {
    if (this.text.value === "") {
      alert("do something");
    } else {
      this.state.text.unshift(this.text.value);
      this.text.value = "";
      this.setState({ isSubmitted: true });
      console.log(this.state.text);
    }
  };

  //Button for deletion
  deleteItem = toBeDeleted => {
    var newItems = this.state.text.filter(item => {
      return item !== toBeDeleted;
    });
    this.setState({ text: newItems });
  };

  render() {
    const Type = this.state.text.map((item, index) => {
      return (
        <div key={index}>
          {item}
          <button onClick={this.deleteItem.bind(this, item)}>x</button>
        </div>
      );
    });

    return (
      <div className="App">
        <h1> To do list:</h1>
        <input
          placeholder="what to do now?"
          ref={text => {
            this.text = text;
          }}
        />
        <button onClick={this.onSubmit}>Submit </button>
        <div>{this.state.inputValue}</div>
        <span>{Type}</span>
      </div>
    );
  }
}

export default App;
