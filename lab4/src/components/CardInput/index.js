import React from "react";

class CardInput extends React.Component {

    render() {
        return(
            <form onSubmit={this.props.adddog}>
                <label>{"Dog's Name:"} </label>
                <input type="text" name="dogTitle" id="newDogTitle" />
                <br />
                <label>Hobby: </label>
                <input type="text" name="dogContent" id="newDogContent" />
                <br />
                <button type="submit">Add Card</button>
            </form>
        );
    }

}

export default CardInput;
