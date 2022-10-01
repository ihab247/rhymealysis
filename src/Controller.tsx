import React, { FormEventHandler } from "react";
import "./Controller.css";

class Controller extends React.Component<{
  onInput: FormEventHandler<HTMLTextAreaElement>;
}> {
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <div className="Controller">
        {<textarea id="mains" onChange={this.props.onInput}></textarea>}
      </div>
    );
  }
}

export default Controller;
