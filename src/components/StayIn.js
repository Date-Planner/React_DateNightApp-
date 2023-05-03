import React from "react";
import Form from 'react-bootstrap/Form';
import FormQuestion from "./FormQuestion";
import { Button } from "react-bootstrap";


class StayIn extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            foodOptions: ['Chinese', 'Pizza', 'French'],
            movieOptions: ['Comedy', 'Drama', 'Action', 'Horror'],
        }
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        this.getSubmittedInfop();
    }

    render() {
        return (
            <>
            <Form onSubmit={this.handleFormSubmit}>
                    <FormQuestion 
                    qType = {'food'}
                    prompt = {'Are you planning a meal?'}
                    initialSelection = {'Select Cuisine'}
                    selection = {this.state.foodOptions}
                    />
                    <FormQuestion 
                    qType = {'movie'}
                    prompt = {'Do you want to include a movie?'}
                    initialSelection = {'Select Genre'}
                    selection = {this.state.movieOptions}
                    />
                    <Button variant="primary" type="submit">PLAN DATE</Button>
            </Form>
            <h1>test</h1>
            </>

        );
    }
}

export default StayIn
