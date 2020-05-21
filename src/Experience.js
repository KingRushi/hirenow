import React from "react";

const sameLine = {
  display: "inline",
  padding: 47,
  fontSize: "18px",
  marginRight: 30
};

export class Experience extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(x) {
    const exp = x.target.value;
    this.props.onChange(exp);
  }

  render() {
    return (
      <div style={{ border: "0px solid red" }}>
        <h3 style={sameLine}>Years of experience...</h3>
        <select
          id="experience"
          className="select-cssY"
          onChange={this.handleChange}
          required
        >
          <option selected disabled hidden value="">
            select years
          </option>
          <option value="1 - 3 years">1 - 3 years</option>
          <option value="4 - 7 years">4 - 7 years</option>
          <option value="8+ years">8 + years</option>
        </select>
      </div>
    );
  }
}
