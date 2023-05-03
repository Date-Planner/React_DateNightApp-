import React from "react";
import Form from 'react-bootstrap/Form';
// import { useState } from 'react';

import { ToggleButton, ButtonGroup } from "react-bootstrap";


class StayIn extends React.Component {

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


    render() {
        const radios = [
            { name: 'YES', value: '1' },
            { name: 'NO', value: '2' },
          ];

        return (
            <Form>
                    <div className="flex-container">
                        <p>Are you planning a meal?</p>
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
                    </div>
                <Form.Group className="mb-3">
                    {/* <Form.Label>Disabled select menu</Form.Label> */}
                    <Form.Select disabled={this.state.displayToggleFood}>
                        <option>Select Cuisine</option>
                        <option>Chinese</option>
                        <option>Pizza</option>
                        <option>French</option>
                    </Form.Select>
                </Form.Group>
            </Form>
        );
    }
}

export default StayIn