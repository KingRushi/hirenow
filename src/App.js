import React from "react";
import "./styles.css";
import { ButtonSearch } from "./ButtonSearch.js";
import { Occupation } from "./Occupation";
import { Experience } from "./Experience";
import { UserLocation } from "./UserLocation";
import { Partners } from "./Partners";
import { ReadingCSV } from "./DataReading";
import { SwitchLabels } from "./SwitchForm";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { PostCard02 } from "./ProfileTwo";

const titleDesign = {
  fontFamily: "Muli",
  // textAlign: "left",
  fontSize: 40,
  // padding: 55
  paddingTop: 40,
  paddingBottom: 45
};

const subTitleDesign = {
  fontFamily: "Playfair Display",
  textAlign: "left",
  fontSize: 15,
  fontStyle: "italic",
  marginTop: -50,
  marginBottom: 100
};

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false, name: "?", exp: "?", loc: "?" };
    this.handleClick = this.handleClick.bind(this);
    this.changeName = this.changeName.bind(this);
    this.changeExperience = this.changeExperience.bind(this);
    this.changeLocation = this.changeLocation.bind(this);
  }

  handleClick() {
    this.setState({ clicked: true });
  }

  changeName(newName) {
    this.setState({ name: newName });
  }

  changeExperience(newExp) {
    this.setState({ exp: newExp });
  }

  changeLocation(newLoc) {
    this.setState({ loc: newLoc });
  }

  checkSelects() {
    if (
      this.state.name === "?" ||
      this.state.exp === "?" ||
      this.state.loc === "?"
    ) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <h1 style={titleDesign}>Find your next hire within seconds!</h1>
              <h2 style={subTitleDesign}>
                 {<SwitchLabels />}
              </h2>
              <Partners />
              <Occupation onChange={this.changeName} />
              <br />
              <Experience onChange={this.changeExperience} />
              <br />
              <UserLocation onChange={this.changeLocation} />
              {/* <br /> */}
              {this.checkSelects() ? null : (
                <Link to="/results">
                  <ButtonSearch onClick={this.handleClick} />
                </Link>
              )}
            </Route>

            <Route path="/results">
              {this.state.clicked ? (
                <ReadingCSV
                  name={this.state.name}
                  years={this.state.exp}
                  loc={this.state.loc}
                />
              ) : null}
            </Route>

            <Route path={`/:id/:name`} component={PostCard02} />

          </Switch>

          <br />
        </div>
      </Router>
    );
  }
}
