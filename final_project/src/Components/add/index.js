import React, { Component } from 'react';
import './index.css';

class Add extends React.Component {


  class App extends Component {

    constructor(props) {
      super(props);

      this.state = {
        added: {}
      };

    }

    componentDidMount() {

      fetch("https://apiexample.website/contacts/add", {
        "method": "POST",
        "headers": {
          "api": "villa",
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        "body": JSON.stringify({
          "name": "Jeffg",
          "number": "777"
        })
      })
      .then(response => response.json() )
      .then((data) => this.setState({added: data.added}) )
      .catch(err => {
        console.log(err);
      });

    }
    response() {
      this.setState ({
        added: [
            <div id="addform">
              <div>
                <p>Name:</p>
                <input type="text" className="name"/>
                <p>Phone Number:</p>
                <input type="text" className="number"/>
                <br /><br />
                <div className="submission" onClick={() => this.addContact()}>
                  <p>Submit</p>
                </div>
              </div>
            </div>
        ]
      })
    }
    render() {
      return (
        <div>
          <h2>Added</h2>
          <p>{this.state.added.name}</p>
          <p>{this.state.added.number}</p>
        </div>
      );
    }
  }

  export default Add;
