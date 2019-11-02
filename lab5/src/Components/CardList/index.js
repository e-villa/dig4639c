import React, { Component } from "react";
import Card from "../Card/index";

class Cardlist extends Component {
  state = {
    periods: []
  };
  componentDidMount() {
    fetch("https://api.weather.gov/gridpoints/MLB/25,69/forecast")
      .then(res => res.json())
      .then(result => {
        const localperiods = result.properties.periods;
        // console.log(localperiods);
        this.setState({ periods: localperiods });
      });
  }
  render() {
    return (
      <div>
        <Card periods={this.state.periods}></Card>
      </div>
    );
  }
}

export default Cardlist;
