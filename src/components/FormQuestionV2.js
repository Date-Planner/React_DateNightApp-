import { Component } from "react";
import { ToggleButtonGroup, ToggleButton } from "react-bootstrap";

export default class FormQuestion extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selection: `${this.props.qType}-1`,
            displayToggle: false,
            value: [1, 2, 3],
        }
    }

    setRadioValue = (eventTargeted) => {

        let displayState = parseInt(eventTargeted.at(-1)) % 2 ? false : true;

        this.setState({
            selection: `${eventTargeted}`,
            displayToggle: displayState,
        })


    }

    handleChange = (val) => {
        this.setState({ value: val });
        console.log(this.state.value);
    }




    render() {
        return (
            <>
                <ToggleButtonGroup type="checkbox" value={this.state.value} onChange={this.handleChange}>
                    <ToggleButton variant='outline-primary' id="tbg-btn-1" value={1}>
                        Appetizer
                    </ToggleButton>
                    <ToggleButton variant='outline-success' id="tbg-btn-2" value={2}>
                        Entree
                    </ToggleButton>
                    <ToggleButton variant='outline-danger' id="tbg-btn-3" value={3}>
                        Dessert
                    </ToggleButton>
                </ToggleButtonGroup>
                <h1>{this.state.value}</h1>
            </>
        );
    }


}