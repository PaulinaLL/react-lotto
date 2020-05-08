import React from "react";

class LuckyNumbers extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      numbers: [],
      number: null,
    };

    this.handleClick = this.handleClick.bind(this);
    this.resetClick = this.resetClick.bind(this);
  }
  handleClick() {}

  resetClick() {}

  render() {
    return (
      <>
        <div className="numbers"></div>
        <button>Show me lucky numbers:</button>
        <button>Reset</button>
      </>
    );
  }
}
export default LuckyNumbers;
