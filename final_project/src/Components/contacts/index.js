import react from "react";
import "./index.css";

class Contacts extends Component {

  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
    };
  }

  componentDidMount() {

    fetch("https://apiexample.website/contacts", {
    "method": "GET",
    "headers": {
       "api": "villa",
       "Content-Type": "application/json",
       "Accept": "application/json"
    }})
    .then(response => response.json() )
    .then((data) => {
      console.log(data);
      this.setState({contacts: data.contacts});
    })
    .then(fetch("https://apiexample.website/profile", {
        "method": "GET",
        "headers": {
           "api": "villa",
           "Content-Type": "application/json",
           "Accept": "application/json"
        }})
        .then(response => response.json() )
        .then((data) => {
          console.log(data);
          this.setState({profile: data});
        })
    );
  }

  render() {
    return (
      <div>
        <div id="contactsContainer">
          {
            this.state.contacts.map((value, index) => {
              return <p key={index} className="Contacts"><b>{index + 1}</b>  {value.name}</p>;
            })
          }
          </div>
        </div>
      </div>
    );
  }

}

export default Contacts;
