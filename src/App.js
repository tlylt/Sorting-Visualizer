import React, { Component } from "react";
import Navigation from "./Navigation";
import SortingPanel from "./SortingPanel";
import SortingShow from "./SortingShow";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      OriginalArray: [],
      numInArray: 75,
      speed: 1,
      initialColor: "black",
      onCompareColor: "red",
      currentAlgo: ""
    };
    this.handleReset = this.handleReset.bind(this);
    this.handleSetting = this.handleSetting.bind(this);
  }
  componentDidMount() {
    this.handleReset();
  }
  handleSetting(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    });
  }
  handleReset() {
    const newArray = [];
    for (let i = 0; i < this.state.numInArray; i++) {
      newArray.push(randomIntFromInterval(5, 400));
    }
    this.setState({
      OriginalArray: newArray
    });
  }
  render() {
    return (
      <div className="container">
        <Navigation />
        <SortingPanel
          handleReset={this.handleReset}
          handleSetting={this.handleSetting}
          numInArray={this.state.numInArray}
          onCompareColor={this.state.onCompareColor}
          initialColor={this.state.initialColor}
          speed={this.state.speed}
          OriginalArray={this.state.OriginalArray}
        />
        <SortingShow
          OriginalArray={this.state.OriginalArray}
          initialColor={this.state.initialColor}
        />
      </div>
    );
  }
}

// https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default App;
