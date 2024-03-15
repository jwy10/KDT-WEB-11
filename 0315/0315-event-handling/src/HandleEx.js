import { Component } from 'react';

class HandleEx extends Component {
  state = {
    message: 'Hello World!',
  };

  goodbye = () => {
    this.setState({ message: 'GoodBye World!' });
  };

  render() {
    const { message } = this.state;
    return (
      <div>
        <h1>{message}</h1>
        <button onClick={this.goodbye}>클릭</button>
      </div>
    );
  }
}

export default HandleEx;
