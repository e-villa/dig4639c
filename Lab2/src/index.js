import Card from "./components/Card/index.js";
import Element from "./Element.js";
let card = new Card({content:"This is your card"});


let element = new Element("p");
element.render(card.render());
