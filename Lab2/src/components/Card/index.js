import "./index.css";
class Card {

  constructor(props){
    this.props = props;
  }

render() {
return  `<div class="Card">${this.props.content}</div>`;
}

}
export default Card;
