import React from "react";

const sameLine = {
  display: "inline",
  padding: 47,
  fontSize: "18px",
  marginRight: 116
};

export class UserLocation extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    let loco = e.target.value;
    this.props.onChange(loco);
  }

  render() {
    return (
      <div style={{ border: "0px solid red" }}>
        <h3 style={sameLine}>Location...</h3>
        <select
          id="location"
          className="select-css"
          onChange={this.handleChange}
          required
        >
          <option selected disabled hidden value="">
            select location
          </option>
          <option value="SF Bay Area">SF Bay Area</option>
          <option value="NYC">NYC</option>
          <option value="LA">LA</option>
        </select>
      </div>
    );
  }
}
