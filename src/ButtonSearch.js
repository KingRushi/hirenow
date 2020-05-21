import React from "react";

const buttonStyle = {
  background: "#E63946",
  borderRadius: 10,
  fontSize: 15,
  color: "white",
  fontFamily: "Playfair Display",
  width: 150,
  height: 50,
  marginTop: 50
};

export class ButtonSearch extends React.Component {
  render() {
    return (
      <button style={buttonStyle} onClick={this.props.onClick}>
        Search
      </button>
    );
  }
}
