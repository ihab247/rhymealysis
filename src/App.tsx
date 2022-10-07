import React from "react";
import "./App.css";
import Controller from "./Controller";
import Hub from "./Hub";
import TabBar from "./TabBar";

class App extends React.Component {
  props: any = {};
  state = { words: ""};

  constructor(props: object) {
    super(props);
    this.props = props;
    this.state = { words: localStorage.getItem("lyrics") || "" };
    this.handleControllerInput = this.handleControllerInput.bind(this);
  }

  renderHub() {
    return <Hub words={this.state.words}/>;
  }

  renderController() {
    return <Controller onInput={this.handleControllerInput}/>;
  }
  
  handleControllerInput(e: React.FormEvent<HTMLTextAreaElement>) {
    this.setState({words: e.currentTarget.value});
    localStorage.setItem("lyrics", e.currentTarget.value);
  }

  render() {
    return (
      <div className="App">
        {this.renderController()}
        {this.renderHub()}
      </div>
    );
  }
}

export default App;
