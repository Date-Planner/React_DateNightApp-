import { Component } from "react";

export default class FormQuestion extends Component {

    constructor(props){
        super(props);
        this.state = {
            selection: '1',
            displayToggleFood: false,
            displayToggleMovie: false,
        }
    }

    setRadioValue = (eventTargeted) => {

        let displayState = eventTargeted % 2 ? false : true

        this.setState({
            selection: eventTargeted,
            displayToggleFood: displayState,
        });
    }



    render(){
        return(
            <h1>hello</h1>
        )
    }


}