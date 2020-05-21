import React from "react";

export class Partners extends React.Component {
  render() {
    return (
      <div style={{ marginTop: "-10px" }}>
        <p style={{ marginBottom: -5 }}>Connect with top talent.</p>
        <img
          alt="Airbnb"
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c513.png"
          width="100px"
          position="absolute"
          style={{
            border: "0px solid  red",
            marginBottom: "50px",
            paddingRight: "40px"
          }}
        />
        <img
          alt="Lyft"
          src="https://cdn.freebiesupply.com/images/large/2x/lyft-logo-png-transparent.png"
          width="50px"
          style={{
            border: "0px solid  blue",
            marginBottom: "45px",
            paddingRight: "40px"
          }}
        />
        <img
          alt="Uber"
          src="https://www.freepnglogos.com/uploads/black-uber-logo-png-6.png"
          width="80px"
          position="absolute"
          style={{
            border: "0px solid  red",
            marginBottom: "57px",
            paddingRight: "45px"
          }}
        />
        <img
          alt="Tesla"
          src="https://www.freepnglogos.com/uploads/tesla-logo-png-27.png"
          width="40px"
          style={{
            border: "0px solid  blue",
            marginBottom: "55px",
            marginTop: "10px"
          }}
        />
      </div>
    );
  }
}
