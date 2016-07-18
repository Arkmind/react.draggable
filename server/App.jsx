import React from 'react';

class App extends React.Component {
  constructor() {

    super();

    this.state = {
      data: [
        {
          x: 120,
          y: 120,
          type: 'if',
          classes: 'block if',
          condition: {
            a: "a",
            op: ">",
            b: "b"
          }
        },
      ]
    }

  }

  render() {
    console.log(this.state.data)
    return (
      <div>
      {this.state.data.map((tester, i) =>
        <Test key = {i} data = {tester} />
      )}
      </div>
    );
  }
}

class Test extends React.Component {
  render() {
    return (
      <div>
      <p>{this.props.data.x}</p>
      </div>
    );
  }

}

export default App;
