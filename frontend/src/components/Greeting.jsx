import React, { Component } from 'react';

class Greeting extends Component {
  state = {
    secret: "",
    input: ""
  }

  retrieveSecret = (e) => {
    e.preventDefault();
    let headers = {"Content-Type": "application/json"};
    let response = fetch("http://notlocalhost:8000/?input=" + e, {headers, });
    response.then(res => res.json())
      .then(data =>
        this.setState({
          secret: data.secret
        })
      )
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
                type="text"
                value={this.state.input}
                onChange={(e) => this.setState({ inpUt: e.target.value }) }
              />
              <input type="submit"/>
            </form>
          </div>
        </div>
        <p>{this.state.secret}</p>
      </div>
      </>
    )
  }
}

export default Greeting;
