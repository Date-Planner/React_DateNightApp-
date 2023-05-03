import React from "react";
import Form from 'react-bootstrap/Form';
// import { useState } from 'react';

import { ToggleButton, ButtonGroup } from "react-bootstrap";


class StayIn extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            selection: '1',
            displayToggle: false,
        }
    }

    setRadioValue = (eventTargeted) => {

        let displayState = eventTargeted % 2 ? false : true

        this.setState({
            selection: eventTargeted,
            displayToggle: displayState,
        });
    }


    render() {
        const radios = [
            { name: 'YES', value: '1' },
            { name: 'NO', value: '2' },
          ];

        return (
            <>
                <Form.Group className="mb-3">
                    <>
                        <ButtonGroup>
                            {radios.map((radio, idx) => (
                                <ToggleButton
                                    key={idx}
                                    id={`radio-${idx}`}
                                    type="radio"
                                    variant={idx % 2 ? 'outline-danger' : 'outline-success'}
                                    name="radio"
                                    value={radio.value}
                                    checked={this.state.selection === radio.value}
                                    onChange={(e) => this.setRadioValue(e.currentTarget.value)}
                                >
                                    {radio.name}
                                </ToggleButton>
                            ))}
                        </ButtonGroup>
                    </>
                    <p>{this.state.selection}</p>
                    <Form.Label>Disabled input</Form.Label>
                    <Form.Control placeholder="Disabled input" disabled={this.state.displayToggle} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Disabled select menu</Form.Label>
                    <Form.Select disabled>
                        <option>Disabled select</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Check type="checkbox" label="Can't check this" disabled />
                </Form.Group>
            </>
        );
    }
}

export default StayIn