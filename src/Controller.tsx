import React, { FormEventHandler } from "react";
import "./Controller.css";

class Controller extends React.Component<{
  onInput: FormEventHandler<HTMLTextAreaElement>;
}> {
  initial: string = "";
  constructor(props: any) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="Controller">
        {<textarea id="mains" onChange={this.props.onInput}>{localStorage.getItem("lyrics") || ""}</textarea>}
      </div>
    );
  }
}

export default Controller;
