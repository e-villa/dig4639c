import React from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from "./Components/contacts/index.js";
import add from "./Components/add/index.js";
import remove from "./Components/remove/index.js";
import profile from "./Components/profile/index.js";


class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {contacts: []};

  }

  componentDidMount() {

    window.fetch("https://apiexample.website/contacts", {headers: {API: "villa"}})
    .then((res) => res.json())
    .then((data) => {
      this.setState({contacts: data.contacts});
    });

  }
  componentDidMount() {

    window.fetch("https://apiexample.website/contacts/add", {headers: {API: "villa"}})
    .then((res) => res.json())
    .then((data) => {
      this.setState({contacts: data.add});
    });

  }
  componentDidMount() {

    window.fetch("https://apiexample.website/contacts/remove", {headers: {API: "villa"}})
    .then((res) => res.json())
    .then((data) => {
      this.setState({contacts: data.remove});
    });

  }
  componentDidMount() {

    window.fetch("https://apiexample.website/profile", {headers: {API: "villa"}})
    .then((res) => res.json())
    .then((data) => {
      this.setState({contacts: data.profile});
    });

  }

  render() {
    return (
      <div>
       {
         this.state.contacts.map((value, index) => {
           return <p key={index}>{value.name}</p>;
         })
       }
      </div>
    );
  }
}

export default App;
