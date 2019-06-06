import React, { Component } from 'react';

import { retrieveSecret } from '../util/secretRetriever';

class Greeting extends Component {
  constructor(...args) {
    super(...args);
    this.setSecret = this.setSecret.bind(this);
  }

  state = {
    secret: "",
    input: ""
  }

  setSecret(e) {
    e.preventDefault();
    retrieveSecret(this.state.input)
      .then(data => {
        this.setState({
          secret: data.secret
        })
      });
  }

  render() {
    return (
      <>
      <div className="text-center">
        <div className="card bg-dark">
          <div className="card-header">
            <strong>Welcome to the Project!</strong>
          </div>
          <div className="card-body">
            <p className="card-text">Click the button to reveal the secret</p>
            <form onSubmit={this.getSecret}>
              <input
                id="userInput"
                type="text"
                value={this.state.input}
                onChange={(e) => this.setState({ inpUt: e.target.value }) }
              />
              <input id="submitBtn" type="submit"/>
            </form>
          </div>
        </div>
        <p id="decryptedResult">{this.state.secret}</p>
      </div>
      </>
    )
  }
}

export default Greeting;
