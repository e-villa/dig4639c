/*11
this.state ={cards:data.cards};

}

remove = (event)=>{
let datatitle =event.target.getAttribute("datatitle");

let localCards = this.state.cards;



}

**********************************************************:
import React from "react";
import Card from "../Card/";
import data from "../../data.json";

class CardList extends React.Component {

  constructor(props) {

    super(props);

    this.state = {cards: data.cards};
  }


    render() {
        return(
          <div>

              {
                  this.state.cards.map((card, index) => {
                    return <Card
                        key={index}
                        title={card.title}
                        content={card.content}
                        removedog={this.removeDog}
                        />
                })
              }

          </div>
        );
      }


    }


export default CardList;
**********************************************************************
*/


import React from "react";
import Card from "../Card/";
import data from "../../data.json";
import CardInput from "../CardInput/index.js";


class CardList extends React.Component {

  constructor(props) {

    super(props);

    this.state = {cards: data.cards};

  }

  removeDog = (event) => {


    let datatitle = event.target.getAttribute("datatitle");

    let localCards = this.state.cards;

    let changedCards = localCards.filter((card) => {
      return card.title !== datatitle;
    });

    this.setState({cards: changedCards});

  }

  addDog = (event) => {

    event.preventDefault();

    let titleElement = document.getElementById("newDogTitle");
    let contentElement = document.getElementById("newDogContent");

    if(titleElement.value.length !== 0
      && contentElement.value.length !== 0) {

      let newDog = {
        title: titleElement.value,
        content: contentElement.value
      };

      titleElement.value = "";
      contentElement.value = "";

      let localCards = this.state.cards;

      localCards.push(newDog);

      this.setState({cards: localCards});

    }


  }
/*  addDog = (event) => {

  let cards = this.state.cards;
  cards.push(<p>Card!</p>);
  console.log(this);

    this.setState({cards: data.cards});
  }
  showCards() {

      return(
        <ul>
        {this.state.cards.map((card, index) => {
          return (<li key={index}>{card}</li>);
        })}
        </ul>
      );

    }*/

  render() {
    return(
      <div>
      <CardInput adddog={this.addDog} />
          {
              this.state.cards.map((card, index) => {
                return <Card
                    key={index}
                    title={card.title}
                    content={card.content}
                    removedog={this.removeDog}
                    />
            })
          }
          {/*<button className="button" onClick={(event) => {this.props.addDog(event, 0)} }>Add Dog</button>*/}
      </div>
    );
  }


}

export default CardList;
