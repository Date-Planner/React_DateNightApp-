import { Component } from "react";
import { ToggleButtonGroup, ToggleButton } from "react-bootstrap";

export default class FormQuestion extends Component {

    constructor(props) {
        super(props);
        this.state = {
            displayToggle: false,
            value: [1, 2, 3],
        }
    }

    handleChange = (val) => {
        this.setState({ value: val });
        // console.log(this.state.value);
        this.props.getMealSelection(val)
    }

    render() {
        return (
            <>
              <ToggleButtonGroup
                className="d-flex justify-content-between my-4"
                type="checkbox"
                value={this.state.value}
                onChange={this.handleChange}
              >
                <ToggleButton 
                  variant='outline-primary' 
                  id="tbg-btn-1" 
                  value={1}
                  className="py-2 px-4"
                >
                  Appetizer
                </ToggleButton>
                <ToggleButton 
                  variant='outline-success' 
                  id="tbg-btn-2" 
                  value={2}
                  className="py-2 px-4"
                >
                  Entree
                </ToggleButton>
                <ToggleButton 
                  variant='outline-danger' 
                  id="tbg-btn-3" 
                  value={3}
                  className="py-2 px-4"
                >
                  Dessert
                </ToggleButton>
              </ToggleButtonGroup>
            </>
          );
    }


}