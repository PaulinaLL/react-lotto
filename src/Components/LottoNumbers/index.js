import React from "react";
import { getRandomNum, getRandomNumbers } from "../../helpers";

class LuckyNumbers extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      numbers: [],
      luckyNumber: null,
      reset: false,
    };

    this.handleClick = this.handleClick.bind(this);
    this.resetClick = this.resetClick.bind(this);
  }

  handleClick() {
    this.setState({
      numbers: getRandomNumbers(6),
      luckyNumber: getRandomNum(1, 11),
      reset: true,
    });
  }

  resetClick() {
    this.setState({
      numbers: [],
      luckyNumber: null,
      reset: false,
    });
  }

  render() {
    return (
      <>
        <div className="numbers">
          {this.state.numbers.map((num, index) => {
            return (
              <div className="number balls" key={index}>
                {num}
              </div>
            );
          })}
          <div>{this.state.luckyNumber}</div>
        </div>
        <div className="buttons">
          <button onClick={this.handleClick}>Show me lucky numbers</button>
          {this.state.reset ? (
            <button onClick={this.resetClick}>Reset</button>
          ) : null}
        </div>
      </>
    );
  }
}
export default LuckyNumbers;
