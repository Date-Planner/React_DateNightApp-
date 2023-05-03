import { Component } from "react";
import { Form, ButtonGroup, ToggleButton } from "react-bootstrap";

export default class FormQuestion extends Component {

    constructor(props){
        super(props);
        this.state = {
            selection: `${this.props.qType}-1`,
            displayToggle: false,
        }
    }

    setRadioValue = (eventTargeted) => {

        let displayState = parseInt(eventTargeted.at(-1)) % 2 ? false : true

        this.setState({
            selection: `${eventTargeted}`,
            displayToggle: displayState,
        })

    }



    render() {
        const radios = [
            { name: 'YES', value: `${this.props.qType}-1` },
            { name: 'NO', value: `${this.props.qType}-2` },
          ];

        return (
            <>
                    <div className="flex-container">
                        <p>{this.props.prompt}</p>
                        <ButtonGroup>
                            {radios.map((radio, idx) => (
                                <ToggleButton
                                    key={idx}
                                    id={`${this.props.qType}-${idx}`}
                                    type="radio"
                                    variant={idx % 2 ? 'outline-danger' : 'outline-success'}
                                    name={`${this.props.qType}`}
                                    value={radio.value}
                                    checked={this.state.selection === radio.value}
                                    onChange={(e) => this.setRadioValue(e.currentTarget.value)}
                                >
                                    {radio.name}
                                </ToggleButton>
                            ))}
                        </ButtonGroup>
                    </div>
                <Form.Group className="mb-3">
                    <Form.Select disabled={this.state.displayToggle}>
                        <option key={0}>{this.props.initialSelection}</option>
                        {this.props.selection.map( (available, idx) => <option key={idx + 1} > {available} </option>)}
                    </Form.Select>
                </Form.Group>
                <h1> form test </h1>
            </>
        );
    }


}