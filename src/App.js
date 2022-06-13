import { Component } from "react";
import "./App.css";
import { image } from "./Component/img.js";
import dice1 from "./images/dice1.svg";
class App extends Component {
  constructor() {
    super();

    this.state = {
      firstDice: dice1,
      secondDice: dice1,
      btnName: "Roll Dice!",
      game: false,
    };

    this.startGame = this.startGame.bind(this);
  }

  startGame() {
    let randomFirst = Math.ceil(Math.random() * 6);
    let randomSecond = Math.ceil(Math.random() * 6);

    if (this.state.game) {
      return;
    }

    this.setState({
      game: true,
      btnName: "Rolling...",
    });
    
    setTimeout(() => {
      this.setState({
        game: false,
        btnName: "Roll Dice!",
        firstDice: image[`dice${randomFirst}`],
        secondDice: image[`dice${randomSecond}`],
      });
    }, 920);
  }

  render() {
    return (
      <div className="App">
        <div className="img-class">
          {this.state.game ? (
            <img className="img1" src={this.state.firstDice} width="200" />
          ) : (
            <img src={this.state.firstDice} width="200" />
          )}
          {this.state.game ? (
            <img className="img1" src={this.state.secondDice} width="200" />
          ) : (
            <img src={this.state.secondDice} width="200" />
          )}
        </div>
        <br />
        <button className="btn" onClick={this.startGame}>
          {this.state.btnName}
        </button>
      </div>
    );
  }
}

export default App;
