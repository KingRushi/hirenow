import React from "react";

const sameLine = {
  display: "inline",
  padding: 47,
  fontSize: "18px",
  marginRight: 60
};

export class Occupation extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const name = e.target.value;
    this.props.onChange(name);
  }

  render() {
    return (
      <div style={{ border: "0px solid red", paddingTop: "30px" }}>
        <h3 style={sameLine}>I am looking for...</h3>
        <select
          id="occupation"
          className="select-cssO"
          onChange={this.handleChange}
          required
        >
          <option selected disabled hidden value="">
            select occupation
          </option>
          <option value="Software Engineer">Software Engineers</option>
          <option value="Designer">Designers</option>
          <option value="Marketer">Marketers</option>
        </select>
      </div>
    );
  }
}
